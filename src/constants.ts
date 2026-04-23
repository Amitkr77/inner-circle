export interface Experience {
  id: string;
  title: string;
  location: string;
  category: 'India' | 'International';
  vibe: 'Adventure' | 'Growth' | 'Luxury' | 'Nature';
  duration: string;
  nights: number;
  image: string;
  pricePerHead: number;
  groupSize: number;
  description: string;
  highlights: string[];
  itinerary: { day: number; title: string; desc: string; meals: string[] }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar: string;
}

export interface Stats {
  label: string;
  value: string;
  suffix: string;
}

export const EXPERIENCES: Experience[] = [
  // INDIA
  {
    id: 'in-3',
    title: 'Rishikesh Retreat',
    location: 'Rishikesh, Uttarakhand',
    category: 'India',
    vibe: 'Adventure',
    duration: '6 Days',
    nights: 5,
    image: 'https://images.openai.com/static-rsc-4/HAnKpCGuyUpaROw05X-SNya_wEHqb5FJ6lb4iDSn7PfyvRxJ5WPyKH6NyLsTbhEqRLClHYfFhorUkxOOil3tTeWsSMkxxHc77LyHSjrXIq4BfF9O6b9fXQtILkwytsq9PqWU9yrrwZ9LDLXtuqSIx-vT2Ez0_vaEIeW4mA6Wr38-1gPbIpEt1-ioBRtWaWaF?purpose=fullsize',
    pricePerHead: 25500,
    groupSize: 15,
    description: 'Perfect for teams looking for high energy and spiritual depth. Convenient travel from Patna via Dehradun/Haridwar.',
    highlights: ['Grade III River Rafting', 'Evening Ganga Aarti Ritual', 'Bungee Jumping & Flying Fox', 'Riverside Luxury Camping'],
    itinerary: [
      { day: 1, title: 'Arrival & Evening Aarti', desc: 'Arrive at Dehradun. Luxury transfer to Rishikesh. Attend the sacred Ganga Aarti.', meals: ['Welcome Tea', 'Dinner'] },
      { day: 2, title: 'Extreme Rafting', desc: '16km of thrilling rapids. Lunch at a hidden beach cafe.', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 3, title: 'Bungee & Bonfire', desc: 'Indias highest bungee jumping. Evening fireside chat with innovators.', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 4, title: 'Trek to Hidden Falls', desc: 'A scenic trek through the forest to Neer Garh waterfall.', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 5, title: 'Yoga & Organic Sprints', desc: 'Sunrise yoga sessions followed by a strategy workshop.', meals: ['Breakfast', 'Lunch', 'Dinner'] },
      { day: 6, title: 'Departure', desc: 'Final morning meditation and transfer to the station/airport.', meals: ['Breakfast'] }
    ]
  },
  {
  id: 'in-4',
  title: 'Manali Mountains',
  location: 'Manali, Himachal Pradesh',
  category: 'India',
  vibe: 'Luxury',
  duration: '7 Days',
  nights: 6,
  image: "https://images.openai.com/static-rsc-4/vV9nuW4oHBAYdSoqINgTld_LPZPAYIlhDqDF3jz2HR9WIwa9IckNG_paDLbrrMluk9yPar2ZdvuRXy33WY1QVPlFu6PJ0ccf3N0QhvMWGz9EZbdHoGN98aufvCBBeLPxo4QDRak4ivO7OsHiYzl9dLCgEM-8NiXdblxOCPwW_t1y0BkybRm98bMNkksXKUzS?purpose=inline",
  pricePerHead: 32000,
  groupSize: 8,

  description: 'A premium mountain retreat in the heart of Himachal. Smooth travel routes from major cities to Manali via Chandigarh or Kullu.',

  highlights: [
    'Luxury Riverside Cottage Stay',
    'Solang Valley Adventure Experience',
    'Atal Tunnel & Sissu Excursion',
    'Bonfire & Himachali Cultural Night'
  ],

  itinerary: [
    {
      day: 1,
      title: 'Riverside Arrival',
      desc: 'Check into a premium riverside resort with scenic Himalayan views.',
      meals: ['Welcome Dinner']
    },
    {
      day: 2,
      title: 'Solang Valley Adventure',
      desc: 'Enjoy paragliding, ATV rides, and snow activities (seasonal).',
      meals: ['Breakfast', 'Lunch', 'Dinner']
    },
    {
      day: 3,
      title: 'Atal Tunnel & Sissu Visit',
      desc: 'Drive through the iconic Atal Tunnel and explore the stunning Sissu valley.',
      meals: ['Breakfast', 'Lunch', 'Dinner']
    }
  ]
},
  {
    id: 'in-1',
    title: 'Mystical Darjeeling Heights',
    location: 'West Bengal, India',
    category: 'India',
    vibe: 'Nature',
    duration: '4 Days',
    nights: 3,
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=2070',
    pricePerHead: 18500,
    groupSize: 12,
    description: 'The closest hill station retreat from Patna. Scenic and serene tea trails.',
    highlights: ['UNESCO Heritage Toy Train', 'UNESCO Heritage Toy Train', 'Sunrise at Tiger Hill', 'Organic Tea Garden Stay'],
    itinerary: [
      { day: 1, title: 'Arrival & Tea Garden Tour', desc: 'Arrive at NJP/Bagdogra. Scenic drive to Darjeeling.', meals: ['Dinner'] }
    ]
  },
  {
    id: 'in-2',
    title: 'Sikkim Serenity (Gangtok)',
    location: 'Sikkim, India',
    category: 'India',
    vibe: 'Growth',
    duration: '5 Days',
    nights: 4,
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=2070',
    pricePerHead: 22000,
    groupSize: 10,
    description: 'Discover the cleanest city with Himalayan views.',
    highlights: ['Tsomgo Lake & Baba Mandir', 'Nathula Pass Border Visit', 'Monastery Meditation', 'Night Market Walk'],
    itinerary: []
  },
  {
    id: 'in-5',
    title: 'Munnar Tea Trails',
    location: 'Kerala, India',
    category: 'India',
    vibe: 'Nature',
    duration: '4 Days',
    nights: 3,
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=2070',
    pricePerHead: 16500,
    groupSize: 10,
    description: 'Emerald green tea estates and wildlife tours.',
    highlights: ['Eravikulam National Park', 'Mattupetty Dam Boating', 'Spice Plantation Tour'],
    itinerary: []
  },
  {
    id: 'in-6',
    title: 'Meghalaya Living Roots',
    location: 'Meghalaya, India',
    category: 'India',
    vibe: 'Adventure',
    duration: '6 Days',
    nights: 5,
    image: 'https://images.unsplash.com/photo-1502466650593-b65a2c690da0?auto=format&fit=crop&q=80&w=2070',
    pricePerHead: 28000,
    groupSize: 6,
    description: 'Wettest place on earth with its magical bridges.',
    highlights: ['Double Decker Root Bridge', 'Dawki Transparent River', 'Mawlynnong Cleanest Village'],
    itinerary: []
  },
  // INTERNATIONAL
  {
    id: 'int-1',
    title: 'Swiss Alps Mastery',
    location: 'Switzerland',
    category: 'International',
    vibe: 'Luxury',
    duration: '5 Days',
    nights: 4,
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=2070',
    pricePerHead: 145000,
    groupSize: 6,
    description: 'Elite networking among the peaks of Europe.',
    highlights: ['Gstaad Skiing Retreat', 'Zermatt Private Helitour', 'Luxury Chocolate Workshop', 'Strategic Alpine Sprints'],
    itinerary: []
  },
  {
    id: 'int-2',
    title: 'Bali Innovation Nomad',
    location: 'Indonesia',
    category: 'International',
    vibe: 'Growth',
    duration: '10 Days',
    nights: 9,
    image: 'https://images.unsplash.com/photo-1559628233-eb1b1a45564b?auto=format&fit=crop&q=80&w=2070',
    pricePerHead: 85000,
    groupSize: 12,
    description: 'Co-work and rejuvenate in Bali’s lush rice fields.',
    highlights: ['Ubud Yoga & Meditation', 'Digital Nomad Beach Sprints', 'Balinese Cooking School', 'Tanah Lot Sunset Tour'],
    itinerary: []
  },
  {
    id: 'int-3',
    title: 'Nordic Leadership Lab',
    location: 'Norway',
    category: 'International',
    vibe: 'Nature',
    duration: '6 Days',
    nights: 5,
    image: 'https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?auto=format&fit=crop&q=80&w=2070',
    pricePerHead: 120000,
    groupSize: 8,
    description: 'Lead under the magic of the Aurora Borealis.',
    highlights: ['Aurora Hunting Cruise', 'Ice Hotel Overnight', 'Dog Sledding Strategy Hike', 'Oslo Cultural Tour'],
    itinerary: []
  },
  {
    id: 'int-4',
    title: 'Kiwi Adventure Voyage',
    location: 'New Zealand',
    category: 'International',
    vibe: 'Adventure',
    duration: '12 Days',
    nights: 11,
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2070',
    pricePerHead: 195000,
    groupSize: 6,
    description: 'The ultimate adventure for high-performance individuals.',
    highlights: ['Queenstown Skydiving', 'Milford Sound Cruise', 'Waitomo Caves Glowworms', 'Hobbiton Movie Set'],
    itinerary: []
  },
  {
    id: 'int-5',
    title: 'Costa Rica Cloud Forest',
    location: 'Costa Rica',
    category: 'International',
    vibe: 'Nature',
    duration: '8 Days',
    nights: 7,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2070',
    pricePerHead: 110000,
    groupSize: 10,
    description: 'Eco-conscious leadership in deep tropical jungles.',
    highlights: ['Zipline Cloud Canopy', 'Volcanic Thermal Springs', 'Sloth & Toucan Sanctuary', 'Coffee Estate Workshop'],
    itinerary: []
  },
  {
    id: 'int-6',
    title: 'Kyoto Zen Retreat',
    location: 'Japan',
    category: 'International',
    vibe: 'Growth',
    duration: '7 Days',
    nights: 6,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=2070',
    pricePerHead: 135000,
    groupSize: 8,
    description: 'Tradition meets tomorrow in the heart of Japan.',
    highlights: ['Zen Meditation with Monks', 'Grand Tea Ceremony', 'Bamboo Grove Forest Bathing', 'Technological Kyoto Tour'],
    itinerary: []
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Product Lead',
    company: 'Stripe',
    content: "Aetheris didn't just organize a trip; they architected a transformation. My team returned with a clarity we've never had before.",
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Founder',
    company: 'NeoSystems',
    content: 'The level of detail is obsessive. From the networking workshops to the curated stays, everything screams premium.',
    avatar: 'https://i.pravatar.cc/150?u=marcus',
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Creative Director',
    content: 'Finally, a platform that understands that travel is the best medium for personal growth and deep networking.',
    avatar: 'https://i.pravatar.cc/150?u=elena',
  },
];

export const STATS: Stats[] = [
  { label: 'Active Travelers', value: '10', suffix: 'K+' },
  { label: 'Corporate Teams', value: '500', suffix: '+' },
  { label: 'Global Destinations', value: '50', suffix: '+' },
  { label: 'NPS Score', value: '98', suffix: '%' },
];

export const LOGOS = [
  'Google', 'Microsoft', 'Amazon', 'Netflix', 'Tesla', 'Airbnb'
];
