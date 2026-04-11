import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    this.error = '';
    if (!this.email || !this.password) {
      this.error = 'Please fill in all fields.';
      return;
    }
    const success = this.auth.login(this.email, this.password);
    if (success) {
      this.router.navigate(['/']);
    } else {
      this.error = 'Invalid email or password.';
    }
  }
}
