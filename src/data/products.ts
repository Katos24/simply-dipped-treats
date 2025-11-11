export interface ProductVariant {
  size: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  category: 'brownie-bites' | 'cake-pops' | 'rice-krispies' | 'spanakopita';
  description: string;
  image: string;
  variants: ProductVariant[];
}

export const products: Product[] = [
  // Brownie Bites
  {
    id: 'brownie-classic',
    name: 'Classic Chocolate',
    category: 'brownie-bites',
    description: 'Rich, fudgy brownie dipped in premium dark chocolate',
    image: '/images/treats/brownies/classic.jpg',
    variants: [
      { size: 'Half Dozen (6)', price: 18 },
      { size: 'Dozen (12)', price: 32 },
        { size: 'Two Doxen (24)', price: 50 }
    ]
  },
  {
    id: 'brownie-peanutbutter',
    name: 'Peanut Butter',
    category: 'brownie-bites',
    description: 'Chocolate brownie with creamy peanut butter coating',
    image: '/images/treats/brownies/peanutbutter.jpg',
    variants: [
      { size: 'Half Dozen (6)', price: 20 },
      { size: 'Dozen (12)', price: 35 }
    ]
  },
  
  // Cake Pops
  {
    id: 'cakepop-vanilla',
    name: 'Vanilla Dream',
    category: 'cake-pops',
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
    category: 'rice-krispies',
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
    image: '/images/spanakopita/spanakopitatraycopy.jpg',
    variants: [
      { size: 'Half Dozen (6)', price: 35 },
      { size: 'Dozen (12)', price: 62 },
      { size: 'Party Size (24)', price: 110 }
    ]
  }
];
