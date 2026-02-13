import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Broccoli Microgreens',
    slug: 'broccoli',
    description: 'Mild, crunchy, and packed with sulforaphane. A true superfood.',
    price: 100,
    weight: '50g',
    image: '/images/broccoli.jpg',
    nutritionalBenefits: [
      'High in Vitamin C',
      'Rich in Sulforaphane',
      'Antioxidant Rich'
    ],
    availability: 'In Stock',
    growingTime: '7–10 days',
    details: {
      healthBenefits:
        'Supports immunity, heart health, and reduces inflammation.',
      shelfLife: '10–12 days when refrigerated',
      usage: 'Smoothies, salads, avocado toast, and garnishing.'
    }
  },
  {
    id: '2',
    name: 'Radish Microgreens',
    slug: 'radish',
    description: 'Spicy, crunchy greens that add a bold kick to meals.',
    price: 90,
    weight: '50g',
    image: '/images/radish.jpg',
    nutritionalBenefits: [
      'Vitamin E',
      'B Complex',
      'Zinc'
    ],
    availability: 'In Stock',
    growingTime: '6–8 days',
    details: {
      healthBenefits:
        'Improves digestion and boosts metabolism.',
      shelfLife: '7–9 days when refrigerated',
      usage: 'Salads, wraps, tacos, and garnishes.'
    }
  },
  {
    id: '3',
    name: 'Pea Shoots',
    slug: 'pea-shoots',
    description: 'Sweet, tender, and protein-rich microgreens.',
    price: 120,
    weight: '50g',
    image: '/images/pea.jpg',
    nutritionalBenefits: [
      'High Protein',
      'Fiber Rich',
      'Vitamin A'
    ],
    availability: 'Coming Soon',
    growingTime: '10–14 days',
    details: {
      healthBenefits:
        'Supports muscle growth and balanced blood sugar.',
      shelfLife: '12–14 days when refrigerated',
      usage: 'Stir-fries, sandwiches, salads.'
    }
  },
  {
    id: '4',
    name: 'Sunflower Microgreens',
    slug: 'sunflower',
    description: 'Nutty-flavored greens rich in minerals and healthy fats.',
    price: 110,
    weight: '50g',
    image: '/images/sunflower.jpg',
    nutritionalBenefits: [
      'Healthy Fats',
      'Iron',
      'Magnesium'
    ],
    availability: 'In Stock',
    growingTime: '8–12 days',
    details: {
      healthBenefits:
        'Boosts energy and supports heart and bone health.',
      shelfLife: '10–12 days when refrigerated',
      usage: 'Salads, grain bowls, wraps.'
    }
  },
  {
    id: '5',
    name: 'Beetroot Microgreens',
    slug: 'beetroot',
    description: 'Earthy, colorful greens known for stamina and endurance.',
    price: 95,
    weight: '50g',
    image: '/images/beetroot.jpg',
    nutritionalBenefits: [
      'Iron Rich',
      'Folate',
      'Antioxidants'
    ],
    availability: 'In Stock',
    growingTime: '9–12 days',
    details: {
      healthBenefits:
        'Improves blood circulation and oxygen delivery.',
      shelfLife: '8–10 days when refrigerated',
      usage: 'Smoothies, salads, gourmet plating.'
    }
  },
  {
    id: '6',
    name: 'Mustard Microgreens',
    slug: 'mustard',
    description: 'Bold, peppery greens that elevate any dish.',
    price: 85,
    weight: '50g',
    image: '/images/mustard.jpg',
    nutritionalBenefits: [
      'Vitamin K',
      'Metabolism Boost',
      'Anti-inflammatory'
    ],
    availability: 'In Stock',
    growingTime: '6–8 days',
    details: {
      healthBenefits:
        'Supports metabolism and reduces inflammation.',
      shelfLife: '7–9 days when refrigerated',
      usage: 'Sandwiches, salads, spicy dishes.'
    }
  }
];

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' }
];
