

import styles from "./Electric.module.css"

const Electric = () => {

    return (
        <section className={styles.el} id="electric">

            <div className={`shell ${styles.grid}`}>

                <div>
                    <p className="eyebrow on on-sage">Where this is going</p>
                    <h2 className="h2">
                        Diesel today.
                        <br/>
                        Electric by 2030.
                    </h2>
                    <p className="lede">We are not green today. But we have a plan with dates on it — and you can hold
                        us to it.</p>

                    <div className={styles.bar}>
                    <span>Fleet transition</span>
                    <div></div>
                    <span>2030</span>
                </div>
                </div>





                  <div className={styles.tl}>

                      <div  className={styles.row}>
                          <span className={styles.yr}>2027</span>
                          <div>
                              <h3>Operations begin</h3>
                              <p>Small, efficient engines and full service records for every car. The most economical thing we can offer today is a car that isn't oversized.</p>
                          </div>
                      </div>



                      <div  className={styles.row}>
                          <span className={styles.yr}>2028</span>
                          <div>
                              <h3>First electric cars</h3>
                              <p>Two EVs based at Tivat, for coastal trips under 200 km a day, with a charging map handed over with the keys.</p>
                          </div>
                      </div>



                      <div  className={styles.row}>
                          <span className={styles.yr}>2030</span>
                          <div>
                              <h3>Fully electric</h3>
                              <p>Every car in the fleet electric, with charging at both airports and each pick-up point. Diesel stays only where the mountain routes still demand it.</p>
                          </div>
                      </div>


                  </div>





            </div>
        </section>

    )
}


export default Electric;