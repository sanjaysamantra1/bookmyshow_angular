import { Component } from '@angular/core';
import { MovieService } from '../../services/movie-service';

@Component({
  selector: 'app-movie-filter',
  imports: [],
  templateUrl: './movie-filter.html',
  styleUrl: './movie-filter.css',
})
export class MovieFilter {
  constructor(public movieService: MovieService) {}

  isGenreSelected(genre: string): boolean {
    return this.movieService.filters().genres.includes(genre);
  }

  isLanguageSelected(lang: string): boolean {
    return this.movieService.filters().languages.includes(lang);
  }
}
