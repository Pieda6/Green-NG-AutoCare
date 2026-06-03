import styles from './Budget.module.css'

const items = [
  { cat: '01 · Location',      name: 'Land / Lease',         amount: '₦2,000,000' },
  { cat: '02 · Infrastructure', name: 'Workshop Structure',   amount: '₦3,500,000' },
  { cat: '03 · Tools',          name: 'Equipment & Tools',    amount: '₦2,560,000' },
  { cat: '04 · Stock',          name: 'Initial Inventory',    amount: '₦450,000'   },
  { cat: '05 · People',         name: 'Staff (First 3 Months)', amount: '₦840,000' },
  { cat: '06 · Growth',         name: 'Marketing & Operations', amount: '₦650,000' },
]

export default function Budget() {
  return (
    <section className={styles.budget} id="budget">
      <div className="container">
        <span className="section-label">Transparency</span>
        <h2 className={styles.h2}>Where Your Investment Goes</h2>
        <div className={styles.grid}>
          {items.map(i => (
            <div key={i.cat} className={styles.item}>
              <div className={styles.cat}>{i.cat}</div>
              <div className={styles.name}>{i.name}</div>
              <div className={styles.amount}>{i.amount}</div>
            </div>
          ))}
        </div>
        <div className={styles.total}>
          <span className={styles.totalLabel}>Total Start-Up Cost</span>
          <span className={styles.totalNum}>₦10,000,000</span>
        </div>
      </div>
    </section>
  )
}
