import { Injectable, signal, computed } from '@angular/core';
import { MOVIES, ALL_GENRES, ALL_LANGUAGES, Movie } from '../data/movies.data';

export interface MovieFilters {
  genres: string[];
  languages: string[];
}

@Injectable({ providedIn: 'root' })
export class MovieService {
  readonly allMovies = MOVIES;
  readonly allGenres = ALL_GENRES;
  readonly allLanguages = ALL_LANGUAGES;

  filters = signal<MovieFilters>({ genres: [], languages: [] });

  filteredMovies = computed(() => {
    const { genres, languages } = this.filters();
    return this.allMovies.filter(movie => {
      const genreMatch = genres.length === 0 || movie.genre.some(g => genres.includes(g));
      const langMatch = languages.length === 0 || movie.language.some(l => languages.includes(l));
      return genreMatch && langMatch;
    });
  });

  toggleGenre(genre: string) {
    this.filters.update(f => {
      const genres = f.genres.includes(genre)
        ? f.genres.filter(g => g !== genre)
        : [...f.genres, genre];
      return { ...f, genres };
    });
  }

  toggleLanguage(lang: string) {
    this.filters.update(f => {
      const languages = f.languages.includes(lang)
        ? f.languages.filter(l => l !== lang)
        : [...f.languages, lang];
      return { ...f, languages };
    });
  }

  clearFilters() {
    this.filters.set({ genres: [], languages: [] });
  }

  hasActiveFilters(): boolean {
    const f = this.filters();
    return f.genres.length > 0 || f.languages.length > 0;
  }
}
