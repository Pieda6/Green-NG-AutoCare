import styles from './Services.module.css'

const services = [
  {
    num: '01',
    icon: '🔧',
    title: 'Full-Service Workshop',
    desc: 'Repairs, diagnostics, vehicle conversion, and routine maintenance handled by skilled mechanics with professional-grade tools.',
    tags: ['Engine Repair', 'Diagnostics', 'Vehicle Conversion', 'Maintenance'],
    img: '/images/service-workshop.jpg',
  },
  {
    num: '02',
    icon: '🚛',
    title: 'Fleet Management Consulting',
    desc: 'Retainerships and corporate contracts for businesses with vehicle fleets — logistics, oil & gas, and government agencies.',
    tags: ['Fleet Retainerships', 'Corporate Contracts', 'Driver Training'],
    img: '/images/service-fleet.jpg',
  },
  {
    num: '03',
    icon: '🛢️',
    title: 'Vehicle Care Products',
    desc: 'High-quality lubricants, engine oils, coolants, and consumables sourced for peak vehicle performance.',
    tags: ['Engine Oils', 'Lubricants', 'Coolants', 'Additives'],
    img: '/images/service-products.jpg',
  },
]

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.watermark}>AUTOCARE</div>
      <div className="container">
        <div className={styles.head}>
          <span className="section-label">What We Offer</span>
          <h2 className={styles.h2}>Three Revenue Streams,<br />One Trusted Workshop</h2>
        </div>
        <div className={styles.grid}>
          {services.map(s => (
            <div key={s.num} className={styles.card}>
              <div className={styles.cardImg} style={{ backgroundImage: `url('${s.img}')` }}>
                <div className={styles.cardOverlay} />
                <span className={styles.cardIcon}>{s.icon}</span>
                <span className={styles.cardNum}>{s.num}</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
                <div className={styles.tags}>
                  {s.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
