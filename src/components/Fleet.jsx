
import FleetGrid from "./FleetGrid.jsx";
import styles from "./Fleet.module.css"


const Fleet = () => {
    return(

        <section className={styles.fleet}>
            <div className="shell">
                <p className="eyebrow">Our fleet</p>
                <h2 className="h2">Chosen for these roads</h2>
                <p className="lede">Small, economical and suited to the driving here: narrow old-town lanes on the coast, long climbs inland.</p>


                <FleetGrid/>


                    <div className={styles.partner}>
                        <div className={styles.partnerLabel}>Partner fleet</div>
                        <p>Need something we don't have — a van, an SUV, or any car in peak August? We arrange it through partner fleets in Tivat and Podgorica.</p>
                    </div>

            </div>



        </section>
    )
}

export default Fleet;