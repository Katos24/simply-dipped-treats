'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import styles from './page.module.css';

export default function TreatsPage() {
  const [activeTab, setActiveTab] = useState<'brownie-bites' | 'cake-pops' | 'rice-krispies'>('brownie-bites');

  const filteredProducts = products.filter(p => p.category === activeTab);

  return (
    <main>
      <section className={styles.hero}>
        <div className="container text-center">
          <h1 className={styles.title}>Our Treats</h1>
          <p className={styles.subtitle}>Handcrafted desserts made fresh to order</p>
        </div>
      </section>

      <section className={styles.productsSection}>
        <div className="container">
          {/* Tabs */}
          <div className={styles.tabs}>
            <button
              onClick={() => setActiveTab('brownie-bites')}
              className={`${styles.tab} ${activeTab === 'brownie-bites' ? styles.tabActive : ''}`}
            >
              Brownie Bites
            </button>
            <button
              onClick={() => setActiveTab('cake-pops')}
              className={`${styles.tab} ${activeTab === 'cake-pops' ? styles.tabActive : ''}`}
            >
              Cake Pops
            </button>
            <button
              onClick={() => setActiveTab('rice-krispies')}
              className={`${styles.tab} ${activeTab === 'rice-krispies' ? styles.tabActive : ''}`}
            >
              Rice Krispies
            </button>
          </div>

          {/* Products Grid */}
          <div className={styles.grid}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
