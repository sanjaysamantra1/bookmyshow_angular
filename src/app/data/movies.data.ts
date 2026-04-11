export interface Movie {
  id: number;
  title: string;
  genre: string[];
  language: string[];
  rating: number;
  votes: string;
  poster: string;
  certification: string;
  cities: string[];
}

export const MOVIES: Movie[] = [
  { id: 1, title: 'Jawan', genre: ['Action', 'Thriller'], language: ['Hindi', 'Tamil', 'Telugu'], rating: 8.2, votes: '1.2L', poster: 'images/Movies-1.png', certification: 'UA', cities: ['Mumbai', 'Delhi', 'Bengaluru', 'Chennai', 'Hyderabad'] },
  { id: 2, title: 'Salaar', genre: ['Action', 'Drama'], language: ['Telugu', 'Kannada', 'Hindi'], rating: 7.5, votes: '89K', poster: 'images/Movies-2.png', certification: 'A', cities: ['Bengaluru', 'Hyderabad', 'Chennai', 'Pune'] },
  { id: 3, title: 'Leo', genre: ['Action', 'Crime'], language: ['Tamil', 'Telugu', 'Hindi'], rating: 7.8, votes: '1.1L', poster: 'images/Movies-3.png', certification: 'UA', cities: ['Chennai', 'Mumbai', 'Delhi', 'Bengaluru'] },
  { id: 4, title: 'Dunki', genre: ['Comedy', 'Drama'], language: ['Hindi'], rating: 7.1, votes: '72K', poster: 'images/Movies-4.png', certification: 'U', cities: ['Mumbai', 'Delhi', 'Pune', 'Kolkata'] },
  { id: 5, title: 'Animal', genre: ['Crime', 'Action', 'Drama'], language: ['Hindi', 'Telugu', 'Tamil'], rating: 8.0, votes: '1.5L', poster: 'images/Movies-5.png', certification: 'A', cities: ['Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Pune'] },
  { id: 6, title: 'Fighter', genre: ['Action', 'Thriller'], language: ['Hindi'], rating: 6.9, votes: '54K', poster: 'images/Movies-2.png', certification: 'UA', cities: ['Mumbai', 'Delhi', 'Bengaluru'] },
  { id: 7, title: 'Pushpa 2', genre: ['Action', 'Drama', 'Crime'], language: ['Telugu', 'Hindi', 'Tamil'], rating: 8.4, votes: '2.1L', poster: 'images/Movies-1.png', certification: 'A', cities: ['Hyderabad', 'Chennai', 'Bengaluru', 'Mumbai', 'Delhi'] },
  { id: 8, title: 'Merry Christmas', genre: ['Thriller', 'Romance'], language: ['Hindi', 'Tamil'], rating: 7.3, votes: '38K', poster: 'images/Movies-3.png', certification: 'UA', cities: ['Mumbai', 'Chennai', 'Pune'] },
  { id: 9, title: 'Guntur Kaaram', genre: ['Drama', 'Family'], language: ['Telugu'], rating: 6.5, votes: '29K', poster: 'images/Movies-4.png', certification: 'U', cities: ['Hyderabad', 'Chennai'] },
  { id: 10, title: 'Hanu-Man', genre: ['Action', 'Fantasy'], language: ['Telugu', 'Hindi'], rating: 8.1, votes: '95K', poster: 'images/Movies-5.png', certification: 'U', cities: ['Hyderabad', 'Bengaluru', 'Mumbai', 'Delhi'] },
  { id: 11, title: 'Captain Miller', genre: ['Action', 'Period'], language: ['Tamil', 'Telugu', 'Kannada'], rating: 7.0, votes: '41K', poster: 'images/Movies-1.png', certification: 'UA', cities: ['Chennai', 'Bengaluru'] },
  { id: 12, title: 'Article 370', genre: ['Thriller', 'Drama'], language: ['Hindi'], rating: 8.3, votes: '61K', poster: 'images/Movies-2.png', certification: 'UA', cities: ['Delhi', 'Mumbai', 'Pune', 'Kolkata'] }
];

export const ALL_GENRES = [...new Set(MOVIES.flatMap(m => m.genre))].sort();
export const ALL_LANGUAGES = [...new Set(MOVIES.flatMap(m => m.language))].sort();
export const ALL_MOVIE_CITIES = [...new Set(MOVIES.flatMap(m => m.cities))].sort();
