import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  dropdownOpen = false;

  constructor(public auth: AuthService) {}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  onLogout() {
    this.dropdownOpen = false;
    this.auth.logout();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.user-menu-wrap')) {
      this.dropdownOpen = false;
    }
  }
}
