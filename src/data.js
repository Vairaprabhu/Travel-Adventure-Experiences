export const destinations = [
  {
    slug: 'iceland',
    name: 'Iceland',
    region: 'The North Atlantic',
    eyebrow: 'Land of the long light',
    description: 'Follow the edge of the world through volcanic valleys, quiet fishing towns, and waterfalls that appear from nowhere.',
    image: 'photo-1470770841072-f978cf4d019e',
    imageAlt: 'A still mountain lake reflecting the peaks beyond',
    number: '01',
    season: 'June — September',
    mood: 'For the beautifully curious',
  },
  {
    slug: 'bali',
    name: 'Bali',
    region: 'Indonesia',
    eyebrow: 'A slower kind of island',
    description: 'Wake with the rice fields, take the long way to the coast, and let the island set the pace.',
    image: 'photo-1537996194471-e657df975ab4',
    imageAlt: 'A lush Balinese temple surrounded by tropical greenery',
    number: '02',
    season: 'April — October',
    mood: 'For the seekers of stillness',
  },
  {
    slug: 'patagonia',
    name: 'Patagonia',
    region: 'Argentina & Chile',
    eyebrow: 'Where the map runs out',
    description: 'A vast, wind-shaped wilderness of granite spires, blue glaciers, and trails with room to breathe.',
    image: 'photo-1464822759023-fed622ff2c3b',
    imageAlt: 'Wild mountain peaks in a dramatic open landscape',
    number: '03',
    season: 'November — March',
    mood: 'For the ones who go further',
  },
  {
    slug: 'japan',
    name: 'Japan',
    region: 'East Asia',
    eyebrow: 'A thousand small wonders',
    description: 'Move from mountain ryokans to city backstreets, finding a new rhythm in every place in between.',
    image: 'photo-1493976040374-85c8e12f0c0e',
    imageAlt: 'Traditional Japanese architecture framed by spring blossoms',
    number: '04',
    season: 'March — May',
    mood: 'For the collectors of moments',
  },
]

export const categories = [
  'All journeys',
  'Mountains',
  'Ocean escapes',
  'Hidden villages',
  'Wildlife',
  'Road trips',
  'Cultural journeys',
]

export const experiences = [
  { slug: 'patagonia-on-foot', name: 'The long way through Patagonia', place: 'Torres del Paine, Chile', category: 'Mountains', duration: '8 days', price: '$2,480', image: 'photo-1464822759023-fed622ff2c3b', alt: 'A mountain range rising above a wild landscape', note: 'Small-group trek' },
  { slug: 'salt-and-sea', name: 'Salt air & slow mornings', place: 'Nusa Penida, Indonesia', category: 'Ocean escapes', duration: '5 days', price: '$1,180', image: 'photo-1519046904884-53103b34b206', alt: 'A quiet tropical beach meeting clear blue water', note: 'Island stay' },
  { slug: 'the-village-road', name: 'The village road less travelled', place: 'Alentejo, Portugal', category: 'Hidden villages', duration: '6 days', price: '$1,640', image: 'photo-1516483638261-f4dbaf036963', alt: 'Colorful old buildings along a hillside village', note: 'Local-led journey' },
  { slug: 'wild-country', name: 'Into the wild country', place: 'Serengeti, Tanzania', category: 'Wildlife', duration: '7 days', price: '$3,150', image: 'photo-1516426122078-c23e76319801', alt: 'Elephants moving through an open savannah', note: 'Conservation-minded' },
  { slug: 'coastline-270', name: 'The coastline, mile by mile', place: 'West Coast, Iceland', category: 'Road trips', duration: '9 days', price: '$2,260', image: 'photo-1470770841072-f978cf4d019e', alt: 'A winding mountain road beside a lake', note: 'Self-drive' },
  { slug: 'tea-and-temples', name: 'Tea, temples & the mountain air', place: 'Kyoto to Koyasan, Japan', category: 'Cultural journeys', duration: '6 days', price: '$1,920', image: 'photo-1493976040374-85c8e12f0c0e', alt: 'A quiet street in a historic Japanese neighborhood', note: 'Cultural immersion' },
]

export const articles = [
  { slug: 'a-field-guide-to-going-slow', category: 'Field notes', date: '12.06.25', title: 'A field guide to going slow', excerpt: 'On leaving a little room in the itinerary for the things you could never have planned.', image: 'photo-1470770841072-f978cf4d019e', alt: 'A quiet alpine lake in the last light of day', read: '6 min read' },
  { slug: 'the-shape-of-the-wild', category: 'On the trail', date: '28.05.25', title: 'The shape of the wild', excerpt: 'A week walking beneath the granite giants of Patagonia, and what the wind teaches you.', image: 'photo-1464822759023-fed622ff2c3b', alt: 'Jagged mountain peaks rising through clouds', read: '8 min read' },
  { slug: 'rooms-with-a-view-of-nowhere', category: 'Stay a while', date: '09.05.25', title: 'Rooms with a view of nowhere', excerpt: 'Three small places to stay where the best thing on the agenda is no agenda at all.', image: 'photo-1510798831971-661eb04b3739', alt: 'A warmly lit cabin tucked into the forest', read: '4 min read' },
]

export const imageUrl = (id, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`
