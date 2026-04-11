import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie-service';
import { EventService } from '../../services/event-service';

@Component({
  selector: 'app-body',
  imports: [RouterLink],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  constructor(public movieService: MovieService, public eventService: EventService) {}

  get featuredMovies() {
    return this.movieService.allMovies.slice(0, 6);
  }

  get featuredEvents() {
    return this.eventService.allEvents.slice(0, 6);
  }
}
