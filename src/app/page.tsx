'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState('brownies');

  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container text-center">
          <h1 className={styles.heroTitle}>Simply Dipped Treats</h1>
          <p className={styles.heroSubtitle}>
            Handcrafted desserts made with love in Holbrook, NY
          </p>
        </div>
      </section>

      {/* Products */}
      <section className={styles.productsSection}>
        <div className="container max-w-5xl">
          {/* Tabs */}
          <div className={styles.tabContainer}>
            <button
              onClick={() => setActiveTab('brownies')}
              className={`${styles.tab} ${activeTab === 'brownies' ? styles.tabActive : ''}`}
            >
              Brownie Bites
            </button>
            <button
              onClick={() => setActiveTab('cakepops')}
              className={`${styles.tab} ${activeTab === 'cakepops' ? styles.tabActive : ''}`}
            >
              Cake Pops
            </button>
            <button
              onClick={() => setActiveTab('ricekrispies')}
              className={`${styles.tab} ${activeTab === 'ricekrispies' ? styles.tabActive : ''}`}
            >
              Rice Krispies
            </button>
          </div>

          {/* Content */}
          <div className={styles.productCard}>
            {activeTab === 'brownies' && (
              <div>
                <div className={styles.productImage}>
                  <div className={styles.imagePlaceholder}>
                    📷 Add brownie bites photo here
                    <span className={styles.imagePath}>public/images/treats/brownies/hero.jpg</span>
                  </div>
                </div>
                <h2 className={styles.productTitle}>Brownie Bites</h2>
                <p className={styles.productDescription}>
                  Rich, fudgy brownie bites dipped in premium chocolate
                </p>
                
                <div className={styles.priceGrid}>
                  <div className={styles.priceCard}>
                    <h3 className={styles.priceLabel}>Half Dozen</h3>
                    <p className={styles.price}>$18</p>
                    <button className={styles.orderButton}>Order Now</button>
                  </div>
                  <div className={styles.priceCard}>
                    <h3 className={styles.priceLabel}>Dozen</h3>
                    <p className={styles.price}>$32</p>
                    <button className={styles.orderButton}>Order Now</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'cakepops' && (
              <div>
                <div className={styles.productImage}>
                  <div className={styles.imagePlaceholder}>
                    📷 Add cake pops photo here
                    <span className={styles.imagePath}>public/images/treats/cakepops/hero.jpg</span>
                  </div>
                </div>
                <h2 className={styles.productTitle}>Cake Pops</h2>
                <p className={styles.productDescription}>
                  Moist cake pops coated in smooth chocolate
                </p>
                
                <div className={styles.priceGrid}>
                  <div className={styles.priceCard}>
                    <h3 className={styles.priceLabel}>Half Dozen</h3>
                    <p className={styles.price}>$20</p>
                    <button className={styles.orderButton}>Order Now</button>
                  </div>
                  <div className={styles.priceCard}>
                    <h3 className={styles.priceLabel}>Dozen</h3>
                    <p className={styles.price}>$35</p>
                    <button className={styles.orderButton}>Order Now</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ricekrispies' && (
              <div>
                <div className={styles.productImage}>
                  <div className={styles.imagePlaceholder}>
                    📷 Add rice krispies photo here
                    <span className={styles.imagePath}>public/images/treats/ricekrispies/hero.jpg</span>
                  </div>
                </div>
                <h2 className={styles.productTitle}>Rice Krispies</h2>
                <p className={styles.productDescription}>
                  Classic rice krispie treats with a chocolate twist
                </p>
                
                <div className={styles.priceGrid}>
                  <div className={styles.priceCard}>
                    <h3 className={styles.priceLabel}>Half Dozen</h3>
                    <p className={styles.price}>$15</p>
                    <button className={styles.orderButton}>Order Now</button>
                  </div>
                  <div className={styles.priceCard}>
                    <h3 className={styles.priceLabel}>Dozen</h3>
                    <p className={styles.price}>$28</p>
                    <button className={styles.orderButton}>Order Now</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={styles.contactSection}>
        <div className="container max-w-2xl">
          <h2 className={styles.contactTitle}>Ready to Order?</h2>
          <p className={styles.contactDescription}>
            Contact us to place your order for pickup in Holbrook, NY
          </p>
          <div className={styles.contactInfo}>
            <p>
              📧 <a href="mailto:orders@simplydipped.com" className={styles.contactLink}>orders@simplydipped.com</a>
            </p>
            <p>
              📱 <a href="tel:5551234567" className={styles.contactLink}>(555) 123-4567</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
