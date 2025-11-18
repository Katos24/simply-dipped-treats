import Link from 'next/link';
import Image from 'next/image'; // Next.js optimized image component
import styles from './page.module.css';

const categories = [
  {
    name: 'Brownie Bites',
    description: 'Rich, fudgy brownie bites in various flavors',
    href: '/treats/brownie-bites',
    image: '/images/treats/brownies/cosmic.jpg',
  },
  {
    name: 'Cake Pops',
    description: 'Moist cake pops coated in smooth chocolate',
    href: '/treats/cake-pops',
    image: '/images/treats/cakepops/GrinchCakePop.png'
  },
  {
    name: 'Rice Krispies',
    description: 'Classic rice krispie treats with a twist',
    href: '/treats/rice-krispies',
    image: '/images/rice-krispies.jpg'
  },
  {
    name: 'Spanakopita',
    description: 'Authentic Greek spinach & feta pastries',
    href: '/spanakopita',
    image: '/images/spanakopita.jpg'
  }
];

export default function TreatsPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container text-center">
          <h1 className={styles.title}>Our Treats</h1>
          <p className={styles.subtitle}>Choose a category to explore our menu</p>
        </div>
      </section>

      <section className={styles.categoriesSection}>
        <div className="container">
          <div className={styles.grid}>
            {categories.map((category) => (
              <Link key={category.href} href={category.href} className={styles.categoryCard}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={category.image} 
                    alt={category.name} 
                    width={200} 
                    height={200} 
                    className={styles.categoryImage}
                  />
                </div>
                <h2 className={styles.categoryName}>{category.name}</h2>
                <p className={styles.categoryDescription}>{category.description}</p>
                <span className={styles.arrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}