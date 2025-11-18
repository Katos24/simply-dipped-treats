export interface ProductVariant {
  size: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  category: 'brownie-individual' | 'brownie-pack' | 'cakepop-individual' | 'cakepop-pack' | 'ricekrispie-individual' | 'ricekrispie-pack' | 'spanakopita';
  description: string;
  image: string;
  variants: ProductVariant[];
  contents?: string[]; // For packs - what's included
  seasonal?: boolean; // NEW: Mark seasonal items
  seasonalNote?: string; // NEW: Optional message like "Available Nov-Dec"
}

export const products: Product[] = [
  // Individual Brownie Bites
  {
    id: 'brownie-pumpkin',
    name: 'Pumpkin Cheesecake',
    category: 'brownie-individual',
    description: 'Rich brownie with pumpkin cheesecake swirl',
    image: '/images/treats/brownies/pumpkin.jpg',
    variants: [
      { size: 'Half Dozen (6)', price: 18 },
      { size: 'Dozen (12)', price: 32 }
    ]
  },
  {
    id: 'brownie-reeses',
    name: "Reese's PB Cup",
    category: 'brownie-individual',
    description: 'Chocolate brownie with peanut butter cup pieces',
    image: '/images/treats/brownies/reeses.jpg',
    variants: [
      { size: 'Half Dozen (6)', price: 20 },
      { size: 'Dozen (12)', price: 35 }
    ]
  },
  {
    id: 'brownie-cosmic',
    name: 'Cosmic Brownie',
    category: 'brownie-individual',
    description: 'Pending - Hi Lauren',
    image: '/images/treats/brownies/cosmic.jpg',
    variants: [
      { size: 'Half Dozen (6)', price: 20 },
      { size: 'Dozen (12)', price: 35 }
    ]
  },
  {
    id: 'brownie-brookie',
    name: 'Brookie',
    category: 'brownie-individual',
    description: 'Half brownie, half cookie - best of both worlds',
    image: '/images/treats/brownies/brookie.jpg',
    variants: [
      { size: 'Half Dozen (6)', price: 20 },
      { size: 'Dozen (12)', price: 35 }
    ]
  },

  // Brownie Packs
  {
    id: 'brownie-winter-pack',
    name: 'Winter Pack',
    category: 'brownie-pack',
    description: 'Perfect seasonal variety pack',
    image: '/images/treats/brownies/winter-pack.jpg',
    contents: [
      '3 Pumpkin Cheesecake',
      '3 Peppermint',
      '3 Snickers',
      '3 Oreo'
    ],
    variants: [
      { size: '12 pieces', price: 38 }
    ]
  },
  {
    id: 'brownie-fat-pack',
    name: 'Fat Pack',
    category: 'brownie-pack',
    description: 'Extra large variety for parties',
    image: '/images/treats/brownies/fat-pack.jpg',
    contents: [
      '6 Classic Chocolate',
      '6 Reeses PB',
      '6 Oreo',
      '6 Brookie'
    ],
    variants: [
      { size: '24 pieces', price: 70 }
    ]
  },

  // Cake Pops
  {
    id: 'cakepop-vanilla',
    name: 'Vanilla Blondie',
    category: 'cakepop-individual',
    description: 'Moist vanilla cake pop with chocolate coating',
    image: '/images/treats/cakepops/vanilla.jpg',
    variants: [
      { size: 'Half Dozen (6)', price: 20 },
      { size: 'Dozen (12)', price: 35 }
    ]
  },
  {
    id: 'cakepop-funfetti',
    name: 'Funfetti Blondie',
    category: 'cakepop-individual',
    description: 'Moist vanilla cake pop with chocolate coating',
    image: '/images/treats/cakepops/funfetti.png',
    variants: [
      { size: 'Half Dozen (6)', price: 20 },
      { size: 'Dozen (12)', price: 35 }
    ]
  },
  {
    id: 'cakepop-chocolate',
    name: 'Chocolate Cake Pop',
    category: 'cakepop-individual',
    description: 'Moist vanilla cake pop with chocolate coating',
    image: '/images/treats/cakepops/chocolate.jpg',
    variants: [
      { size: 'Half Dozen (6)', price: 20 },
      { size: 'Dozen (12)', price: 35 }
    ]
  },
  {
    id: 'cakepop-turkey',
    name: 'Turkey Cake Pop',
    category: 'cakepop-individual',
    description: 'Moist vanilla cake pop with chocolate coating',
    image: '/images/treats/cakepops/turkey.png',
    variants: [
      { size: 'Half Dozen (6)', price: 20 },
      { size: 'Dozen (12)', price: 35 }
    ]
  },
  {
    id: 'cakepop-grinch',
    name: 'Grinch Cake Pop',
    category: 'cakepop-individual',
    description: 'Moist vanilla cake pop with chocolate coating',
    seasonal: true,
    seasonalNote: 'Available December only',
    image: '/images/treats/cakepops/grinch.png',
    variants: [
      { size: 'Half Dozen (6)', price: 20 },
      { size: 'Dozen (12)', price: 35 }
    ]
  },

  // Rice Krispies Treats
  {
    id: 'ricekrispie-sprinkles',
    name: 'Original with Sprinkles',
    category: 'ricekrispie-individual',
    description: 'Classic rice krispie treat dipped in chocolate and topped with colorful sprinkles',
    image: '/images/treats/ricekrispies/sprinkles.png',
    variants: [
      { size: 'Half Dozen (6)', price: 15 },
      { size: 'Dozen (12)', price: 28 }
    ]
  },
  {
    id: 'ricekrispie-strawberry',
    name: 'Strawberry Shortcake',
    category: 'ricekrispie-individual',
    description: 'Sweet strawberry-flavored treat with white chocolate and cake crumbles',
    image: '/images/treats/ricekrispies/strawberry.png',
    variants: [
      { size: 'Half Dozen (6)', price: 15 },
      { size: 'Dozen (12)', price: 28 }
    ]
  },
  {
    id: 'ricekrispie-cookies-cream',
    name: 'Cookies & Cream',
    category: 'ricekrispie-individual',
    description: 'Vanilla treat dipped in white chocolate with crushed Oreo cookies',
    image: '/images/treats/ricekrispies/cookies-cream.png',
    variants: [
      { size: 'Half Dozen (6)', price: 15 },
      { size: 'Dozen (12)', price: 28 }
    ]
  },
  {
    id: 'ricekrispie-caramel-apple',
    name: 'Caramel Apple Pie',
    category: 'ricekrispie-individual',
    description: 'Apple cinnamon treat with caramel drizzle and graham cracker crumbs',
    image: '/images/treats/ricekrispies/caramel-apple.png',
    variants: [
      { size: 'Half Dozen (6)', price: 15 },
      { size: 'Dozen (12)', price: 28 }
    ]
  },
  {
    id: 'ricekrispie-banana-cream',
    name: 'Banana Cream Pie',
    category: 'ricekrispie-individual',
    description: 'Banana-flavored treat with white chocolate and vanilla wafer crumbs',
    image: '/images/treats/ricekrispies/banana-cream.png',
    variants: [
      { size: 'Half Dozen (6)', price: 15 },
      { size: 'Dozen (12)', price: 28 }
    ]
  },
  {
    id: 'ricekrispie-birthday',
    name: 'Birthday Cake',
    category: 'ricekrispie-individual',
    description: 'Funfetti-style treat with white chocolate and rainbow sprinkles',
    image: '/images/treats/ricekrispies/birthday.png',
    variants: [
      { size: 'Half Dozen (6)', price: 15 },
      { size: 'Dozen (12)', price: 28 }
    ]
  },
  {
    id: 'ricekrispie-sugar-cookie',
    name: 'Sugar Cookie',
    category: 'ricekrispie-individual',
    description: 'Vanilla treat with white chocolate and sugar cookie crumbles',
    image: '/images/treats/ricekrispies/sugar-cookie.png',
    variants: [
      { size: 'Half Dozen (6)', price: 15 },
      { size: 'Dozen (12)', price: 28 }
    ]
  },
  {
    id: 'ricekrispie-mini-sprinkles',
    name: 'Mini with Sprinkles',
    category: 'ricekrispie-individual',
    description: 'Bite-sized rice krispie treats dipped in chocolate with colorful sprinkles',
    image: '/images/treats/ricekrispies/mini-sprinkles.png',
    variants: [
      { size: 'Half Dozen (6)', price: 12 },
      { size: 'Dozen (12)', price: 22 }
    ]
  },

  // Spanakopita
  {
    id: 'spanakopita-traditional',
    name: 'Traditional Greek Spanakopita',
    category: 'spanakopita',
    description: 'Fresh spinach, authentic Greek feta, and herbs wrapped in crispy phyllo dough',
    image: '/images/spanakopita/spanakopita.jpg',
    variants: [
      { size: 'Half Dozen (6)', price: 35 },
      { size: 'Dozen (12)', price: 62 },
      { size: 'Party Size (24)', price: 110 }
    ]
  }
];