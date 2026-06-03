import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <span className={styles.logoMain}>GreenNG AutoCare</span>
            <span className={styles.logoSub}>…Driven by Trust</span>
            <p className={styles.tagline}>
              A subsidiary of GreenNG Solutions Ltd. Full-service auto care,
              fleet management, and vehicle solutions in Port Harcourt, Nigeria.
            </p>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Quick Links</div>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#opportunity">Market</a></li>
              <li><a href="#invest">Invest</a></li>
              <li><a href="#contact">Angel Investors</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Contact</div>
            <div className={styles.contactItem}>
              <span>📍</span>
              <span>23, Pipeline Road Kubwa, Abuja, Nigeria</span>
            </div>
            <div className={styles.contactItem}>
              <span>📞</span>
              <a href="tel:+2348138213053">08138213053</a>
            </div>
            <div className={styles.contactItem}>
              <span>✉️</span>
              <a href="mailto:greenngsolutionsltd@gmail.com">greenngsolutionsltd@gmail.com</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>© 2025 GreenNG Solutions Ltd. All rights reserved.</span>
          <span className={styles.rc}>RC No. 7218904 · FIRS Tax Cleared 2024</span>
        </div>
      </div>
    </footer>
  )
}
