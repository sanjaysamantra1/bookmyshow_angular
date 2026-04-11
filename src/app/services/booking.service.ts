import { Injectable, signal } from '@angular/core';

export interface ShowTime {
  id: string;
  time: string;
  format: string;
  venue: string;
  price: number;
}

export interface SeatSelection {
  category: string;
  count: number;
  pricePerSeat: number;
}

export interface Booking {
  id: string;
  movieId: number;
  movieTitle: string;
  moviePoster: string;
  showTime: ShowTime;
  seats: SeatSelection[];
  totalAmount: number;
  convenienceFee: number;
  city: string;
  bookedAt: string;
  status: 'confirmed' | 'cancelled';
}

export const SHOW_TIMES: ShowTime[] = [
  { id: 'st1', time: '10:00 AM', format: '2D', venue: 'PVR Cinemas, Forum Mall', price: 200 },
  { id: 'st2', time: '01:15 PM', format: '2D', venue: 'INOX Garuda Mall', price: 220 },
  { id: 'st3', time: '04:30 PM', format: '3D', venue: 'Cinepolis Orion', price: 300 },
  { id: 'st4', time: '07:45 PM', format: 'IMAX', venue: 'PVR IMAX, VR Mall', price: 450 },
  { id: 'st5', time: '10:30 PM', format: '2D', venue: 'SPI Cinemas', price: 180 },
];

export const SEAT_CATEGORIES = [
  { category: 'Recliner', multiplier: 2.2 },
  { category: 'Premium', multiplier: 1.5 },
  { category: 'Executive', multiplier: 1.0 },
  { category: 'Normal', multiplier: 0.7 },
];

@Injectable({ providedIn: 'root' })
export class BookingService {
  private readonly KEY = 'bms_bookings';

  bookings = signal<Booking[]>(this.loadBookings());

  private loadBookings(): Booking[] {
    try {
      return JSON.parse(localStorage.getItem(this.KEY) || '[]');
    } catch { return []; }
  }

  private save() {
    localStorage.setItem(this.KEY, JSON.stringify(this.bookings()));
  }

  createBooking(booking: Omit<Booking, 'id' | 'bookedAt' | 'status'>): Booking {
    const newBooking: Booking = {
      ...booking,
      id: 'BMS' + Date.now(),
      bookedAt: new Date().toLocaleString('en-IN'),
      status: 'confirmed'
    };
    this.bookings.update(list => [newBooking, ...list]);
    this.save();
    return newBooking;
  }

  cancelBooking(id: string) {
    this.bookings.update(list =>
      list.map(b => b.id === id ? { ...b, status: 'cancelled' as const } : b)
    );
    this.save();
  }

  getBookingById(id: string): Booking | undefined {
    return this.bookings().find(b => b.id === id);
  }
}
