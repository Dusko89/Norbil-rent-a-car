
import styles from "./Distances.module.css";
import distances from "../data/distances.json"

const Distances = () => {

    return (
        <section className={styles.dist} id="distances">
            <div className={`shell ${styles.grid}`}>

             <div>
                 <p className="eyebrow">The country is small</p>
                 <h2 className="h2">The whole country<br/>
                     is a day trip.</h2>
                 <p className="lede">Montenegro is 13 812 km². From the car park at Tivat airport you can be on the Adriatic, inside a canyon, or above a glacial lake before lunch. That is the reason to rent a car here rather than buy tours.</p>
             </div>



            <div>

                <div className={styles.board}>
                    <div className={styles.head}>
                        <span>From Tivat airport</span>
                        <span>Distance</span>
                        <span>Drive</span>
                    </div>


                    {distances.map(distance => (
                        <div className={styles.row} key={distance.name}>
                            <div>
                                <b>{distance.name}</b>
                                <i>{distance.note}</i>
                            </div>
                            <span>{distance.km} km</span>
                            <span>{distance.time}</span>
                        </div>
                    ))}

                    <p className={styles.foot}>Approximate, in normal traffic. July and August on the coast road add time — the Kamenari–Lepetane ferry saves roughly half an hour toward Herceg Novi.</p>

                </div>


            </div>

            </div>
        </section>
    )

}



export default Distances;

