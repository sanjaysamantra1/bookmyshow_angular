import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MovieFilter } from '../movie-filter/movie-filter';
import { MovieService } from '../../services/movie-service';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-movie-list',
  imports: [MovieFilter, RouterLink],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {
  constructor(public movieService: MovieService, public cityService: CityService) {}
}
