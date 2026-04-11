export interface StreamTitle {
  id: number;
  title: string;
  type: 'Movie' | 'Series' | 'Short';
  genre: string[];
  language: string;
  rating: number;
  seasons?: number;
  duration?: string;
  poster: string;
  tag?: string;
  description: string;
}

export const STREAM_TITLES: StreamTitle[] = [
  { id: 1, title: 'The Family Man', type: 'Series', genre: ['Thriller', 'Action'], language: 'Hindi', rating: 8.7, seasons: 2, poster: 'images/Movies-1.png', tag: 'BMS Exclusive', description: 'A middle-class man who leads a secret life as an intelligence officer.' },
  { id: 2, title: 'Scam 1992', type: 'Series', genre: ['Drama', 'Crime'], language: 'Hindi', rating: 9.3, seasons: 1, poster: 'images/Movies-2.png', tag: 'Top Rated', description: 'The story of Harshad Mehta and his meteoric rise and fall in the 90s stock market.' },
  { id: 3, title: 'Mirzapur', type: 'Series', genre: ['Crime', 'Thriller'], language: 'Hindi', rating: 8.5, seasons: 3, poster: 'images/Movies-3.png', description: 'A gritty tale of crime, power and politics set in the gangland of Mirzapur.' },
  { id: 4, title: 'Panchayat', type: 'Series', genre: ['Comedy', 'Drama'], language: 'Hindi', rating: 8.9, seasons: 3, poster: 'images/Movies-4.png', tag: 'Fan Favourite', description: 'A city-bred engineering graduate takes up a government job in a remote village.' },
  { id: 5, title: 'Aspirants', type: 'Series', genre: ['Drama'], language: 'Hindi', rating: 9.1, seasons: 2, poster: 'images/Movies-5.png', tag: 'Must Watch', description: 'The story of UPSC aspirants and their struggle, sacrifices and camaraderie.' },
  { id: 6, title: 'Delhi Crime', type: 'Series', genre: ['Crime', 'Drama'], language: 'Hindi', rating: 8.5, seasons: 2, poster: 'images/Movies-2.png', tag: 'Award Winner', description: 'Based on the investigation of the 2012 Delhi gang rape case by the Delhi Police.' },
  { id: 7, title: 'Rocket Boys', type: 'Series', genre: ['Drama', 'Historical'], language: 'Hindi', rating: 8.6, seasons: 2, poster: 'images/Movies-1.png', description: 'The extraordinary lives of Homi J. Bhabha and Vikram Sarabhai, pioneers of Indian science.' },
  { id: 8, title: 'Kota Factory', type: 'Series', genre: ['Drama', 'Education'], language: 'Hindi', rating: 9.0, seasons: 3, poster: 'images/Movies-3.png', tag: 'Trending', description: 'Life of students preparing for IIT JEE in the coaching capital of India.' },
  { id: 9, title: '12th Fail', type: 'Movie', genre: ['Drama', 'Inspiration'], language: 'Hindi', rating: 9.2, duration: '2h 27m', poster: 'images/Movies-4.png', tag: 'New', description: 'The inspiring true story of IPS officer Manoj Sharma who cleared UPSC against all odds.' },
  { id: 10, title: 'Laapataa Ladies', type: 'Movie', genre: ['Comedy', 'Drama'], language: 'Hindi', rating: 7.9, duration: '2h 1m', poster: 'images/Movies-5.png', tag: 'New', description: 'Two newly-wed brides get exchanged on a train and what follows is a whimsical journey.' },
  { id: 11, title: 'Jubilee', type: 'Series', genre: ['Drama', 'Period'], language: 'Hindi', rating: 8.3, seasons: 1, poster: 'images/Movies-1.png', description: 'Set in the golden age of Bollywood, the show follows dreams, betrayal and cinema.' },
  { id: 12, title: 'Kohrra', type: 'Series', genre: ['Crime', 'Thriller'], language: 'Punjabi', rating: 8.4, seasons: 1, poster: 'images/Movies-2.png', tag: 'BMS Exclusive', description: 'A gripping murder mystery set in rural Punjab, uncovering secrets and lies.' },
];

export const STREAM_CATEGORIES = ['All', 'Series', 'Movie', 'BMS Exclusive', 'Top Rated', 'New'];
