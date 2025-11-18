'use client';

import { useCart } from '@/context/CartContext';
import { useState, lazy, Suspense } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const CartDrawer = lazy(() => import('@/components/CartDrawer'));

export default function Header() {
  const { cartCount } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={styles.header}>
        <div className="container mx-auto px-4 py-4">
          <div className={styles.headerContent}>
            <Link href="/" className={styles.logo} onClick={closeMenu}>
              <span className={styles.logoText}>Simply Dipped</span>
            </Link>

            {/* Desktop Nav */}
            <nav className={styles.desktopNav}>
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

            {/* Mobile Nav */}
            <div className={styles.mobileControls}>
              <button 
                onClick={() => setCartOpen(true)}
                className={styles.mobileCartButton}
              >
                <span className={styles.cartIcon}>🛒</span>
                {cartCount > 0 && (
                  <span className={styles.mobileCartBadge}>{cartCount}</span>
                )}
              </button>
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className={styles.hamburger}
                aria-label="Toggle menu"
              >
                <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineOpen : ''}`}></span>
                <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineOpen : ''}`}></span>
                <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineOpen : ''}`}></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className={styles.mobileMenu}>
            <Link href="/treats" className={styles.mobileNavLink} onClick={closeMenu}>
              Shop
            </Link>
            <Link href="/spanakopita" className={styles.mobileNavLink} onClick={closeMenu}>
              Spanakopita
            </Link>
            <a href="#contact" className={styles.mobileNavLink} onClick={closeMenu}>
              Contact
            </a>
          </div>
        )}
      </header>
      {cartOpen && (
        <Suspense fallback={null}>
          <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        </Suspense>
      )}
    </>
  );
}
