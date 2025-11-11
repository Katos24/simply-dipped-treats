import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import styles from './page.module.css';

export default function SpanakopitaPage() {
  const spanakopitaProduct = products.find(p => p.id === 'spanakopita-traditional');

  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container text-center">
          <h1 className={styles.heroTitle}>Homemade Greek Spanakopita</h1>
          <p className={styles.heroSubtitle}>
            Traditional spinach & feta triangles, made fresh to order
          </p>
        </div>
      </section>

      {/* Product */}
      <section className={styles.productSection}>
        <div className="container max-w-4xl">
          {spanakopitaProduct && <ProductCard product={spanakopitaProduct} />}
        </div>
      </section>

      {/* Info */}
      <section className={styles.infoSection}>
        <div className={`container ${styles.infoContainer}`}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          
          <div className={styles.stepsList}>
            <div className={styles.step}>
              <div className={styles.stepIcon}>📝</div>
              <div className={styles.stepContent}>
                <h3>Order by Wednesday</h3>
                <p>Place your order by Wednesday evening for Saturday pickup</p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepIcon}>👨‍🍳</div>
              <div className={styles.stepContent}>
                <h3>Made Fresh Friday</h3>
                <p>Your spanakopita is prepared fresh to order with authentic ingredients</p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepIcon}>📦</div>
              <div className={styles.stepContent}>
                <h3>Saturday Pickup or Delivery</h3>
                <p>Pick up your order in Holbrook, NY or choose delivery for +$10</p>
              </div>
            </div>
          </div>

          <div className={styles.ingredientsCard}>
            <h3>What&apos;s Inside</h3>
            <p>
              Fresh spinach, authentic Greek feta cheese, farm-fresh eggs, onions, dill, 
              and Mediterranean herbs wrapped in crispy layers of phyllo dough. 
              Made in a home kitchen with traditional family recipes.
            </p>
            <p className={styles.allergenInfo}>
              Contains: Wheat, Milk, Eggs
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
