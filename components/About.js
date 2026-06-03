import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imgCol}>
            <div className={styles.imgBox}>
              <img
                src="/images/about-workshop.jpg"
                alt="GreenNG AutoCare Workshop"
                className={styles.img}
              />
              <div className={styles.imgFallback}>
                <span>🔧</span>
                <small>Add your workshop photo to /public/images/about-workshop.jpg</small>
              </div>
            </div>
            <div className={styles.credCard}>
              <span className={styles.credIcon}>✦</span>
              <div>
                <div className={styles.credTitle}>CAC Registered</div>
                <div className={styles.credSub}>RC No. 7218904 · Nov 2023</div>
              </div>
            </div>
          </div>

          <div className={styles.textCol}>
            <span className="section-label">Who We Are</span>
            <h2 className={styles.h2}>Building a Workshop<br />Nigeria Can Trust</h2>
            <p className={styles.p}>
              GreenNG AutoCare (GNA) is the automotive arm of GreenNG Solutions Ltd —
              a registered Nigerian company driven by a mission to deliver world-class
              auto services in Port Harcourt.
            </p>
            <p className={styles.p}>
              We are not just a repair shop. We are a full-service automotive ecosystem
              covering diagnostics, vehicle conversion, fleet consulting, and premium
              vehicle care products — all under one roof.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>₦10M</span>
                <span className={styles.statLbl}>Startup Budget</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>3</span>
                <span className={styles.statLbl}>Revenue Streams</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>PHC</span>
                <span className={styles.statLbl}>Port Harcourt</span>
              </div>
            </div>
            <blockquote className={styles.quote}>
              "Our mission is driven by a passion to create value and empower communities."
              <cite>— Kingsley Owenkpa, Founder & CEO</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
