import { Leaf, Scissors, Snowflake, Shovel, Droplets, Hammer, Sprout, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  icon: LucideIcon;
  features: string[];
  /** Every service must ship with a real photo — no placeholder panels. */
  image: string;
  imageAlt: string;
};

export const SERVICES: Service[] = [
  {
    slug: 'lawn-care',
    title: 'Lawn Care',
    short: 'Weekly mowing, edging, weed control, and fertilization that keeps your yard sharp all season.',
    long: 'Consistent, professional weekly lawn care for residential and commercial properties. We mow at the right height for Michigan grasses, edge clean borders, control weeds, and build a fertilization schedule that strengthens turf year over year.',
    icon: Scissors,
    image: '/images/backyard-lawn-stripes.png',
    imageAlt: 'Residential backyard lawn with crisp, professional mowing stripes',
    features: [
      'Weekly mowing & trimming',
      'Edging along walks and beds',
      'Weed control programs',
      'Seasonal fertilization',
      'Spring & fall cleanups',
    ],
  },
  {
    slug: 'landscaping',
    title: 'Landscaping',
    short: 'Custom garden design, mulching, planting, and hardscape work tailored to your property.',
    long: 'From new garden beds to full property redesigns, we build landscapes that look great today and grow beautifully over time. Mulch, plantings, edging, stone work — we handle the design, the install, and the long-term care.',
    icon: Leaf,
    image: '/images/garden-bed-flowers.jpg',
    imageAlt: 'Red hot poker perennials blooming in a freshly mulched garden bed',
    features: [
      'Garden design & installation',
      'Mulching & bed refreshes',
      'Trees, shrubs, perennials',
      'Hardscaping & stonework',
      'Property renovations',
    ],
  },
  {
    slug: 'irrigation',
    title: 'Irrigation',
    short: 'Sprinkler system installation, tuning, and seasonal start-up / blow-out.',
    long: 'A healthy lawn needs the right amount of water at the right time. We install efficient irrigation systems, tune zones for full coverage, and handle spring start-ups and fall winterization so your system lasts.',
    icon: Droplets,
    image: '/images/irrigation-sprinkler.jpg',
    imageAlt: 'Irrigation sprinkler head watering a striped lawn beside a planted bed',
    features: [
      'New system installation',
      'Zone tuning & repairs',
      'Spring start-up',
      'Fall winterization / blow-out',
      'Smart controllers',
    ],
  },
  {
    slug: 'construction',
    title: 'Landscape Construction',
    short: 'Patios, walkways, retaining walls, and full outdoor renovations.',
    long: 'Bigger projects, done right. We design and build paver patios, walkways, retaining walls, and outdoor living spaces — coordinating every step from grading to the final stone so the result lasts decades.',
    icon: Hammer,
    image: '/images/crew-truck-trailer.jpg',
    imageAlt: 'Master Gardner truck and equipment trailer staged on a property during a project',
    features: [
      'Paver patios & walkways',
      'Retaining walls',
      'Grading & drainage',
      'Outdoor living spaces',
      'Full property renovations',
    ],
  },
  {
    slug: 'restoration',
    title: 'Lawn Restoration',
    short: 'Aeration, overseeding, dethatching, and soil work to bring tired lawns back to life.',
    long: 'When a lawn needs more than a mow, we restore it. Core aeration, overseeding with the right blend for your conditions, dethatching, and targeted soil amendments — built into a multi-season plan when needed.',
    icon: Sprout,
    image: '/images/fall-lawn-woods.jpg',
    imageAlt: 'Restored lawn cut clean along a wooded tree line in early fall',
    features: [
      'Core aeration',
      'Overseeding',
      'Dethatching',
      'Soil amendments',
      'Lawn renovation plans',
    ],
  },
  {
    slug: 'snow',
    title: 'Snow Plowing',
    short: 'Residential driveways and commercial lots, plowed reliably all winter.',
    long: 'When the snow falls, we show up. Reliable plowing for driveways, private roads, and commercial parking lots across our service area — with clear pricing and dependable communication you can plan around.',
    icon: Snowflake,
    image: '/images/plow-truck.jpg',
    imageAlt: 'Master Gardner truck fitted with a Western MVP3 plow, ready for the season',
    features: [
      'Residential driveways',
      'Commercial parking lots',
      'Sidewalk clearing',
      'Seasonal contracts',
      'On-call storm response',
    ],
  },
  {
    slug: 'salting',
    title: 'Salting & Ice Management',
    short: 'Ice control for driveways, sidewalks, and parking lots — keeping properties safe.',
    long: 'Safe surfaces, all winter. We apply salt and ice-melt products on driveways, walks, and commercial lots — sized to the property and timed to the storm so slips and liability claims stay off your plate.',
    icon: Shovel,
    image: '/images/bulk-salt.jpg',
    imageAlt: 'Storage container stocked with bulk salt and ice-melt ahead of a storm',
    features: [
      'Driveway & walk salting',
      'Commercial ice management',
      'Pre-treatment',
      'Storm-by-storm or contract',
    ],
  },
  {
    slug: 'maintenance',
    title: 'Lawn Maintenance',
    short: 'Ongoing seasonal upkeep so your property looks its best every week.',
    long: 'A simple, all-in-one schedule that keeps your property dialed in: mowing, fertilization, bed maintenance, seasonal cleanups, and a single point of contact who knows your yard.',
    icon: Wrench,
    image: '/images/commercial-property.png',
    imageAlt: 'Well-maintained commercial property with manicured lawn and beds along a sidewalk',
    features: [
      'Mowing & trimming',
      'Bed maintenance',
      'Fertilization rounds',
      'Spring & fall cleanups',
      'Single point of contact',
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: 'Ethan K.',
    quote: 'Best service for best price bar none! These guys took over the mowing at our condo association and the property has never looked better.',
  },
  {
    name: 'Marge E.',
    quote: 'He is a professional and his work is outstanding. Quick to respond and easy to work with — exactly what I was hoping for.',
  },
  {
    name: 'Steph',
    quote: 'Neighborhood looks wonderful! The staff is professional and they actually care about the result, not just rushing through.',
  },
  {
    name: 'Daniel R.',
    quote: 'Reliable, honest, and great communication. Our property looks dialed in every single week — couldn’t ask for more.',
  },
  {
    name: 'Karen P.',
    quote: 'We had them do a full landscape refresh and the difference is night and day. Highly recommend Master Gardner to anyone in the area.',
  },
  {
    name: 'Mike H.',
    quote: 'Plowed our driveway through one of the worst winters we’ve had. Always on time, always thorough. A real pro operation.',
  },
];

export const SERVICE_AREAS = [
  'Ada', 'Grand Rapids', 'Wyoming', 'Walker', 'Kentwood', 'Sparta',
  'Cedar Springs', 'Kent City', 'Sand Lake', 'Forest Hills', 'Rockford',
  'Alton', 'Alto', 'Cutlerville', 'Caledonia', 'Freeport', 'Jamestown',
  'Holland', 'Borculo', 'Grand Haven', 'Muskegon',
];

export const VALUE_PROPS = [
  {
    title: 'Locally Owned',
    body: 'Based in Ada, Michigan. Family-run, community-minded, and accountable on every job — no middleman, no callcenter.',
  },
  {
    title: 'All-Season Service',
    body: 'Lawn care and landscaping in the warm months, plowing and salting in the cold. One trusted crew, all year round.',
  },
  {
    title: 'Custom Solutions',
    body: 'Every property is different. We listen first, then build a plan that fits your space, your budget, and your goals.',
  },
  {
    title: 'BBB Accredited',
    body: 'A reputation we’ve worked years to earn — and the customer reviews to back it up.',
  },
];
