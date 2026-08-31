

import styles from "./Faq.module.css"

const Faq = () => {
    return(
        <section className={styles.faq} id="faq">
            <div className="shell">


                <div className={styles.grid}>

                    <div>
                        <p className="eyebrow">Before you book</p>
                        <h2 className="h2">The questions<br/>everyone asks.</h2>
                        <p className="lede">Marked items are still being finalised before bookings open. They will be answered with a number, not a phrase.</p>
                    </div>



                    <div className={styles.qa}>

                        <div className={styles.row}>
                            <h3>Can I drive into Albania, Bosnia or Croatia?</h3>
                            <p>
                                <span>Yes, with a green card arranged in advance — tell us at booking. Cross-border fee: </span>
                                <span className={styles.todo}>amount</span>
                            </p>

                        </div>
                        <div className={styles.row}>
                            <h3>Is there a deposit?</h3>
                            <p>
                                <span className={styles.todo}>amount </span>
                                <span>— stated in the contract and returned at drop-off, provided the car comes back as it left.</span>
                            </p>

                        </div>

                        <div className={styles.row}>
                            <h3>What licence do I need?</h3>
                            <p>Held for at least two years, and the driver must be 21 or over. Non-EU licences: bring an international permit alongside your own.</p>

                        </div>
                        <div className={styles.row}>
                            <h3>How and when do I pay?</h3>
                            <p>Nothing when you reserve. Card or cash at pick-up, against a contract you have already read.</p>

                        </div>

                        <div className={styles.row}>
                            <h3>What about fuel?</h3>
                            <p>Full to full. Refuel near the return point and there is nothing left to settle.</p>


                        </div>
                    </div>
                </div>



            </div>

        </section>
    )
}

export default Faq;