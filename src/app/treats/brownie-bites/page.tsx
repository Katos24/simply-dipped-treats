'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import styles from './page.module.css';

export default function BrownieBitesPage() {
  const [activeTab, setActiveTab] = useState<'individual' | 'packs'>('individual');

  const individualBrownies = products.filter(p => p.category === 'brownie-individual');
  const browniePacks = products.filter(p => p.category === 'brownie-pack');

  const displayProducts = activeTab === 'individual' ? individualBrownies : browniePacks;

  return (
    <main>
      <section className={styles.hero}>
        <div className="container text-center">
          <h1 className={styles.title}>Brownie Bites</h1>
          <p className={styles.subtitle}>Rich, fudgy brownies in delicious flavors</p>
        </div>
      </section>

      <section className={styles.productsSection}>
        <div className="container">
          {/* Tabs */}
          <div className={styles.tabs}>
            <button
              onClick={() => setActiveTab('individual')}
              className={`${styles.tab} ${activeTab === 'individual' ? styles.tabActive : ''}`}
            >
              Individual Flavors
            </button>
            <button
              onClick={() => setActiveTab('packs')}
              className={`${styles.tab} ${activeTab === 'packs' ? styles.tabActive : ''}`}
            >
              Variety Packs
            </button>
          </div>

          {/* Products Grid - prioritize first 3 images */}
          <div className={styles.grid}>
            {displayProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                priority={index < 3}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
