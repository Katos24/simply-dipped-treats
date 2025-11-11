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
    name: 'Vanilla Dream',
    category: 'cakepop-individual',
    description: 'Moist vanilla cake pop with chocolate coating',
    image: '/images/treats/cakepops/vanilla.jpg',
    variants: [
      { size: 'Half Dozen (6)', price: 20 },
      { size: 'Dozen (12)', price: 35 }
    ]
  },

  // Rice Krispies
  {
    id: 'ricekrispie-classic',
    name: 'Classic Chocolate',
    category: 'ricekrispie-individual',
    description: 'Traditional rice krispie treats dipped in chocolate',
    image: '/images/treats/ricekrispies/classic.jpg',
    variants: [
      { size: 'Half Dozen (6)', price: 15 },
      { size: 'Dozen (12)', price: 28 }
    ]
  },

  // Spanakopita
  {
    id: 'spanakopita-traditional',
    name: 'Traditional Greek Spanakopita',
    category: 'spanakopita',
    description: 'Fresh spinach, authentic Greek feta, and herbs wrapped in crispy phyllo dough',
    image: '/images/spanakopita/hero.jpg',
    variants: [
      { size: 'Half Dozen (6)', price: 35 },
      { size: 'Dozen (12)', price: 62 },
      { size: 'Party Size (24)', price: 110 }
    ]
  }
];
