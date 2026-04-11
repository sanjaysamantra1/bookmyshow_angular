import { Injectable, signal, computed } from '@angular/core';
import { EVENTS, ALL_EVENT_CATEGORIES, ALL_EVENT_LANGUAGES, ALL_EVENT_CITIES, Event } from '../data/events.data';

export interface EventFilters {
  categories: string[];
  languages: string[];
  cities: string[];
}

@Injectable({ providedIn: 'root' })
export class EventService {
  readonly allEvents = EVENTS;
  readonly allCategories = ALL_EVENT_CATEGORIES;
  readonly allLanguages = ALL_EVENT_LANGUAGES;
  readonly allCities = ALL_EVENT_CITIES;

  filters = signal<EventFilters>({ categories: [], languages: [], cities: [] });

  filteredEvents = computed(() => {
    const { categories, languages, cities } = this.filters();
    return this.allEvents.filter(event => {
      const catMatch = categories.length === 0 || event.category.some(c => categories.includes(c));
      const langMatch = languages.length === 0 || event.language.some(l => languages.includes(l));
      const cityMatch = cities.length === 0 || cities.includes(event.city);
      return catMatch && langMatch && cityMatch;
    });
  });

  toggleCategory(category: string) {
    this.filters.update(f => {
      const categories = f.categories.includes(category)
        ? f.categories.filter(c => c !== category)
        : [...f.categories, category];
      return { ...f, categories };
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

  toggleCity(city: string) {
    this.filters.update(f => {
      const cities = f.cities.includes(city)
        ? f.cities.filter(c => c !== city)
        : [...f.cities, city];
      return { ...f, cities };
    });
  }

  clearFilters() {
    this.filters.set({ categories: [], languages: [], cities: [] });
  }

  hasActiveFilters(): boolean {
    const f = this.filters();
    return f.categories.length > 0 || f.languages.length > 0 || f.cities.length > 0;
  }
}
