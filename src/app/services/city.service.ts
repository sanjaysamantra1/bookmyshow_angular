import { Injectable, signal } from '@angular/core';

export const CITIES = [
  'Bengaluru', 'Mumbai', 'Delhi', 'Chennai', 'Hyderabad',
  'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Kochi'
];

@Injectable({ providedIn: 'root' })
export class CityService {
  readonly cities = CITIES;

  private _selected = signal<string>(
    localStorage.getItem('bms_city') || 'Bengaluru'
  );

  readonly selectedCity = this._selected.asReadonly();

  setCity(city: string) {
    localStorage.setItem('bms_city', city);
    this._selected.set(city);
  }
}
