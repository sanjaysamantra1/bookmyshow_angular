import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Carousal } from '../carousal/carousal';
import { Body } from '../body/body';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    Navbar,
    Carousal,
    Body,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
