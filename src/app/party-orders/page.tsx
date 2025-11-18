import Link from 'next/link';
import styles from './page.module.css';

export default function PartyOrdersPage() {
  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>🎉 Party Orders & Catering</span>
            <h1 className={styles.heroTitle}>Make Your Event Unforgettable</h1>
            <p className={styles.heroSubtitle}>
              Custom dessert platters and party packs for birthdays, weddings, 
              corporate events, and everything in between.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whySection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Choose Simply Dipped for Your Event?</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>🎨</div>
              <h3 className={styles.whyTitle}>Fully Customizable</h3>
              <p className={styles.whyText}>
                Mix and match flavors to create the perfect assortment for your guests
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>💰</div>
              <h3 className={styles.whyTitle}>Bulk Pricing</h3>
              <p className={styles.whyText}>
                Special discounts available for large orders of 50+ pieces
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>📦</div>
              <h3 className={styles.whyTitle}>Beautiful Packaging</h3>
              <p className={styles.whyText}>
                Professionally packaged and ready to display at your event
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>✨</div>
              <h3 className={styles.whyTitle}>Fresh & Homemade</h3>
              <p className={styles.whyText}>
                Made fresh to order with premium ingredients - no preservatives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Party Pack Options */}
      <section className={styles.packsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Popular Party Packs</h2>
          <p className={styles.sectionSubtitle}>
            Pre-designed assortments to make ordering easy
          </p>

          <div className={styles.packsGrid}>
            {/* Small Party Pack */}
            <div className={styles.packCard}>
              <div className={styles.packHeader}>
                <span className={styles.packBadge}>Most Popular</span>
                <h3 className={styles.packTitle}>Small Party Pack</h3>
                <p className={styles.packGuests}>Perfect for 10-15 guests</p>
              </div>
              <div className={styles.packContents}>
                <h4 className={styles.contentsTitle}>Includes:</h4>
                <ul className={styles.contentsList}>
                  <li>12 Brownie Bites (assorted flavors)</li>
                  <li>12 Cake Pops (assorted flavors)</li>
                  <li>12 Rice Krispie Treats</li>
                </ul>
                <p className={styles.packTotal}>36 pieces total</p>
              </div>
              <div className={styles.packPricing}>
                <div className={styles.packPrice}>
                  <span className={styles.priceLabel}>Starting at</span>
                  <span className={styles.priceAmount}>$85</span>
                </div>
                <Link href="/contact" className={styles.packButton}>
                  Request Quote
                </Link>
              </div>
            </div>

            {/* Medium Party Pack */}
            <div className={`${styles.packCard} ${styles.packCardFeatured}`}>
              <div className={styles.packHeader}>
                <span className={styles.packBadge}>Best Value</span>
                <h3 className={styles.packTitle}>Medium Party Pack</h3>
                <p className={styles.packGuests}>Perfect for 25-35 guests</p>
              </div>
              <div className={styles.packContents}>
                <h4 className={styles.contentsTitle}>Includes:</h4>
                <ul className={styles.contentsList}>
                  <li>24 Brownie Bites (assorted flavors)</li>
                  <li>24 Cake Pops (assorted flavors)</li>
                  <li>24 Rice Krispie Treats</li>
                </ul>
                <p className={styles.packTotal}>72 pieces total</p>
              </div>
              <div className={styles.packPricing}>
                <div className={styles.packPrice}>
                  <span className={styles.priceLabel}>Starting at</span>
                  <span className={styles.priceAmount}>$160</span>
                </div>
                <Link href="/contact" className={styles.packButton}>
                  Request Quote
                </Link>
              </div>
            </div>

            {/* Large Party Pack */}
            <div className={styles.packCard}>
              <div className={styles.packHeader}>
                <span className={styles.packBadge}>For Big Events</span>
                <h3 className={styles.packTitle}>Large Party Pack</h3>
                <p className={styles.packGuests}>Perfect for 50+ guests</p>
              </div>
              <div className={styles.packContents}>
                <h4 className={styles.contentsTitle}>Includes:</h4>
                <ul className={styles.contentsList}>
                  <li>48 Brownie Bites (assorted flavors)</li>
                  <li>48 Cake Pops (assorted flavors)</li>
                  <li>48 Rice Krispie Treats</li>
                </ul>
                <p className={styles.packTotal}>144 pieces total</p>
              </div>
              <div className={styles.packPricing}>
                <div className={styles.packPrice}>
                  <span className={styles.priceLabel}>Starting at</span>
                  <span className={styles.priceAmount}>$295</span>
                </div>
                <Link href="/contact" className={styles.packButton}>
                  Request Quote
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.customNote}>
            <p>
              💡 <strong>Want something different?</strong> We can create fully custom assortments 
              with your choice of flavors and quantities. Contact us for a personalized quote!
            </p>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className={styles.eventsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Perfect For Any Occasion</h2>
          <div className={styles.eventsGrid}>
            <div className={styles.eventCard}>
              <div className={styles.eventEmoji}>🎂</div>
              <h3 className={styles.eventTitle}>Birthday Parties</h3>
              <p className={styles.eventText}>Sweet treats that kids and adults love</p>
            </div>
            <div className={styles.eventCard}>
              <div className={styles.eventEmoji}>👶</div>
              <h3 className={styles.eventTitle}>Baby Showers</h3>
              <p className={styles.eventText}>Adorable desserts for celebrating new arrivals</p>
            </div>
            <div className={styles.eventCard}>
              <div className={styles.eventEmoji}>💍</div>
              <h3 className={styles.eventTitle}>Weddings</h3>
              <p className={styles.eventText}>Elegant dessert displays for your special day</p>
            </div>
            <div className={styles.eventCard}>
              <div className={styles.eventEmoji}>🎓</div>
              <h3 className={styles.eventTitle}>Graduations</h3>
              <p className={styles.eventText}>Celebrate achievements with delicious treats</p>
            </div>
            <div className={styles.eventCard}>
              <div className={styles.eventEmoji}>💼</div>
              <h3 className={styles.eventTitle}>Corporate Events</h3>
              <p className={styles.eventText}>Impress clients and boost team morale</p>
            </div>
            <div className={styles.eventCard}>
              <div className={styles.eventEmoji}>🎄</div>
              <h3 className={styles.eventTitle}>Holiday Parties</h3>
              <p className={styles.eventText}>Festive treats for seasonal celebrations</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className={styles.howToOrder}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How to Order</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.orderStep}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Contact Us</h3>
              <p className={styles.stepText}>
                Reach out via email or Instagram with your event date, guest count, 
                and any flavor preferences
              </p>
            </div>
            <div className={styles.orderStep}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Get Your Quote</h3>
              <p className={styles.stepText}>
                We&apos;ll provide a custom quote based on your needs, typically within 24 hours
              </p>
            </div>
            <div className={styles.orderStep}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Confirm & Pay</h3>
              <p className={styles.stepText}>
                Approve your order and pay 50% deposit to secure your date
              </p>
            </div>
            <div className={styles.orderStep}>
              <div className={styles.stepNumber}>4</div>
              <h3 className={styles.stepTitle}>Pick Up Fresh</h3>
              <p className={styles.stepText}>
                Collect your treats on your scheduled date or opt for delivery (+$20 for parties)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className={styles.faqSection}>
        <div className="container max-w-4xl">
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>How far in advance should I order?</h3>
              <p className={styles.faqAnswer}>
                We recommend ordering at least 2 weeks in advance for party orders to ensure 
                availability. For large events (100+ pieces) or holiday weekends, please order 
                3-4 weeks ahead.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Do you offer delivery?</h3>
              <p className={styles.faqAnswer}>
                Yes! Delivery is available for party orders within 15 miles of Holbrook, NY 
                for an additional $20 fee. For longer distances, please contact us for a quote.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Can I customize the flavors?</h3>
              <p className={styles.faqAnswer}>
                Absolutely! You can mix and match any of our available flavors. We&apos;ll work with 
                you to create the perfect assortment for your event.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>What&apos;s your cancellation policy?</h3>
              <p className={styles.faqAnswer}>
                We require 1 week notice for cancellations to receive a full refund of your deposit. 
                Cancellations within 1 week of the event will forfeit the 50% deposit.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Do you accommodate dietary restrictions?</h3>
              <p className={styles.faqAnswer}>
                We can work with some dietary needs. Please let us know about any allergies or 
                restrictions when requesting your quote. Note: all items are made in a kitchen 
                that handles nuts, dairy, and gluten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Plan Your Party Order?</h2>
            <p className={styles.ctaText}>
              Contact us today for a personalized quote and let&apos;s make your event delicious!
            </p>
            <div className={styles.ctaButtons}>
              <a href="mailto:simplydipped24@gmail.com" className={styles.ctaButtonPrimary}>
                📧 Email Us
              </a>
              <a href="https://www.instagram.com/simply_dippedtreats/" target="_blank" rel="noopener noreferrer" className={styles.ctaButtonSecondary}>
                📱 Instagram DM
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}