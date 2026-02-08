import { Navbar } from './components/navbar/navbar';
import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Body } from './components/body/body';
import { Footer } from './components/footer/footer';
import { Carousal } from './components/carousal/carousal';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Navbar,
    Carousal,
    Body,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bookmyshow_angular');
}
