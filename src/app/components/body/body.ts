import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  imports: [],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
   movies = [
    { title: 'Jawan', genre: 'Action / Thriller', poster: 'images/Movies-1.png' },
    { title: 'Salaar', genre: 'Action / Drama', poster: 'images/Movies-2.png' },
    { title: 'Leo', genre: 'Action', poster: 'images/Movies-3.png' },
    { title: 'Dunki', genre: 'Comedy / Drama', poster: 'images/Movies-4.png' },
    { title: 'Animal', genre: 'Crime / Action', poster: 'images/Movies-5.png' },
    { title: 'Fighter', genre: 'Action / Thriller', poster: 'images/Movies-2.png' }
  ];

  events = [
    { name: 'Arijit Singh Live', location: 'Mumbai', banner: 'images/Events-1.png' },
    { name: 'Standup Comedy Night', location: 'Pune', banner: 'images/Events-2.png' },
    { name: 'Music Festival', location: 'Bengaluru', banner: 'images/Events-3.png' },
    { name: 'Drama Play', location: 'Delhi', banner: 'images/Events-4.png' },
    { name: 'Drama Play', location: 'Delhi', banner: 'images/Events-5.png' }
  ];
}
