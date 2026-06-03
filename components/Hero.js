import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.bg} />
      <div className={styles.overlay} />
      <div className={styles.pattern} />
      <div className={styles.accentTop} />
      <div className={styles.accentBottom} />
      <div className={styles.watermark}>GNA</div>

      <div className={`container ${styles.content}`}>
        <div className={`${styles.badge} animate-fadeUp-delay-1`}>
          <span>Port Harcourt, Nigeria</span>
          <span className={styles.dot} />
          <span>Est. 2023</span>
        </div>

        <h1 className={`${styles.h1} animate-fadeUp-delay-2`}>
          The Auto Workshop<br />
          <em>Port Harcourt</em><br />
          Has Been Waiting For
        </h1>

        <p className={`${styles.sub} animate-fadeUp-delay-3`}>
          GreenNG AutoCare is a full-service automotive workshop offering repairs,
          diagnostics, fleet management & vehicle care — now seeking investors to
          power its launch.
        </p>

        <div className={`${styles.ctas} animate-fadeUp-delay-4`}>
          <a href="#invest" className="btn-primary">View Investment Plan</a>
          <a href="#contact" className="btn-outline">Talk to the Founder</a>
        </div>

        <div className={`${styles.trust} animate-fadeUp-delay-5`}>
          <div className={styles.trustItem}>
            <span className={styles.trustNum}>RC</span>
            <span className={styles.trustLabel}>7218904 · CAC Registered</span>
          </div>
          <div className={styles.trustSep} />
          <div className={styles.trustItem}>
            <span className={styles.trustNum}>FIRS</span>
            <span className={styles.trustLabel}>Tax Cleared 2024</span>
          </div>
          <div className={styles.trustSep} />
          <div className={styles.trustItem}>
            <span className={styles.trustNum}>30%</span>
            <span className={styles.trustLabel}>Return over 3 years</span>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
