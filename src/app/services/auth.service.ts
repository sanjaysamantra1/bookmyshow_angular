import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly STORAGE_KEY = 'bms_users';
  private readonly SESSION_KEY = 'bms_current_user';

  currentUser = signal<User | null>(this.loadSession());

  constructor(private router: Router) {}

  private loadSession(): User | null {
    const stored = sessionStorage.getItem(this.SESSION_KEY);
    return stored ? JSON.parse(stored) : null;
  }

  private getUsers(): Record<string, { name: string; password: string }> {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  }

  register(name: string, email: string, password: string): boolean {
    const users = this.getUsers();
    if (users[email]) return false; // already exists
    users[email] = { name, password };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
    return true;
  }

  login(email: string, password: string): boolean {
    const users = this.getUsers();
    const user = users[email];
    if (!user || user.password !== password) return false;
    const loggedIn: User = { name: user.name, email };
    sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(loggedIn));
    this.currentUser.set(loggedIn);
    return true;
  }

  logout(): void {
    sessionStorage.removeItem(this.SESSION_KEY);
    this.currentUser.set(null);
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return this.currentUser() !== null;
  }
}
