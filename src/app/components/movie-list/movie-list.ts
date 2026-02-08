import { Component } from '@angular/core';
import { MovieFilter } from '../movie-filter/movie-filter';

@Component({
  selector: 'app-movie-list',
  imports: [
    MovieFilter
  ],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {

}
