import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Handcrafted Treats
                <span className={styles.heroTitleAccent}>Made with Love</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Indulge in our decadent brownie bites, cake pops, rice krispies, and authentic Greek spanakopita. 
                Every treat is made fresh to order in Holbrook, NY.
              </p>
              <div className={styles.heroButtons}>
                <Link href="/treats" className={styles.primaryButton}>
                  Shop Treats 🍫
                </Link>
                <Link href="/spanakopita" className={styles.secondaryButton}>
                  Try Spanakopita
                </Link>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.heroImageCard}>
                <Image
                  src="/images/treats/brownies/pumpkin.jpg"
                  alt="Delicious brownie bites"
                  width={500}
                  height={500}
                  priority
                  className={styles.heroImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏠</div>
              <h3 className={styles.featureTitle}>Homemade</h3>
              <p className={styles.featureText}>
                Every treat is handcrafted in small batches with premium ingredients
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✨</div>
              <h3 className={styles.featureTitle}>Fresh to Order</h3>
              <p className={styles.featureText}>
                Made fresh every week - order by Wednesday for Saturday pickup
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎨</div>
              <h3 className={styles.featureTitle}>Custom Orders</h3>
              <p className={styles.featureText}>
                Special events? We can create custom treats just for you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className={styles.categories}>
        <div className="container">
          <h2 className={styles.sectionTitle}>What We Offer</h2>
          <p className={styles.sectionSubtitle}>Choose from our delicious selection</p>
          
          <div className={styles.categoriesGrid}>
            <Link href="/treats/brownie-bites" className={styles.categoryCard}>
              <div className={styles.categoryEmoji}>🍫</div>
              <h3 className={styles.categoryTitle}>Brownie Bites</h3>
              <p className={styles.categoryDesc}>Fudgy, rich brownies in amazing flavors</p>
              <span className={styles.categoryArrow}>Shop Now →</span>
            </Link>

            <Link href="/treats/cake-pops" className={styles.categoryCard}>
              <div className={styles.categoryEmoji}>🍭</div>
              <h3 className={styles.categoryTitle}>Cake Pops</h3>
              <p className={styles.categoryDesc}>Moist cake coated in smooth chocolate</p>
              <span className={styles.categoryArrow}>Shop Now →</span>
            </Link>

            <Link href="/treats/rice-krispies" className={styles.categoryCard}>
              <div className={styles.categoryEmoji}>🌾</div>
              <h3 className={styles.categoryTitle}>Rice Krispies</h3>
              <p className={styles.categoryDesc}>Classic treats with a creative twist</p>
              <span className={styles.categoryArrow}>Shop Now →</span>
            </Link>

            <Link href="/spanakopita" className={styles.categoryCard}>
              <div className={styles.categoryEmoji}>🥟</div>
              <h3 className={styles.categoryTitle}>Spanakopita</h3>
              <p className={styles.categoryDesc}>Authentic Greek spinach & feta triangles</p>
              <span className={styles.categoryArrow}>Order Now →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Party Orders Section */}
<section className={styles.partyOrders}>
  <div className="container">
    <div className={styles.partyContent}>
      <div className={styles.partyText}>
        <span className={styles.partyBadge}>🎉 Perfect for Events</span>
        <h2 className={styles.partyTitle}>
          Planning a Party or Event?
        </h2>
        <p className={styles.partyDescription}>
          We specialize in custom orders for birthdays, baby showers, weddings, 
          corporate events, and more! Our party packs and custom assortments 
          make entertaining easy and delicious.
        </p>
        <ul className={styles.partyFeatures}>
          <li>✓ Custom flavor combinations</li>
          <li>✓ Bulk pricing available</li>
          <li>✓ Perfect for 10-100+ guests</li>
          <li>✓ Beautifully packaged & ready to serve</li>
        </ul>
        <Link href="/party-orders" className={styles.partyButton}>
          Plan Your Party Order →
        </Link>
      </div>
      <div className={styles.partyImage}>
        <div className={styles.partyImageCard}>
          <div className={styles.partyImagePlaceholder}>
            🎊 Party Treats Display 🎊
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* How It Works */}
      <section className={styles.howItWorks}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Browse & Order</h3>
              <p className={styles.stepText}>
                Choose your favorites and place your order by Wednesday evening
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>We Bake Fresh</h3>
              <p className={styles.stepText}>
                Your treats are made fresh on Friday with premium ingredients
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Pick Up Saturday</h3>
              <p className={styles.stepText}>
                Collect your order on Saturday between 10am - 2pm or choose delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Indulge?</h2>
            <p className={styles.ctaText}>
              Order now and taste the difference homemade makes
            </p>
            <Link href="/treats" className={styles.ctaButton}>
              Start Shopping
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
