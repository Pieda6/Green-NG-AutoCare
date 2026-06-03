import styles from './Market.module.css'

const reasons = [
  { icon: '🏙️', title: 'High Vehicle Density', desc: 'Major commercial hub with thousands of daily commuters and commercial vehicles needing regular servicing.' },
  { icon: '🏢', title: 'Corporate Fleet Demand', desc: 'Growing oil & gas, logistics, and corporate sectors with fleets needing reliable management partners.' },
  { icon: '⚡', title: 'Gap in Professional Services', desc: 'Strong demand for a structured, trustworthy workshop offering diagnostics and modern auto care.' },
]

const targets = [
  { title: 'Individual Vehicle Owners', desc: 'Private car owners seeking quality repairs and maintenance they can trust.' },
  { title: 'Corporate Clients', desc: 'Companies with vehicle fleets needing retainerships and bulk service contracts.' },
  { title: 'High-Value Vehicle Owners', desc: 'Clients with luxury or specialised vehicles requiring expert diagnostics.' },
  { title: 'Oil & Gas Sector', desc: 'Logistics and energy companies in Port Harcourt needing fleet management partners.' },
]

export default function Market() {
  return (
    <section className={styles.market} id="opportunity">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <span className="section-label">Market Opportunity</span>
            <h2 className={styles.h2}>Why Port Harcourt<br />is the Right Market</h2>
            <p className={styles.p}>Port Harcourt is Nigeria's oil capital — a densely populated commercial hub with one of the highest vehicle densities in the country and strong demand for professional automotive services.</p>
            <div className={styles.reasons}>
              {reasons.map(r => (
                <div key={r.title} className={styles.reason}>
                  <span className={styles.reasonIcon}>{r.icon}</span>
                  <div>
                    <div className={styles.reasonTitle}>{r.title}</div>
                    <div className={styles.reasonDesc}>{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="section-label">Target Clients</span>
            <h2 className={styles.h2} style={{ marginBottom: '28px' }}>Who We Serve</h2>
            <div className={styles.targets}>
              {targets.map(t => (
                <div key={t.title} className={styles.targetCard}>
                  <div className={styles.targetTitle}>{t.title}</div>
                  <div className={styles.targetDesc}>{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
