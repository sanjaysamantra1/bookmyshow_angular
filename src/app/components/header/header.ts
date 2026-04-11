import { Component, HostListener } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CityService } from '../../services/city.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  userDropdownOpen = false;
  cityDropdownOpen = false;
  searchQuery = '';

  constructor(
    public auth: AuthService,
    public cityService: CityService,
    public searchService: SearchService,
    private router: Router
  ) {}

  toggleUserDropdown() { this.userDropdownOpen = !this.userDropdownOpen; this.cityDropdownOpen = false; }
  toggleCityDropdown() { this.cityDropdownOpen = !this.cityDropdownOpen; this.userDropdownOpen = false; }

  selectCity(city: string) {
    this.cityService.setCity(city);
    this.cityDropdownOpen = false;
  }

  onSearchInput(value: string) {
    this.searchQuery = value;
    this.searchService.setQuery(value);
  }

  onSearchKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') { this.searchService.clear(); this.searchQuery = ''; }
  }

  navigateResult(type: string, id: number) {
    this.searchService.clear();
    this.searchQuery = '';
    if (type === 'movie') this.router.navigate(['/movies', id]);
    else this.router.navigate(['/events']);
  }

  onLogout() { this.userDropdownOpen = false; this.auth.logout(); }

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent) {
    const t = e.target as HTMLElement;
    if (!t.closest('.user-menu-wrap')) this.userDropdownOpen = false;
    if (!t.closest('.city-menu-wrap')) this.cityDropdownOpen = false;
    if (!t.closest('.search-wrap')) this.searchService.isOpen.set(false);
  }
}
