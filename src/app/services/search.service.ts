import { Injectable, signal, computed } from '@angular/core';
import { MOVIES } from '../data/movies.data';
import { EVENTS } from '../data/events.data';

export interface SearchResult {
  type: 'movie' | 'event';
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class SearchService {
  query = signal('');
  isOpen = signal(false);

  results = computed((): SearchResult[] => {
    const q = this.query().trim().toLowerCase();
    if (q.length < 2) return [];

    const movies: SearchResult[] = MOVIES
      .filter(m => m.title.toLowerCase().includes(q) || m.genre.some(g => g.toLowerCase().includes(q)))
      .slice(0, 5)
      .map(m => ({ type: 'movie', id: m.id, title: m.title, subtitle: m.genre.join(', '), image: m.poster }));

    const events: SearchResult[] = EVENTS
      .filter(e => e.name.toLowerCase().includes(q) || e.category.some(c => c.toLowerCase().includes(q)))
      .slice(0, 4)
      .map(e => ({ type: 'event', id: e.id, title: e.name, subtitle: `${e.city} · ${e.date}`, image: e.banner }));

    return [...movies, ...events];
  });

  setQuery(q: string) {
    this.query.set(q);
    this.isOpen.set(q.length >= 2);
  }

  clear() {
    this.query.set('');
    this.isOpen.set(false);
  }
}
