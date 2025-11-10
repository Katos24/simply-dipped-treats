import styles from './page.module.css';

export default function SpanakopitaPage() {
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

      {/* Pricing */}
      <section className={styles.pricingSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Order Fresh</h2>
          
          <div className={styles.priceGrid}>
            <div className={styles.priceCard}>
              <h3 className={styles.cardTitle}>Half Dozen</h3>
              <p className={styles.cardSubtitle}>6 triangles</p>
              <p className={styles.price}>$35</p>
              <button className={styles.orderButton}>Order Now</button>
            </div>

            <div className={`${styles.priceCard} ${styles.popular}`}>
              <div className={styles.popularBadge}>POPULAR</div>
              <h3 className={styles.cardTitle}>Dozen</h3>
              <p className={styles.cardSubtitle}>12 triangles</p>
              <p className={styles.price}>$62</p>
              <button className={styles.orderButton}>Order Now</button>
            </div>

            <div className={styles.priceCard}>
              <h3 className={styles.cardTitle}>Party Size</h3>
              <p className={styles.cardSubtitle}>24 triangles</p>
              <p className={styles.price}>$110</p>
              <button className={styles.orderButton}>Order Now</button>
            </div>
          </div>

          <p className={styles.taxNote}>
            All prices include tax • Pickup in Holbrook, NY
          </p>
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
                <h3>Saturday Pickup</h3>
                <p>Pick up your order in Holbrook, NY. Delivery available for larger orders.</p>
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
