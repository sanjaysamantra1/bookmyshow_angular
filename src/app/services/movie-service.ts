import { Injectable, signal, computed, inject } from '@angular/core';
import { MOVIES, ALL_GENRES, ALL_LANGUAGES } from '../data/movies.data';
import { CityService } from './city.service';

export interface MovieFilters { genres: string[]; languages: string[]; }

@Injectable({ providedIn: 'root' })
export class MovieService {
  private cityService = inject(CityService);

  readonly allMovies = MOVIES;
  readonly allGenres = ALL_GENRES;
  readonly allLanguages = ALL_LANGUAGES;

  filters = signal<MovieFilters>({ genres: [], languages: [] });

  // Movies available in selected city
  cityMovies = computed(() => {
    const city = this.cityService.selectedCity();
    return this.allMovies.filter(m => m.cities.includes(city));
  });

  // City + genre/lang filtered
  filteredMovies = computed(() => {
    const { genres, languages } = this.filters();
    return this.cityMovies().filter(movie => {
      const genreMatch = genres.length === 0 || movie.genre.some(g => genres.includes(g));
      const langMatch = languages.length === 0 || movie.language.some(l => languages.includes(l));
      return genreMatch && langMatch;
    });
  });

  toggleGenre(genre: string) {
    this.filters.update(f => ({ ...f, genres: f.genres.includes(genre) ? f.genres.filter(g => g !== genre) : [...f.genres, genre] }));
  }

  toggleLanguage(lang: string) {
    this.filters.update(f => ({ ...f, languages: f.languages.includes(lang) ? f.languages.filter(l => l !== lang) : [...f.languages, lang] }));
  }

  clearFilters() { this.filters.set({ genres: [], languages: [] }); }

  hasActiveFilters(): boolean {
    const f = this.filters();
    return f.genres.length > 0 || f.languages.length > 0;
  }
}
