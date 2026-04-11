import { Component, signal, computed } from '@angular/core';
import { SPORT_EVENTS, ALL_SPORTS, ALL_SPORT_CITIES } from '../../data/sports.data';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-sports',
  imports: [],
  templateUrl: './sports.html',
  styleUrl: './sports.css',
})
export class Sports {
  readonly allEvents = SPORT_EVENTS;
  readonly sports = ['All', ...ALL_SPORTS];
  readonly cities = ALL_SPORT_CITIES;

  activeSport = signal('All');
  activeCity = signal('All');

  constructor(public cityService: CityService) {
    const city = cityService.selectedCity();
    if (ALL_SPORT_CITIES.includes(city)) this.activeCity.set(city);
  }

  filtered = computed(() => {
    const s = this.activeSport();
    const c = this.activeCity();
    return this.allEvents.filter(e => {
      const sportMatch = s === 'All' || e.sport === s;
      const cityMatch = c === 'All' || e.city === c;
      return sportMatch && cityMatch;
    });
  });

  sportIcons: Record<string, string> = {
    Cricket: '🏏', Football: '⚽', Kabaddi: '🤼', Badminton: '🏸',
    Tennis: '🎾', 'Formula 1': '🏎️', Wrestling: '🤼‍♂️', Running: '🏃'
  };

  getIcon(sport: string): string { return this.sportIcons[sport] || '🏆'; }
}
