

import styles from "./Standard.module.css";

const Standard = () => {
    return (
        <section className={styles.std}>
            <div className="shell">
                <div>
                    <p className="eyebrow on-dark">Norsk standard</p>
                   <h2 className="h2">A new company, so everything <br/>is written down.</h2>
                    <p className="lede on-dark">Norbil has no reviews yet, and we would rather show you the terms than invent five stars. Here is what the Norwegian half of the name is supposed to mean in practice.</p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.item}>
                        <h3>The price you were shown</h3>
                        <p>One number, taxes included, identical on the screen and on the contract.</p>
                    </div>

                    <div className={styles.item}>
                        <h3>In writing before you pay</h3>
                        <p>Deposit, excess and fuel policy arrive in the booking email, not at the counter.</p>
                    </div>

                    <div className={styles.item}>
                        <h3>Serviced on schedule</h3>
                        <p>Manufacturer intervals, records kept, and the mileage of each car stated openly.</p>
                    </div>

                    <div className={styles.item}>
                        <h3>Answers in your language</h3>
                        <p>Montenegrin, English, Norwegian and Russian — from the people who own the cars.</p>
                    </div>

                </div>







            </div>
        </section>
    )
}

export default Standard;