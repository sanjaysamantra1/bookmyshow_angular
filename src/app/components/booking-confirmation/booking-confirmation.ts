import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookingService, Booking } from '../../services/booking.service';

@Component({
  selector: 'app-booking-confirmation',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './booking-confirmation.html',
  styleUrl: './booking-confirmation.css',
})
export class BookingConfirmation implements OnInit {
  booking: Booking | undefined;

  constructor(private route: ActivatedRoute, private bookingService: BookingService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.booking = this.bookingService.getBookingById(id);
  }

  get totalSeats(): number {
    return this.booking?.seats.reduce((s, x) => s + x.count, 0) ?? 0;
  }
}
