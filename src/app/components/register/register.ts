import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  error = '';
  success = '';

  constructor(private auth: AuthService, private router: Router) {}

  onRegister() {
    this.error = '';
    this.success = '';
    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      this.error = 'Please fill in all fields.';
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match.';
      return;
    }
    if (this.password.length < 6) {
      this.error = 'Password must be at least 6 characters.';
      return;
    }
    const success = this.auth.register(this.name, this.email, this.password);
    if (success) {
      this.success = 'Account created! Redirecting to login...';
      setTimeout(() => this.router.navigate(['/login']), 1500);
    } else {
      this.error = 'An account with this email already exists.';
    }
  }
}
