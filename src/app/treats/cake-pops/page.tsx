'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import styles from './page.module.css';

export default function CakePopsPage() {
  const [activeTab, setActiveTab] = useState<'individual' | 'packs'>('individual');

  const individualCakePops = products.filter(p => p.category === 'cakepop-individual');
  const cakePopPacks = products.filter(p => p.category === 'cakepop-pack');

  const displayProducts = activeTab === 'individual' ? individualCakePops : cakePopPacks;

  return (
    <main>
      <section className={styles.hero}>
        <div className="container text-center">
          <h1 className={styles.title}>Cake Pops</h1>
          <p className={styles.subtitle}>Moist cake pops coated in smooth chocolate</p>
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
