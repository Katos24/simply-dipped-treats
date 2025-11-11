'use client';

import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import Link from 'next/link';
import CartDrawer from '@/components/CartDrawer';
import styles from './Header.module.css';

export default function Header() {
  const { cartCount } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className="container mx-auto px-4 py-6">
          <div className={styles.headerContent}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIcon}>🍫</span>
              <span className={styles.logoText}>Simply Dipped</span>
            </Link>
            <nav className={styles.nav}>
              <Link href="/treats" className={styles.navLink}>Shop</Link>
              <Link href="/spanakopita" className={styles.navLink}>Spanakopita</Link>
              <a href="#contact" className={styles.navLink}>Contact</a>
              <button 
                onClick={() => setCartOpen(true)}
                className={styles.cartButton}
              >
                <span className={styles.cartIcon}>🛒</span>
                <span className={styles.cartText}>Cart</span>
                {cartCount > 0 && (
                  <span className={styles.cartBadge}>{cartCount}</span>
                )}
              </button>
            </nav>
          </div>
        </div>
      </header>
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
