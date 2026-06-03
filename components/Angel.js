import styles from './Angel.module.css'

const perks = [
  'Direct access to the Founder & CEO',
  'Customised return structures for large investments',
  'Full business plan and financial projections shared on request',
  'CAC Certificate & Tax Clearance available for due diligence',
  'Priority updates on workshop launch and milestones',
]

export default function Angel() {
  return (
    <section className={styles.angel} id="contact">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <span className="section-label">Big Investors</span>
            <h2 className={styles.h2}>Are You an Angel Investor<br />or Corporate Partner?</h2>
            <p className={styles.p}>
              If you're looking to invest ₦1,000,000 or more and want a direct conversation
              with the founder, this section is for you. Let's talk structure, terms, and partnership.
            </p>
            <p className={styles.p}>
              Simply send an email to the founder directly and he will respond within 48 hours
              to discuss your investment and agree on terms.
            </p>
            <div className={styles.perks}>
              {perks.map(p => (
                <div key={p} className={styles.perk}>
                  <div className={styles.perkDot} />
                  <span className={styles.perkText}>{p}</span>
                </div>
              ))}
            </div>
            <a
              href="mailto:greenngsolutionsltd@gmail.com?subject=Angel Investment Inquiry — GreenNG AutoCare&body=Hello Kingsley,%0D%0A%0D%0AI am interested in investing in GreenNG AutoCare.%0D%0A%0D%0AName:%0D%0APhone:%0D%0AInvestment Range:%0D%0AMessage:%0D%0A"
              className="btn-dark"
              style={{ marginTop: '32px', display: 'inline-block' }}
            >
              Send Investment Email →
            </a>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.cardTitle}>Reach the Founder Directly</div>
              <div className={styles.cardSub}>For investments of ₦1,000,000 and above</div>
            </div>
            <div className={styles.contactBlock}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <div>
                  <div className={styles.contactLabel}>Email</div>
                  <a href="mailto:greenngsolutionsltd@gmail.com" className={styles.contactVal}>
                    greenngsolutionsltd@gmail.com
                  </a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <div>
                  <div className={styles.contactLabel}>Phone / WhatsApp</div>
                  <a href="tel:+2348138213053" className={styles.contactVal}>
                    08138213053
                  </a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <div>
                  <div className={styles.contactLabel}>Address</div>
                  <div className={styles.contactVal}>23, Pipeline Road Kubwa, Abuja, Nigeria</div>
                </div>
              </div>
            </div>
            <div className={styles.emailTemplate}>
              <div className={styles.templateTitle}>When emailing, include:</div>
              <ul className={styles.templateList}>
                <li>Your full name</li>
                <li>Phone number</li>
                <li>Investment amount you have in mind</li>
                <li>Any questions or terms you'd like to discuss</li>
              </ul>
            </div>
            <a
              href="mailto:greenngsolutionsltd@gmail.com?subject=Angel Investment Inquiry — GreenNG AutoCare&body=Hello Kingsley,%0D%0A%0D%0AI am interested in investing in GreenNG AutoCare.%0D%0A%0D%0AName:%0D%0APhone:%0D%0AInvestment Range:%0D%0AMessage:%0D%0A"
              className="btn-primary"
              style={{ display: 'block', textAlign: 'center', marginTop: '28px' }}
            >
              Send Email Now →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
