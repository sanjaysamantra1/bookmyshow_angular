export interface SportEvent {
  id: number;
  title: string;
  sport: string;
  teams?: string;
  venue: string;
  city: string;
  date: string;
  time: string;
  price: string;
  poster: string;
  tag?: string;
  league: string;
  description: string;
}

export const SPORT_EVENTS: SportEvent[] = [
  { id: 1, title: 'MI vs CSK', sport: 'Cricket', teams: 'Mumbai Indians vs Chennai Super Kings', venue: 'Wankhede Stadium', city: 'Mumbai', date: '25 Apr 2026', time: '7:30 PM', price: '₹800 onwards', poster: 'images/Events-5.png', tag: 'Selling Fast', league: 'IPL 2026', description: 'The biggest rivalry in IPL history. El Clasico of Indian cricket.' },
  { id: 2, title: 'RCB vs KKR', sport: 'Cricket', teams: 'Royal Challengers Bengaluru vs Kolkata Knight Riders', venue: 'M. Chinnaswamy Stadium', city: 'Bengaluru', date: '27 Apr 2026', time: '7:30 PM', price: '₹600 onwards', poster: 'images/Events-4.png', tag: 'Hot', league: 'IPL 2026', description: 'RCB host KKR in a blockbuster encounter at their fortress in Bengaluru.' },
  { id: 3, title: 'Pro Kabaddi Final', sport: 'Kabaddi', teams: 'Patna Pirates vs U Mumba', venue: 'Nehru Indoor Stadium', city: 'Chennai', date: '30 Apr 2026', time: '8:00 PM', price: '₹300 onwards', poster: 'images/Events-3.png', tag: 'Grand Final', league: 'PKL Season 11', description: 'The grand finale of Pro Kabaddi League Season 11. Witness the thrill live.' },
  { id: 4, title: 'Bengaluru FC vs Mumbai City', sport: 'Football', teams: 'Bengaluru FC vs Mumbai City FC', venue: 'Sree Kanteerava Stadium', city: 'Bengaluru', date: '2 May 2026', time: '7:00 PM', price: '₹200 onwards', poster: 'images/Events-2.png', league: 'ISL 2025-26', description: 'ISL playoff clash between two of the most decorated clubs in Indian football.' },
  { id: 5, title: 'Badminton Nationals', sport: 'Badminton', venue: 'Siri Fort Sports Complex', city: 'Delhi', date: '5 May 2026', time: '10:00 AM', price: '₹150 onwards', poster: 'images/Events-1.png', tag: 'New', league: 'National Championships', description: 'Watch India\'s top shuttlers battle it out for the national title.' },
  { id: 6, title: 'SRH vs PBKS', sport: 'Cricket', teams: 'Sunrisers Hyderabad vs Punjab Kings', venue: 'Rajiv Gandhi International Stadium', city: 'Hyderabad', date: '7 May 2026', time: '3:30 PM', price: '₹500 onwards', poster: 'images/Events-5.png', league: 'IPL 2026', description: 'Day game thriller as SRH take on Punjab Kings at their home fortress.' },
  { id: 7, title: 'F1 Fanzone: Monaco GP Watch Party', sport: 'Formula 1', venue: 'HICC, HITEX', city: 'Hyderabad', date: '25 May 2026', time: '5:00 PM', price: '₹999 onwards', poster: 'images/Events-3.png', tag: 'Experience', league: 'Formula 1', description: 'Watch the Monaco Grand Prix live on giant screens with F1 fans. Food, merch & more.' },
  { id: 8, title: 'Chennai Open Tennis', sport: 'Tennis', venue: 'SDAT Tennis Stadium', city: 'Chennai', date: '10 May 2026', time: '11:00 AM', price: '₹400 onwards', poster: 'images/Events-2.png', tag: 'New', league: 'ATP Challenger', description: 'ATP Challenger level tennis tournament featuring top Indian and international players.' },
  { id: 9, title: 'Wrestling Pro League', sport: 'Wrestling', venue: 'IG Indoor Stadium', city: 'Delhi', date: '12 May 2026', time: '6:00 PM', price: '₹250 onwards', poster: 'images/Events-4.png', league: 'PWL Season 8', description: 'India\'s top grapplers compete in the Pro Wrestling League at a packed Delhi arena.' },
  { id: 10, title: 'Mumbai Marathon', sport: 'Running', venue: 'CST to Marine Drive', city: 'Mumbai', date: '15 May 2026', time: '6:00 AM', price: '₹1,200 onwards', poster: 'images/Events-1.png', tag: 'Registrations Open', league: 'Tata Mumbai Marathon', description: 'Run the streets of Mumbai in Asia\'s largest marathon event. 5K, 10K & 42K categories.' },
];

export const ALL_SPORTS = [...new Set(SPORT_EVENTS.map(s => s.sport))].sort();
export const ALL_SPORT_CITIES = [...new Set(SPORT_EVENTS.map(s => s.city))].sort();
