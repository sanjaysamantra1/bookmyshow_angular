import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie-service';
import { Movie } from '../../data/movies.data';

@Component({
  selector: 'app-movie-detail',
  imports: [RouterLink],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css',
})
export class MovieDetail implements OnInit {
  movie: Movie | undefined;

  // Static extra detail data (would come from API in real app)
  movieExtras: Record<number, { description: string; duration: string; director: string; cast: string[] }> = {
    1: { description: 'Jawan is a high-octane action thriller about a man driven to right the wrongs in society.', duration: '2h 49m', director: 'Atlee', cast: ['Shah Rukh Khan', 'Nayanthara', 'Vijay Sethupathi'] },
    2: { description: 'Salaar is a tale about a violent man who is caught between honouring a promise and protecting his friends.', duration: '3h 0m', director: 'Prashanth Neel', cast: ['Prabhas', 'Prithviraj Sukumaran', 'Shruti Haasan'] },
    3: { description: 'Leo is an action thriller about a mild-mannered man whose past comes back to haunt him.', duration: '2h 44m', director: 'Lokesh Kanagaraj', cast: ['Vijay', 'Trisha Krishnan', 'Sanjay Dutt'] },
    4: { description: 'Dunki follows a group of people who take an illegal route to travel to foreign shores.', duration: '2h 41m', director: 'Rajkumar Hirani', cast: ['Shah Rukh Khan', 'Taapsee Pannu', 'Vicky Kaushal'] },
    5: { description: 'Animal is a story of a man\'s love and obsession for his father, and his descent into violence.', duration: '3h 21m', director: 'Sandeep Reddy Vanga', cast: ['Ranbir Kapoor', 'Rashmika Mandanna', 'Anil Kapoor'] },
    6: { description: 'Fighter is a patriotic action drama about India\'s first aerial action film.', duration: '2h 46m', director: 'Siddharth Anand', cast: ['Hrithik Roshan', 'Deepika Padukone', 'Anil Kapoor'] },
    7: { description: 'Pushpa 2 continues the saga of Pushpa Raj, now a powerful and feared figure in the red sandalwood trade.', duration: '3h 21m', director: 'Sukumar', cast: ['Allu Arjun', 'Rashmika Mandanna', 'Fahadh Faasil'] },
    8: { description: 'A Christmas night that changes two strangers\' lives forever in an unexpected mystery.', duration: '2h 25m', director: 'Sriram Raghavan', cast: ['Katrina Kaif', 'Vijay Sethupathi'] },
    9: { description: 'A family drama about relationships, expectations, and the truth hidden behind them.', duration: '2h 25m', director: 'Trivikram Srinivas', cast: ['Mahesh Babu', 'Sreeleela', 'Prakash Raj'] },
    10: { description: 'Hanu-Man is a superhero origin story about an ordinary man who gains the powers of Lord Hanuman.', duration: '2h 32m', director: 'Prasanth Varma', cast: ['Teja Sajja', 'Amritha Aiyer', 'Varalaxmi Sarathkumar'] },
    11: { description: 'Captain Miller is set in the pre-independence era about a rebel who fights against oppression.', duration: '2h 37m', director: 'Arun Matheswaran', cast: ['Dhanush', 'Priyanka Arul Mohan', 'Sundeep Kishan'] },
    12: { description: 'Article 370 depicts the abrogation of Article 370 and the events leading up to it.', duration: '2h 38m', director: 'Aditya Suhas Jambhale', cast: ['Yami Gautam', 'Priyamani', 'Arun Govil'] },
  };

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movieService.allMovies.find(m => m.id === id);
  }

  get extras() {
    return this.movie ? this.movieExtras[this.movie.id] : null;
  }

  get relatedMovies() {
    if (!this.movie) return [];
    return this.movieService.allMovies
      .filter(m => m.id !== this.movie!.id && m.genre.some(g => this.movie!.genre.includes(g)))
      .slice(0, 5);
  }
}
