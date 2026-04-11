import { Component, signal, computed } from '@angular/core';
import { STREAM_TITLES, STREAM_CATEGORIES, StreamTitle } from '../../data/stream.data';

@Component({
  selector: 'app-stream',
  imports: [],
  templateUrl: './stream.html',
  styleUrl: './stream.css',
})
export class Stream {
  readonly titles = STREAM_TITLES;
  readonly categories = STREAM_CATEGORIES;
  activeFilter = signal('All');

  featured = this.titles.slice(0, 3);

  filtered = computed(() => {
    const f = this.activeFilter();
    if (f === 'All') return this.titles;
    if (f === 'Series') return this.titles.filter(t => t.type === 'Series');
    if (f === 'Movie') return this.titles.filter(t => t.type === 'Movie');
    return this.titles.filter(t => t.tag === f);
  });

  setFilter(cat: string) { this.activeFilter.set(cat); }
}
