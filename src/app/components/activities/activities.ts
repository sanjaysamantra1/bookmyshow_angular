import { Component, signal, computed } from '@angular/core';
import { ACTIVITIES, ALL_ACTIVITY_CATEGORIES, ALL_ACTIVITY_CITIES } from '../../data/activities.data';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-activities',
  imports: [],
  templateUrl: './activities.html',
  styleUrl: './activities.css',
})
export class Activities {
  readonly allActivities = ACTIVITIES;
  readonly categories = ['All', ...ALL_ACTIVITY_CATEGORIES];
  readonly cities = ALL_ACTIVITY_CITIES;

  activeCategory = signal('All');
  activeCity = signal('All');

  constructor(public cityService: CityService) {
    const city = cityService.selectedCity();
    if (ALL_ACTIVITY_CITIES.includes(city)) this.activeCity.set(city);
  }

  filtered = computed(() => {
    const c = this.activeCategory();
    const city = this.activeCity();
    return this.allActivities.filter(a => {
      const catMatch = c === 'All' || a.category === c;
      const cityMatch = city === 'All' || a.city === city;
      return catMatch && cityMatch;
    });
  });

  categoryIcons: Record<string, string> = {
    Workshop: '🎨', Gaming: '🎮', Cooking: '👨‍🍳', Adventure: '🧗',
    'Water Sports': '🏄', Art: '🖌️', Photography: '📷', Wellness: '🧘',
    Racing: '🏎️', All: '✨'
  };

  getIcon(cat: string): string { return this.categoryIcons[cat] || '⭐'; }
}
