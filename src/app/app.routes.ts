import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { MovieList } from './components/movie-list/movie-list';
import { EventList } from './components/event-list/event-list';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { MovieDetail } from './components/movie-detail/movie-detail';
import { SeatSelectionComponent } from './components/seat-selection/seat-selection';
import { BookingConfirmation } from './components/booking-confirmation/booking-confirmation';
import { MyBookings } from './components/my-bookings/my-bookings';
import { Stream } from './components/stream/stream';
import { Plays } from './components/plays/plays';
import { Sports } from './components/sports/sports';
import { Activities } from './components/activities/activities';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'movies', component: MovieList },
  { path: 'movies/:id', component: MovieDetail },
  { path: 'movies/:id/book', component: SeatSelectionComponent, canActivate: [authGuard] },
  { path: 'events', component: EventList },
  { path: 'stream', component: Stream },
  { path: 'plays', component: Plays },
  { path: 'sports', component: Sports },
  { path: 'activities', component: Activities },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'bookings', component: MyBookings, canActivate: [authGuard] },
  { path: 'booking-confirmation/:id', component: BookingConfirmation, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];
