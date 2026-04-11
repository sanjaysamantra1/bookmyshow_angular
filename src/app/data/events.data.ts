export interface Event {
  id: number;
  name: string;
  category: string[];
  language: string[];
  city: string;
  venue: string;
  date: string;
  price: string;
  banner: string;
  tag?: string; // e.g. "Selling Fast", "New"
}

export const EVENTS: Event[] = [
  { id: 1, name: 'Arijit Singh Live', category: ['Music', 'Concert'], language: ['Hindi', 'Bengali'], city: 'Mumbai', venue: 'MMRDA Grounds, BKC', date: '15 Apr 2026', price: '₹1,499 onwards', banner: 'images/Events-1.png', tag: 'Selling Fast' },
  { id: 2, name: 'Standup Comedy Night', category: ['Comedy'], language: ['Hindi', 'English'], city: 'Pune', venue: 'Blue Frog, Pune', date: '18 Apr 2026', price: '₹499 onwards', banner: 'images/Events-2.png', tag: 'New' },
  { id: 3, name: 'Sunburn Music Festival', category: ['Music', 'Festival'], language: ['English'], city: 'Bengaluru', venue: 'Palace Grounds', date: '20 Apr 2026', price: '₹2,000 onwards', banner: 'images/Events-3.png', tag: 'Selling Fast' },
  { id: 4, name: 'Hamlet - The Play', category: ['Theatre', 'Drama'], language: ['English'], city: 'Delhi', venue: 'Kamani Auditorium', date: '22 Apr 2026', price: '₹350 onwards', banner: 'images/Events-4.png' },
  { id: 5, name: 'IPL: MI vs CSK', category: ['Sports'], language: ['Hindi', 'English'], city: 'Mumbai', venue: 'Wankhede Stadium', date: '25 Apr 2026', price: '₹800 onwards', banner: 'images/Events-5.png', tag: 'Selling Fast' },
  { id: 6, name: 'Zakir Khan Live', category: ['Comedy'], language: ['Hindi'], city: 'Bengaluru', venue: 'Chowdiah Memorial Hall', date: '27 Apr 2026', price: '₹599 onwards', banner: 'images/Events-1.png' },
  { id: 7, name: 'Classical Dance Festival', category: ['Dance', 'Festival'], language: ['Tamil', 'Telugu'], city: 'Chennai', venue: 'Music Academy', date: '30 Apr 2026', price: '₹250 onwards', banner: 'images/Events-2.png', tag: 'New' },
  { id: 8, name: 'EDM Rave Night', category: ['Music', 'Nightlife'], language: ['English'], city: 'Hyderabad', venue: 'Hitex Exhibition Centre', date: '3 May 2026', price: '₹999 onwards', banner: 'images/Events-3.png' },
  { id: 9, name: 'Badminton Premier League', category: ['Sports'], language: ['Hindi', 'English'], city: 'Delhi', venue: 'Siri Fort Sports Complex', date: '5 May 2026', price: '₹300 onwards', banner: 'images/Events-4.png' },
  { id: 10, name: 'Kiran Rao Film Screening', category: ['Film', 'Festival'], language: ['Hindi'], city: 'Mumbai', venue: 'PVR Director\'s Cut', date: '8 May 2026', price: '₹200 onwards', banner: 'images/Events-5.png', tag: 'New' },
  { id: 11, name: 'AR Rahman Symphony', category: ['Music', 'Concert'], language: ['Tamil', 'Hindi', 'English'], city: 'Chennai', venue: 'YMCA Grounds', date: '10 May 2026', price: '₹1,999 onwards', banner: 'images/Events-1.png', tag: 'Selling Fast' },
  { id: 12, name: 'Open Mic Comedy Bash', category: ['Comedy'], language: ['English', 'Hindi'], city: 'Pune', venue: 'The Comedy Club', date: '12 May 2026', price: '₹299 onwards', banner: 'images/Events-2.png' }
];

export const ALL_EVENT_CATEGORIES = [...new Set(EVENTS.flatMap(e => e.category))].sort();
export const ALL_EVENT_LANGUAGES = [...new Set(EVENTS.flatMap(e => e.language))].sort();
export const ALL_EVENT_CITIES = [...new Set(EVENTS.map(e => e.city))].sort();
