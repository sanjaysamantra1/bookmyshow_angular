import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { MovieList } from './components/movie-list/movie-list';
import { EventList } from './components/event-list/event-list';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { MovieDetail } from './components/movie-detail/movie-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'movies', component: MovieList },
  { path: 'movies/:id', component: MovieDetail },
  { path: 'events', component: EventList },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: '**', redirectTo: '' }
];
