import { Component } from '@angular/core';
import { Carousal } from '../carousal/carousal';
import { Body } from '../body/body';

@Component({
  selector: 'app-home',
  imports: [Carousal, Body],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
