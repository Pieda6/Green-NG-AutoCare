import styles from './Budget.module.css'

export default function Budget() {
  return (
    <section className={styles.budget} id="budget">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className="section-label">Funding Target</span>
            <h2 className={styles.h2}>We Are Raising<br />₦50,000,000</h2>
            <p className={styles.p}>
              This is the total amount needed to launch GreenNG AutoCare in
              Port Harcourt — covering the workshop, equipment, staffing, and
              first months of operations.
            </p>
            <div className={styles.actions}>
              <a
                href="https://www.oncrowdr.com/explore/c/greenng-auto-care-fundraising"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Contribute Now →
              </a>
              <a href="#contact" className="btn-dark">Talk to the Founder</a>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.amountCard}>
              <div className={styles.amountLabel}>Total Raise</div>
              <div className={styles.amountNum}>₦50M</div>
              <div className={styles.amountSub}>One-time funding target</div>
              <div className={styles.amountDivider} />
              <div className={styles.amountDetail}>30% return over 3 years</div>
              <div className={styles.amountDetail}>Principal returned after 3 years</div>
              <div className={styles.amountDetail}>Open to all investors — any amount</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
