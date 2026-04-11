import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie-service';
import { EventService } from '../../services/event-service';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-body',
  imports: [RouterLink],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  constructor(
    public movieService: MovieService,
    public eventService: EventService,
    public cityService: CityService
  ) {}

  get featuredMovies() { return this.movieService.cityMovies().slice(0, 6); }
  get featuredEvents() {
    const city = this.cityService.selectedCity();
    const cityEvents = this.eventService.allEvents.filter(e => e.city === city);
    return (cityEvents.length >= 3 ? cityEvents : this.eventService.allEvents).slice(0, 6);
  }
}
