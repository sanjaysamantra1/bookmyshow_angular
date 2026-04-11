import { DecimalPipe, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-bookings',
  imports: [RouterLink, DecimalPipe, TitleCasePipe],
  templateUrl: './my-bookings.html',
  styleUrl: './my-bookings.css',
})
export class MyBookings implements OnInit {
  constructor(
    public bookingService: BookingService,
    public auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.auth.isLoggedIn()) this.router.navigate(['/login']);
  }

  cancel(id: string) {
    if (confirm('Cancel this booking?')) this.bookingService.cancelBooking(id);
  }

  get userBookings() {
    return this.bookingService.bookings();
  }
}
