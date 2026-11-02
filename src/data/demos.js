// Noderra demo / concept websites. These are NOT client projects.
// Previews load from public/demos/<id>.jpg (1280x800). Run `npm run capture-previews`
// to capture them from the live sites. If a file is missing, a labelled placeholder is shown.
const demos = [
  {
    id: 'digital-agency',
    name: 'Digital Agency',
    kind: 'Agency website concept',
    summary: 'Noderra studio site: brand, websites and digital experiences — "We make digital feel different."',
    tags: ['Landing page', 'Branding', 'Responsive'],
    url: 'https://digital-agency-neon-rho.vercel.app',
    tone: 'demo-blue',
    preview: '/demos/digital-agency.jpg',
  },
  {
    id: 'veloura',
    name: 'Veloura',
    kind: 'E-commerce concept store',
    summary: 'A minimal concept store for everyday objects — bags, apparel and home essentials. "Less, but better."',
    tags: ['E-commerce', 'Product grid', 'Responsive'],
    url: 'https://ecommerce-umber-six-88.vercel.app',
    tone: 'demo-gold',
    preview: '/demos/veloura.jpg',
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    kind: 'Property website concept',
    summary: 'A property-listing style website concept showing how a real estate business could present itself online.',
    tags: ['Listings', 'Lead capture', 'Responsive'],
    url: 'https://realestate-lac-ten.vercel.app',
    tone: 'demo-green',
    preview: '/demos/real-estate.jpg',
  },
  {
    id: 'restaurant',
    name: 'The Table',
    kind: 'Restaurant website concept',
    summary: 'A restaurant concept built around seasonal produce, live-fire cooking and shared meals. "Gather around something good."',
    tags: ['Menu', 'Reservations', 'Responsive'],
    url: 'https://restaurant-xi-ochre-89.vercel.app',
    tone: 'demo-red',
    preview: '/demos/restaurant.jpg',
  },
  {
    id: 'novacare',
    name: 'NovaCare',
    kind: 'Hospital / clinic concept',
    summary: 'A hospital and clinic website concept: services, doctors and appointment enquiries in a calm, trustworthy layout.',
    tags: ['Healthcare', 'Appointments', 'Responsive'],
    url: 'https://hospital-clinic-ebon.vercel.app',
    tone: 'demo-teal',
    preview: '/demos/novacare.jpg',
  },
  {
    id: 'coaching',
    name: 'The Learning Lab',
    kind: 'Coaching institute concept',
    summary: 'A coaching institute concept pairing learners with mentors, structured paths and visible progress.',
    tags: ['Education', 'Courses', 'Responsive'],
    url: 'https://coaching-institute-nine.vercel.app',
    tone: 'demo-purple',
    preview: '/demos/coaching.jpg',
  },
];

export default demos;
