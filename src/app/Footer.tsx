import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Simply Dipped Treats</h3>
            <p>Handcrafted desserts and authentic Greek food made with love in Holbrook, NY.</p>
          </div>

          <div className={styles.footerSection}>
            <h3>Contact</h3>
            <a href="mailto:simplydipped24@gmail.com">simplydipped24@gmail.com</a>
            <a href="tel:5551234567">(555) 123-4567</a>
            <p>Holbrook, NY 11741</p>
          </div>

          <div className={styles.footerSection}>
            <h3>Hours</h3>
            <p>Orders: Monday - Wednesday</p>
            <p>Pickup: Saturday 10am - 2pm</p>
            <p>Made fresh to order</p>
          </div>

          <div className={styles.footerSection}>
            <h3>Follow Us</h3>
            <div className={styles.socialLinks}>
              <a href="https://www.instagram.com/simply_dippedtreats/" className={styles.socialLink} aria-label="Instagram">📷</a>
              <a href="https://www.facebook.com/profile.php?id=61580365975274" className={styles.socialLink} aria-label="Facebook">👍</a>
              <a href="#" className={styles.socialLink} aria-label="Email">📧</a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Simply Dipped Treats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
