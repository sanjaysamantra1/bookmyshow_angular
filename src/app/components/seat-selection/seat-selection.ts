import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie-service';
import { BookingService, SHOW_TIMES, SEAT_CATEGORIES, SeatSelection, ShowTime } from '../../services/booking.service';
import { AuthService } from '../../services/auth.service';
import { CityService } from '../../services/city.service';
import { Movie } from '../../data/movies.data';

@Component({
  selector: 'app-seat-selection',
  imports: [RouterLink, FormsModule, DecimalPipe],
  templateUrl: './seat-selection.html',
  styleUrl: './seat-selection.css',
})
export class SeatSelectionComponent implements OnInit {
  movie: Movie | undefined;
  showTimes = SHOW_TIMES;
  seatCategories = SEAT_CATEGORIES;

  selectedShow: ShowTime | null = null;
  seatCounts: Record<string, number> = {};
  step: 'showtime' | 'seats' | 'payment' = 'showtime';

  cardNumber = '';
  cardName = '';
  expiry = '';
  cvv = '';
  paymentMethod: 'card' | 'upi' | 'wallet' = 'card';
  upiId = '';

  isProcessing = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private bookingService: BookingService,
    public auth: AuthService,
    public cityService: CityService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movieService.allMovies.find(m => m.id === id);
    this.seatCategories.forEach(c => this.seatCounts[c.category] = 0);
    if (!this.auth.isLoggedIn()) this.router.navigate(['/login']);
  }

  selectShow(show: ShowTime) {
    this.selectedShow = show;
  }

  proceedToSeats() {
    if (!this.selectedShow) return;
    this.step = 'seats';
  }

  proceedToPayment() {
    if (this.totalSeats === 0) return;
    this.step = 'payment';
  }

  get seatsBreakdown(): SeatSelection[] {
    if (!this.selectedShow) return [];
    return this.seatCategories
      .filter(c => (this.seatCounts[c.category] || 0) > 0)
      .map(c => ({
        category: c.category,
        count: this.seatCounts[c.category],
        pricePerSeat: Math.round(this.selectedShow!.price * c.multiplier)
      }));
  }

  get totalSeats(): number {
    return Object.values(this.seatCounts).reduce((a, b) => a + b, 0);
  }

  get subtotal(): number {
    return this.seatsBreakdown.reduce((sum, s) => sum + s.count * s.pricePerSeat, 0);
  }

  get convenienceFee(): number {
    return Math.round(this.subtotal * 0.05);
  }

  get totalAmount(): number {
    return this.subtotal + this.convenienceFee;
  }

  increment(cat: string) {
    if (this.totalSeats < 10) this.seatCounts[cat] = (this.seatCounts[cat] || 0) + 1;
  }
  decrement(cat: string) {
    if ((this.seatCounts[cat] || 0) > 0) this.seatCounts[cat]--;
  }

  confirmPayment() {
    if (!this.movie || !this.selectedShow) return;
    this.isProcessing = true;
    setTimeout(() => {
      const booking = this.bookingService.createBooking({
        movieId: this.movie!.id,
        movieTitle: this.movie!.title,
        moviePoster: this.movie!.poster,
        showTime: this.selectedShow!,
        seats: this.seatsBreakdown,
        totalAmount: this.totalAmount,
        convenienceFee: this.convenienceFee,
        city: this.cityService.selectedCity()
      });
      this.isProcessing = false;
      this.router.navigate(['/booking-confirmation', booking.id]);
    }, 1800);
  }
}
