import { Component } from '@angular/core';
import { EventService } from '../../services/event-service';

@Component({
  selector: 'app-event-filter',
  imports: [],
  templateUrl: './event-filter.html',
  styleUrl: './event-filter.css',
})
export class EventFilter {
  constructor(public eventService: EventService) {}

  isCategorySelected(cat: string): boolean {
    return this.eventService.filters().categories.includes(cat);
  }

  isLanguageSelected(lang: string): boolean {
    return this.eventService.filters().languages.includes(lang);
  }

  isCitySelected(city: string): boolean {
    return this.eventService.filters().cities.includes(city);
  }
}
