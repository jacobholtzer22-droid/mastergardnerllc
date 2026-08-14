export type GalleryCategory =
  | 'all'
  | 'lawn'
  | 'landscaping'
  | 'commercial'
  | 'fall'
  | 'winter';

export type GalleryItem = {
  src: string;
  label: string;
  alt: string;
  tags: Exclude<GalleryCategory, 'all'>[];
  /** feature tiles take a 2x2 block on large screens */
  feature?: boolean;
  /** wide tiles take a 2x1 block */
  wide?: boolean;
};

export const GALLERY_FILTERS: { key: GalleryCategory; label: string }[] = [
  { key: 'all', label: 'All work' },
  { key: 'lawn', label: 'Lawn care' },
  { key: 'landscaping', label: 'Landscaping' },
  { key: 'commercial', label: 'Commercial' },
  { key: 'fall', label: 'Fall cleanups' },
  { key: 'winter', label: 'Snow & ice' },
];

// Feature (2x2) tiles are reserved for the highest-resolution sources so they
// stay sharp when blown up; everything else rides in single tiles.
export const GALLERY: GalleryItem[] = [
  { src: '/images/truck-on-site.png', label: 'Commercial mowing & striping', alt: 'Master Gardner truck and trailer on a commercial property with striped lawn', tags: ['commercial', 'lawn'], feature: true },
  { src: '/images/estate-lawn-curve.jpg', label: 'Full-property lawn care', alt: 'Sweeping striped lawn wrapping around a large home and drive', tags: ['lawn'] },
  { src: '/images/garden-bed-flowers.jpg', label: 'Planting & bed design', alt: 'Red hot poker perennials blooming in a freshly mulched garden bed', tags: ['landscaping'] },
  { src: '/images/crosshatch-stripes.jpg', label: 'Crosshatch striping', alt: 'Lawn mowed in a crosshatch pattern with long afternoon shadows', tags: ['lawn'] },
  { src: '/images/irrigation-sprinkler.jpg', label: 'Irrigation systems', alt: 'Sprinkler head watering a striped lawn beside a planted bed', tags: ['landscaping'] },
  { src: '/images/commercial-property.png', label: 'Commercial property maintenance', alt: 'Manicured lawn and beds lining a sidewalk at a commercial property', tags: ['commercial'] },
  { src: '/images/commercial-lawn-stripes.png', label: 'Clean mowing stripes', alt: 'Lawn with crisp mowing stripes along a fence line', tags: ['commercial', 'lawn'], feature: true },
  { src: '/images/shade-tree-lawn.jpg', label: 'Mowing around mature trees', alt: 'Open lawn mowed around a large shade tree with a white farmhouse behind', tags: ['lawn'] },
  { src: '/images/sunset-commercial.jpg', label: 'Sunset on a finished property', alt: 'Commercial lawn and walkway at sunset with an orange sky', tags: ['commercial'] },
  { src: '/images/spring-lawn-stripes.jpg', label: 'Spring stripe patterns', alt: 'Wide green lawn with fresh spring mowing stripes running toward a tree line', tags: ['lawn'] },
  { src: '/images/modern-home-lawn.jpg', label: 'Estate lawn care', alt: 'Modern home set behind a wide, freshly striped lawn', tags: ['lawn'], wide: true },
  { src: '/images/curved-drive-edge.jpg', label: 'Clean drive edging', alt: 'Lawn edge curving cleanly along a paved driveway framed by autumn woods', tags: ['landscaping', 'lawn'] },
  { src: '/images/commercial-streetside.jpg', label: 'Streetside curb appeal', alt: 'Freshly mowed and edged lawn along a commercial storefront and sidewalk', tags: ['commercial'] },
  { src: '/images/crew-truck-trailer.jpg', label: 'On the job', alt: 'Master Gardner truck and equipment trailer staged on a property during a project', tags: ['lawn'] },
  { src: '/images/mower-view-stripes.jpg', label: 'Striping in progress', alt: 'View from the mower seat of fresh stripes running up toward a tree line', tags: ['lawn'] },
  { src: '/images/deer-lawn.png', label: 'Healthy, lush turf', alt: 'A deer resting on a healthy green lawn beside evergreens', tags: ['lawn'] },
  { src: '/images/commercial-median.jpg', label: 'Islands & medians', alt: 'Striped grass median in a commercial parking lot', tags: ['commercial'] },
  { src: '/images/summer-lawn-clouds.jpg', label: 'Midsummer mowing', alt: 'Broad striped lawn under a blue sky with summer clouds', tags: ['lawn'] },
  { src: '/images/fall-hillside-lawn.jpg', label: 'Fall cleanups', alt: 'Freshly cut hillside lawn framed by autumn color', tags: ['fall'], wide: true },
  { src: '/images/backyard-lawn-stripes.png', label: 'Residential lawn care', alt: 'Striped backyard lawn shaded by mature trees', tags: ['lawn'] },
  { src: '/images/commercial-sidewalk.jpg', label: 'Commercial frontage', alt: 'Striped lawn running along the sidewalk of a commercial building', tags: ['commercial'] },
  { src: '/images/fall-lawn-house.jpg', label: 'Fall lawn care', alt: 'Striped lawn beside a home with autumn trees under a deep blue sky', tags: ['fall', 'lawn'] },
  { src: '/images/fall-lawn-woods.jpg', label: 'Lawn restoration', alt: 'Restored lawn cut clean along a wooded tree line in early fall', tags: ['fall'] },
  { src: '/images/autumn-stripes.jpg', label: 'Autumn stripe work', alt: 'Long mowing stripes running through a lawn framed by autumn trees', tags: ['fall', 'lawn'] },
  { src: '/images/fall-leaves-lawn.jpg', label: 'Leaf season mowing', alt: 'Mown lawn seen through overhanging branches during leaf season', tags: ['fall'] },
  { src: '/images/dusk-lawn-dog.jpg', label: 'Evening finish', alt: 'Striped lawn at dusk with a dog walking across it', tags: ['lawn'] },
  { src: '/images/tree-lawn-stripes.png', label: 'Detailed trimming & edging', alt: 'Mowing stripes carefully cut around a tree', tags: ['landscaping', 'lawn'] },
  { src: '/images/fall-maple-leaves.jpg', label: 'Seasonal color', alt: 'Close-up of bright red maple leaves in fall', tags: ['fall'] },
  { src: '/images/plow-truck.jpg', label: 'Plow-ready trucks', alt: 'Master Gardner truck fitted with a Western MVP3 plow, ready for the season', tags: ['winter'] },
  { src: '/images/snow-plowed-driveway.jpg', label: 'Snow plowing', alt: 'Residential driveway plowed clean at night with snow banked on both sides', tags: ['winter'] },
  { src: '/images/bulk-salt.jpg', label: 'Bulk salt & ice melt', alt: 'Storage container stocked with bulk salt and ice-melt ahead of a storm', tags: ['winter'] },
  { src: '/images/hillside-stripes.jpg', label: 'Sloped-lawn mowing', alt: 'Striped lawn running down a slope toward mature trees', tags: ['lawn'] },
];
