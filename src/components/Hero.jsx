

import styles from "./Hero.module.css"

const Hero = () => {
    return (
        <section className={styles.hero}>
          <div className="shell">
              <div className={styles.in}>
                  <p className={styles.tagline}>Norsk bil. Crnogorski put.</p>
                  <h1><em><b>Small fleet.</b></em>
                      <em><b>Big roads.</b></em>
                  </h1>
                  <p className={styles.gloss}>Norwegian standards. Montenegrin roads. That's the whole idea behind the name.</p>
                  <p className={styles.lead}>Cars picked for the roads here — old towns, family trips, mountain climbs, and everything in between. Written terms, one price, nothing added at the counter.</p>
                  <div className={styles.meta}>
                      <span>Tivat TIV · Podgorica TGD</span>
                      <span>Diesel today, electric by 2030</span>
                      <span>Founded 2026 · driving from spring 2027</span>
                  </div>

              </div>
          </div>

        </section>
    )
}

export default Hero