export interface Experience {
  id: string;
  title: string;
  location: string;
  category: "India" | "International";

  vibe:
    | "Adventure"
    | "Growth"
    | "Luxury"
    | "Nature"
    | "Party"
    | "Heritage"
    | "Spiritual"
    | "Culture"
    | "Urban"
    | "Wildlife";

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
    id: "in-3",
    title: "Rishikesh Retreat",
    location: "Rishikesh, Uttarakhand",
    category: "India",
    vibe: "Adventure",
    duration: "3-4 Days",
    nights: 3,
    image:
      "https://images.openai.com/static-rsc-4/HAnKpCGuyUpaROw05X-SNya_wEHqb5FJ6lb4iDSn7PfyvRxJ5WPyKH6NyLsTbhEqRLClHYfFhorUkxOOil3tTeWsSMkxxHc77LyHSjrXIq4BfF9O6b9fXQtILkwytsq9PqWU9yrrwZ9LDLXtuqSIx-vT2Ez0_vaEIeW4mA6Wr38-1gPbIpEt1-ioBRtWaWaF?purpose=fullsize",
    pricePerHead: 25500,
    groupSize: 15,
    description:
      "Perfect for teams looking for high energy and spiritual depth. Convenient travel from Patna via Dehradun/Haridwar.",
    highlights: [
      "Grade III River Rafting",
      "Evening Ganga Aarti Ritual",
      "Bungee Jumping & Flying Fox",
      "Riverside Luxury Camping",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Evening Aarti",
        desc: "Arrive at Dehradun. Luxury transfer to Rishikesh. Attend the sacred Ganga Aarti.",
        meals: ["Welcome Tea", "Dinner"],
      },
      {
        day: 2,
        title: "Extreme Rafting",
        desc: "16km of thrilling rapids. Lunch at a hidden beach cafe.",
        meals: ["Breakfast", "Lunch", "Dinner"],
      },
      {
        day: 3,
        title: "Bungee & Bonfire",
        desc: "Indias highest bungee jumping. Evening fireside chat with innovators.",
        meals: ["Breakfast", "Lunch", "Dinner"],
      },
      {
        day: 4,
        title: "Trek to Hidden Falls",
        desc: "A scenic trek through the forest to Neer Garh waterfall.",
        meals: ["Breakfast", "Lunch", "Dinner"],
      },
      {
        day: 5,
        title: "Yoga & Organic Sprints",
        desc: "Sunrise yoga sessions followed by a strategy workshop.",
        meals: ["Breakfast", "Lunch", "Dinner"],
      },
      {
        day: 6,
        title: "Departure",
        desc: "Final morning meditation and transfer to the station/airport.",
        meals: ["Breakfast"],
      },
    ],
  },
  {
    id: "in-4",
    title: "Manali Mountains",
    location: "Manali, Himachal Pradesh",
    category: "India",
    vibe: "Luxury",
    duration: "3-4 Days",
    nights: 3,
    image:
      "https://images.openai.com/static-rsc-4/vV9nuW4oHBAYdSoqINgTld_LPZPAYIlhDqDF3jz2HR9WIwa9IckNG_paDLbrrMluk9yPar2ZdvuRXy33WY1QVPlFu6PJ0ccf3N0QhvMWGz9EZbdHoGN98aufvCBBeLPxo4QDRak4ivO7OsHiYzl9dLCgEM-8NiXdblxOCPwW_t1y0BkybRm98bMNkksXKUzS?purpose=inline",
    pricePerHead: 32000,
    groupSize: 8,

    description:
      "A premium mountain retreat in the heart of Himachal. Smooth travel routes from major cities to Manali via Chandigarh or Kullu.",

    highlights: [
      "Luxury Riverside Cottage Stay",
      "Solang Valley Adventure Experience",
      "Atal Tunnel & Sissu Excursion",
      "Bonfire & Himachali Cultural Night",
    ],

    itinerary: [
      {
        day: 1,
        title: "Riverside Arrival",
        desc: "Check into a premium riverside resort with scenic Himalayan views.",
        meals: ["Welcome Dinner"],
      },
      {
        day: 2,
        title: "Solang Valley Adventure",
        desc: "Enjoy paragliding, ATV rides, and snow activities (seasonal).",
        meals: ["Breakfast", "Lunch", "Dinner"],
      },
      {
        day: 3,
        title: "Atal Tunnel & Sissu Visit",
        desc: "Drive through the iconic Atal Tunnel and explore the stunning Sissu valley.",
        meals: ["Breakfast", "Lunch", "Dinner"],
      },
    ],
  },
  {
    id: "in-1",
    title: "Mystical Darjeeling",
    location: "West Bengal, India",
    category: "India",
    vibe: "Nature",
    duration: "4 Days",
    nights: 3,
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=2070",
    pricePerHead: 18500,
    groupSize: 12,
    description:
      "The closest hill station retreat from Patna. Scenic and serene tea trails.",
    highlights: [
      "UNESCO Heritage Toy Train",
      "UNESCO Heritage Toy Train",
      "Sunrise at Tiger Hill",
      "Organic Tea Garden Stay",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Tea Garden Tour",
        desc: "Arrive at NJP/Bagdogra. Scenic drive to Darjeeling.",
        meals: ["Dinner"],
      },
    ],
  },
  {
    id: "in-2",
    title: "Sikkim Serenity",
    location: "Sikkim, India",
    category: "India",
    vibe: "Growth",
    duration: "3-5 Days",
    nights: 4,
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=2070",
    pricePerHead: 22000,
    groupSize: 10,
    description: "Discover the cleanest city with Himalayan views.",
    highlights: [
      "Tsomgo Lake & Baba Mandir",
      "Nathula Pass Border Visit",
      "Monastery Meditation",
      "Night Market Walk",
    ],
    itinerary: [],
  },
  {
    id: "in-5",
    title: "Munnar Tea Trails",
    location: "Kerala, India",
    category: "India",
    vibe: "Nature",
    duration: "3-4 Days",
    nights: 3,
    image:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=2070",
    pricePerHead: 16500,
    groupSize: 10,
    description: "orange green tea estates and wildlife tours.",
    highlights: [
      "Eravikulam National Park",
      "Mattupetty Dam Boating",
      "Spice Plantation Tour",
    ],
    itinerary: [],
  },
  {
    id: "in-6",
    title: "Meghalaya Living Roots",
    location: "Meghalaya, India",
    category: "India",
    vibe: "Adventure",
    duration: "3-4 Days",
    nights: 3,
    image:
      "https://images.unsplash.com/photo-1502466650593-b65a2c690da0?auto=format&fit=crop&q=80&w=2070",
    pricePerHead: 28000,
    groupSize: 6,
    description: "Wettest place on earth with its magical bridges.",
    highlights: [
      "Double Decker Root Bridge",
      "Dawki Transparent River",
      "Mawlynnong Cleanest Village",
    ],
    itinerary: [],
  },
  {
    id: "in-7",
    title: "Goa Beach Escape",
    location: "Goa, India",
    category: "India",
    vibe: "Party",
    duration: "4 Days",
    nights: 3,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    pricePerHead: 20000,
    groupSize: 18,
    description: "Beaches, nightlife and water sports.",
    highlights: [
      "Baga & Calangute Beach",
      "Water Sports Adventure",
      "Night Club Experience",
      "Sunset Cruise",
    ],
    itinerary: [],
  },

  {
    id: "in-8",
    title: "Royal Udaipur",
    location: "Udaipur, Rajasthan",
    category: "India",
    vibe: "Luxury",
    duration: "4 Days",
    nights: 3,
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09c",
    pricePerHead: 18000,
    groupSize: 16,
    description: "City of lakes and royal palaces.",
    highlights: [
      "City Palace Visit",
      "Lake Pichola Boat Ride",
      "Bagore Ki Haveli Show",
    ],
    itinerary: [],
  },

  {
    id: "in-9",
    title: "Pink City Jaipur",
    location: "Jaipur, Rajasthan",
    category: "India",
    vibe: "Heritage",
    duration: "3 Days",
    nights: 3,
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    pricePerHead: 15000,
    groupSize: 20,
    description: "Historic forts and vibrant markets.",
    highlights: ["Amber Fort", "Hawa Mahal", "Local Bazaar Shopping"],
    itinerary: [],
  },

  {
    id: "in-10",
    title: "Rajgir Wellness Retreat",
    location: "Rajgir, Bihar",
    category: "India",
    vibe: "Spiritual",
    duration: "3 Days",
    nights: 3,
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
    pricePerHead: 8000,
    groupSize: 18,
    description: "Hot springs and spiritual vibes.",
    highlights: ["Vishwa Shanti Stupa", "Hot Water Springs", "Ropeway Ride"],
    itinerary: [],
  },

  {
    id: "in-11",
    title: "Mysore Heritage Tour",
    location: "Mysore, Karnataka",
    category: "India",
    vibe: "Culture",
    duration: "4 Days",
    nights: 3,
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
    pricePerHead: 17000,
    groupSize: 15,
    description: "Palaces and royal history.",
    highlights: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens"],
    itinerary: [],
  },

  {
    id: "in-12",
    title: "Hyderabad City Life",
    location: "Hyderabad, Telangana",
    category: "India",
    vibe: "Urban",
    duration: "4 Days",
    nights: 3,
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
    pricePerHead: 16000,
    groupSize: 17,
    description: "Modern city with rich history.",
    highlights: ["Charminar", "Ramoji Film City", "Hyderabadi Biryani"],
    itinerary: [],
  },

  {
    id: "in-13",
    title: "Bangalore Tech Escape",
    location: "Bangalore, Karnataka",
    category: "India",
    vibe: "Urban",
    duration: "3 Days",
    nights: 3,
    image: "https://images.unsplash.com/photo-1597047084897-51e81819a499",
    pricePerHead: 14000,
    groupSize: 16,
    description: "India’s Silicon Valley experience.",
    highlights: ["Cubbon Park", "Lalbagh Garden", "Cafe Culture"],
    itinerary: [],
  },

  {
    id: "in-14",
    title: "Valmiki Nagar Jungle Safari",
    location: "Valmikinagar, Bihar",
    category: "India",
    vibe: "Wildlife",
    duration: "3 Days",
    nights: 3,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    pricePerHead: 9000,
    groupSize: 15,
    description: "Wildlife and forest adventure.",
    highlights: ["Valmiki Tiger Reserve", "Jungle Safari", "Nature Walk"],
    itinerary: [],
  },

  {
    id: "in-15",
    title: "Manipur Cultural Tour",
    location: "Manipur, India",
    category: "India",
    vibe: "Culture",
    duration: "4 Days",
    nights: 3,
    image: "https://images.unsplash.com/photo-1524492449090-1d9c5d33a7d5",
    pricePerHead: 22000,
    groupSize: 18,
    description: "Explore northeast culture and beauty.",
    highlights: ["Loktak Lake", "Floating Islands", "Local Dance & Culture"],
    itinerary: [],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Product Lead",
    company: "Stripe",
    content:
      "Aetheris didn't just organize a trip; they architected a transformation. My team returned with a clarity we've never had before.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    id: "2",
    name: "Marcus Thorne",
    role: "Founder",
    company: "NeoSystems",
    content:
      "The level of detail is obsessive. From the networking workshops to the curated stays, everything screams premium.",
    avatar: "https://i.pravatar.cc/150?u=marcus",
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    role: "Creative Director",
    content:
      "Finally, a platform that understands that travel is the best medium for personal growth and deep networking.",
    avatar: "https://i.pravatar.cc/150?u=elena",
  },
  {
    id: "4",
    name: "Aruna Mehta",
    role: "Startup Founder",
    content:
      "This experience completely redefined how I approach both business and life. The connections I made here are invaluable.",
    avatar: "https://i.pravatar.cc/150?u=arjun",
  },
];

export const STATS: Stats[] = [
  { label: "Active Travelers", value: "10", suffix: "K+" },
  { label: "Corporate Teams", value: "500", suffix: "+" },
  { label: "Global Destinations", value: "50", suffix: "+" },
  { label: "NPS Score", value: "98", suffix: "%" },
];

export const LOGOS = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "Tesla",
  "Airbnb",
];

export const social = [
  { name: "Facebook", url: "https://www.facebook.com/collabuilder/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/collabuilder/" },
  { name: "Instagram", url: "https://www.instagram.com/collabuilder" },
];
