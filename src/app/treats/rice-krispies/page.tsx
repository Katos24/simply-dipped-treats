'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import styles from './page.module.css';

export default function RiceKrispiesPage() {
  const [activeTab, setActiveTab] = useState<'individual' | 'packs'>('individual');

  const individualRiceKrispies = products.filter(p => p.category === 'ricekrispie-individual');
  const riceKrispiePacks = products.filter(p => p.category === 'ricekrispie-pack');

  const displayProducts = activeTab === 'individual' ? individualRiceKrispies : riceKrispiePacks;

  return (
    <main>
      <section className={styles.hero}>
        <div className="container text-center">
          <h1 className={styles.title}>Rice Krispies</h1>
          <p className={styles.subtitle}>Classic rice krispie treats with a twist</p>
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

          {/* Products Grid */}
          <div className={styles.grid}>
            {displayProducts.length > 0 ? (
              displayProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className={styles.emptyMessage}>No packs available yet. Check back soon!</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
