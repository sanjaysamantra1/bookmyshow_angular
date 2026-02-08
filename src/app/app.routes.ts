import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { MovieList } from './components/movie-list/movie-list';
import { Body } from './components/body/body';
import { EventList } from './components/event-list/event-list';

export const routes: Routes = [
  { path: '', component: Body },
  { path: 'movies', component: MovieList },
  { path: 'events', component: EventList }
];
