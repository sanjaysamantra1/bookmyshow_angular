export interface Activity {
  id: number;
  title: string;
  category: string;
  city: string;
  venue: string;
  date: string;
  duration: string;
  price: string;
  ageGroup: string;
  poster: string;
  tag?: string;
  description: string;
  includes: string[];
}

export const ACTIVITIES: Activity[] = [
  { id: 1, title: 'Pottery Making Workshop', category: 'Workshop', city: 'Bengaluru', venue: 'The Clay Studio, Indiranagar', date: '20 Apr 2026', duration: '3 hours', price: '₹1,200', ageGroup: '10+', poster: 'images/Events-1.png', tag: 'Bestseller', description: 'Learn the ancient art of pottery from expert craftspeople. Take home your creation!', includes: ['All materials', 'Apron', 'Tea/Coffee', 'Take-home piece'] },
  { id: 2, title: 'Escape Room: The Haunted Mansion', category: 'Gaming', city: 'Mumbai', venue: 'Exit Game, Lower Parel', date: 'Daily', duration: '1 hour', price: '₹699 per person', ageGroup: '12+', poster: 'images/Events-2.png', tag: 'Trending', description: 'Can you escape the haunted mansion in 60 minutes? A 5-player puzzle adventure.', includes: ['Game master guide', 'Locker', 'Certificate on completion'] },
  { id: 3, title: 'Cooking Masterclass: Italian Cuisine', category: 'Cooking', city: 'Bengaluru', venue: 'The Culinary Studio, Koramangala', date: '22 Apr 2026', duration: '4 hours', price: '₹2,500', ageGroup: '16+', poster: 'images/Events-3.png', tag: 'New', description: 'Learn to cook authentic pasta, pizza and tiramisu from a trained Italian chef.', includes: ['All ingredients', 'Recipe booklet', '3-course meal', 'Wine pairing tips'] },
  { id: 4, title: 'Rock Climbing Experience', category: 'Adventure', city: 'Pune', venue: 'Della Adventure Park', date: 'Weekends', duration: '2 hours', price: '₹1,800', ageGroup: '14+', poster: 'images/Events-4.png', description: 'Experience indoor rock climbing with professional instructors. Beginners welcome.', includes: ['Safety harness', 'Climbing shoes', 'Instructor', 'Insurance'] },
  { id: 5, title: 'Standup Paddleboarding', category: 'Water Sports', city: 'Kochi', venue: 'Marine Drive Waterfront', date: 'Daily', duration: '1.5 hours', price: '₹999', ageGroup: '10+', poster: 'images/Events-5.png', tag: 'Summer Special', description: 'Glide over the serene backwaters of Kochi on a paddleboard. No experience needed.', includes: ['Board & paddle', 'Life jacket', 'Safety briefing', 'Instructor'] },
  { id: 6, title: 'Watercolor Painting Class', category: 'Art', city: 'Delhi', venue: 'Art N Soul Studio, Hauz Khas', date: '25 Apr 2026', duration: '3 hours', price: '₹900', ageGroup: 'All ages', poster: 'images/Events-1.png', tag: 'New', description: 'Express yourself through watercolors. Paint a scenic landscape guided by an artist.', includes: ['Canvas', 'Paints & brushes', 'Artwork to take home', 'Refreshments'] },
  { id: 7, title: 'Comedy Improv Workshop', category: 'Workshop', city: 'Mumbai', venue: 'The Cuckoo Club, Bandra', date: '26 Apr 2026', duration: '2.5 hours', price: '₹799', ageGroup: '18+', poster: 'images/Events-2.png', tag: 'Trending', description: 'Learn the rules of improv comedy. A fun session to build confidence and creativity.', includes: ['Warm-up games', 'Scene practice', 'Group performance'] },
  { id: 8, title: 'Street Photography Walk', category: 'Photography', city: 'Kolkata', venue: 'Meets at New Market', date: '27 Apr 2026', duration: '3 hours', price: '₹600', ageGroup: '16+', poster: 'images/Events-3.png', description: 'Walk through historic North Kolkata and capture the soul of the city. Bring your camera!', includes: ['Expert guide', 'Photography tips', 'Editing tutorial', 'Online photo gallery'] },
  { id: 9, title: 'Yoga Retreat: Sunrise Session', category: 'Wellness', city: 'Hyderabad', venue: 'Hussain Sagar Lakefront', date: 'Every Sunday', duration: '2 hours', price: '₹499', ageGroup: 'All ages', poster: 'images/Events-4.png', tag: 'Bestseller', description: 'Start your Sunday with a rejuvenating sunrise yoga session by the lake. All levels.', includes: ['Yoga mat', 'Towel', 'Healthy breakfast', 'Meditation session'] },
  { id: 10, title: 'Go-Karting Championship', category: 'Racing', city: 'Chennai', venue: 'Kart Zone, OMR', date: 'Daily', duration: '30 min', price: '₹799', ageGroup: '12+', poster: 'images/Events-5.png', tag: 'Exciting', description: 'Race against friends on a professional go-kart track with timing systems.', includes: ['Helmet', 'Racing suit', 'Timed lap', 'Photo with timing result'] },
  { id: 11, title: 'Baking Bootcamp: Breads & Cakes', category: 'Cooking', city: 'Pune', venue: 'La Patisserie, Koregaon Park', date: '1 May 2026', duration: '4 hours', price: '₹1,800', ageGroup: '14+', poster: 'images/Events-1.png', tag: 'New', description: 'Master the art of baking artisan breads and celebration cakes in one fun session.', includes: ['Ingredients', 'Take-home bakes', 'Recipe cards', 'Apron'] },
  { id: 12, title: 'Ziplining in Nandi Hills', category: 'Adventure', city: 'Bengaluru', venue: 'Nandi Hills Adventure Camp', date: 'Weekends', duration: '4 hours', price: '₹2,200', ageGroup: '12+', poster: 'images/Events-2.png', tag: 'Summer Special', description: 'Soar over the hills of Nandi on India\'s most scenic zipline. Thrills guaranteed!', includes: ['Safety gear', 'Instructor', 'Breakfast', 'Return transport from Bengaluru'] },
];

export const ALL_ACTIVITY_CATEGORIES = [...new Set(ACTIVITIES.map(a => a.category))].sort();
export const ALL_ACTIVITY_CITIES = [...new Set(ACTIVITIES.map(a => a.city))].sort();
