import { Component, signal, computed } from '@angular/core';
import { PLAYS, ALL_PLAY_TYPES, ALL_PLAY_CITIES } from '../../data/plays.data';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-plays',
  imports: [],
  templateUrl: './plays.html',
  styleUrl: './plays.css',
})
export class Plays {
  readonly allPlays = PLAYS;
  readonly types = ['All', ...ALL_PLAY_TYPES];
  readonly cities = ALL_PLAY_CITIES;

  activeType = signal('All');
  activeCity = signal('All');

  constructor(public cityService: CityService) {
    // pre-select user's city if available
    const city = cityService.selectedCity();
    if (ALL_PLAY_CITIES.includes(city)) this.activeCity.set(city);
  }

  filtered = computed(() => {
    const t = this.activeType();
    const c = this.activeCity();
    return this.allPlays.filter(p => {
      const typeMatch = t === 'All' || p.type === t;
      const cityMatch = c === 'All' || p.city === c;
      return typeMatch && cityMatch;
    });
  });
}
