import styles from './Invest.module.css'

const plans = [
  {
    freq: 'Monthly Returns',
    amount: '₦166,667',
    period: 'per month · 36 payments',
    details: ['Total return: ₦6,000,000', 'Per ₦1M invested: ~₦8,333/month', 'Principal returned after 3 years'],
    featured: false,
  },
  {
    freq: 'Quarterly Returns',
    amount: '₦500,000',
    period: 'per quarter · 12 payments',
    details: ['Total return: ₦6,000,000', 'Per ₦1M invested: ₦25,000/quarter', 'Principal returned after 3 years'],
    featured: true,
  },
  {
    freq: 'Yearly Returns',
    amount: '₦2,000,000',
    period: 'per year · 3 payments',
    details: ['Total return: ₦6,000,000', 'Per ₦1M invested: ₦100,000/year', 'Principal returned after 3 years'],
    featured: false,
  },
]

export default function Invest() {
  return (
    <section className={styles.invest} id="invest">
      <div className="container">
        <div className={styles.head}>
          <span className="section-label">Investment Opportunity</span>
          <h2 className={styles.h2}>₦50,000,000 Funding Target.<br />30% Return Over 3 Years.</h2>
          <p className={styles.sub}>Choose how you receive your returns. Your principal is fully returned at the end of 3 years.</p>
        </div>

        <div className={styles.grid}>
          {plans.map(p => (
            <div key={p.freq} className={`${styles.card} ${p.featured ? styles.featured : ''}`}>
              {p.featured && <div className={styles.featuredBadge}>Most Popular</div>}
              <div className={styles.freq}>{p.freq}</div>
              <div className={styles.amount}>{p.amount}</div>
              <div className={styles.period}>{p.period}</div>
              <div className={styles.divider} />
              <ul className={styles.details}>
                {p.details.map(d => <li key={d}>{d}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Crowdfunding strip */}
        <div className={styles.crowd}>
          <div className={styles.crowdText}>
            <span className="section-label">For Everyone</span>
            <h3 className={styles.crowdH3}>Invest Any Amount — No Minimum</h3>
            <p className={styles.crowdDesc}>
              Even if you only have ₦2,000 to spare, you can be part of this story.
              Use our OnCrowdr campaign to invest any amount. Enter your name and email
              so we can reach you with updates and return payments.
            </p>
            <div className={styles.pills}>
              {['₦2,000', '₦5,000', '₦10,000', '₦50,000', 'Any amount'].map(a => (
                <span key={a} className={styles.pill}>{a}</span>
              ))}
            </div>
            <a
              href="https://www.oncrowdr.com/explore/c/greenng-auto-care-fundraising"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Contribute on OnCrowdr →
            </a>
          </div>
          <div className={styles.crowdNote}>
            <div className={styles.crowdNoteIcon}>🤝</div>
            <p>Make sure to include your <strong>full name</strong> and <strong>email address</strong> when contributing so we can contact you about your returns.</p>
          </div>
        </div>

        <p className={styles.footnote}>* Returns subject to agreed terms and conditions. Contact us for full investor agreement.</p>
      </div>
    </section>
  )
}
