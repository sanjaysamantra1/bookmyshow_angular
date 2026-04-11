export interface Play {
  id: number;
  title: string;
  type: string;
  language: string[];
  city: string;
  venue: string;
  date: string;
  duration: string;
  price: string;
  poster: string;
  tag?: string;
  cast: string[];
  description: string;
}

export const PLAYS: Play[] = [
  { id: 1, title: 'Waiting for Godot', type: 'Theatre', language: ['English'], city: 'Mumbai', venue: 'NCPA, Nariman Point', date: '19 Apr 2026', duration: '2h 30m', price: '₹500 onwards', poster: 'images/Events-1.png', tag: 'Critically Acclaimed', cast: ['Naseeruddin Shah', 'Ratna Pathak'], description: "Samuel Beckett's absurdist masterpiece performed by India's finest theatre veterans." },
  { id: 2, title: 'Mughal-E-Azam: The Musical', type: 'Musical', language: ['Hindi', 'Urdu'], city: 'Delhi', venue: 'Jawaharlal Nehru Stadium', date: '20 Apr 2026', duration: '3h', price: '₹999 onwards', poster: 'images/Events-2.png', tag: 'Selling Fast', cast: ['Feroz Khan', 'Priyanka Barve'], description: 'The epic love story of Prince Salim and Anarkali brought to life on a grand stage.' },
  { id: 3, title: 'Andha Yug', type: 'Theatre', language: ['Hindi'], city: 'Bengaluru', venue: 'Ranga Shankara', date: '22 Apr 2026', duration: '2h', price: '₹300 onwards', poster: 'images/Events-3.png', cast: ['Pankaaj Kapur', 'Supriya Pathak'], description: 'A landmark anti-war play set in the final day of the Mahabharata war.' },
  { id: 4, title: 'Shree 420', type: 'Comedy', language: ['Hindi'], city: 'Mumbai', venue: 'Prithvi Theatre, Juhu', date: '24 Apr 2026', duration: '1h 45m', price: '₹250 onwards', poster: 'images/Events-4.png', tag: 'New', cast: ['Sanjay Mishra', 'Manoj Joshi'], description: 'A laugh-riot comedy about a small-town dreamer navigating the chaos of Mumbai.' },
  { id: 5, title: 'Broken Images', type: 'Solo', language: ['English'], city: 'Chennai', venue: 'The Museum Theatre', date: '26 Apr 2026', duration: '1h 15m', price: '₹400 onwards', poster: 'images/Events-5.png', tag: 'Award Winner', cast: ['Arundhati Nag'], description: "Girish Karnad's powerful one-woman show exploring identity and the digital self." },
  { id: 6, title: 'Bade Achhe Lagte Hain', type: 'Musical', language: ['Hindi'], city: 'Pune', venue: 'Bal Gandharva Rang Mandir', date: '28 Apr 2026', duration: '2h 15m', price: '₹350 onwards', poster: 'images/Events-1.png', cast: ['Pankaj Tripathi', 'Konkona Sen Sharma'], description: 'A musical celebration of love, marriage and middle-class Indian life.' },
  { id: 7, title: 'Shakuntala', type: 'Classical', language: ['Sanskrit', 'Hindi'], city: 'Delhi', venue: 'Kamani Auditorium', date: '30 Apr 2026', duration: '2h', price: '₹200 onwards', poster: 'images/Events-2.png', tag: 'Heritage', cast: ['Mallika Sarabhai'], description: "Kalidasa's timeless classic brought alive with traditional Bharatanatyam elements." },
  { id: 8, title: 'The Comedy Factory', type: 'Comedy', language: ['Hindi', 'English'], city: 'Hyderabad', venue: 'Shilpakala Vedika', date: '2 May 2026', duration: '2h', price: '₹499 onwards', poster: 'images/Events-3.png', tag: 'Trending', cast: ['Vir Das', 'Anu Menon'], description: 'A star-studded stand-up and sketch comedy extravaganza for the whole family.' },
  { id: 9, title: 'Tumhari Amrita', type: 'Drama', language: ['Hindi'], city: 'Kolkata', venue: 'Kala Mandir', date: '4 May 2026', duration: '1h 45m', price: '₹300 onwards', poster: 'images/Events-4.png', cast: ['Shabana Azmi', 'Farooq Sheikh'], description: 'A moving epistolary play of a love story told entirely through letters over 32 years.' },
  { id: 10, title: 'Gurrm Dharam', type: 'Theatre', language: ['Punjabi', 'Hindi'], city: 'Bengaluru', venue: 'Chowdiah Memorial Hall', date: '6 May 2026', duration: '2h 30m', price: '₹450 onwards', poster: 'images/Events-5.png', cast: ['Jimmy Shergill', 'Surveen Chawla'], description: 'An intense drama about honour, duty and love set in 1984 Punjab.' },
];

export const ALL_PLAY_TYPES = [...new Set(PLAYS.map(p => p.type))].sort();
export const ALL_PLAY_CITIES = [...new Set(PLAYS.map(p => p.city))].sort();
