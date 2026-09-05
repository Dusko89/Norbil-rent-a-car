import styles from "./CarCard.module.css";
import {Link} from "react-router-dom";


const typeLabels = { hatchback: "Hatchback", wagon: "Station wagon", mpv: "MPV" };
const tagLabels = { city: "City", compact: "Compact", estate: "Estate", family: "Family" };
const transmissionLabels = {automatic: "Automatic", manual: "Manual" };
const fuelLabels = {petrol: "Petrol", diesel: "Diesel"};


const CarCard = ({ car }) => {
    return (
        <Link className={styles.card} to={`/vozila/${car.id}`}>
            <div className={styles.visual}>
                <img src={car.image} alt={car.name} loading="lazy" />
            </div>

            <div className={styles.body}>
                <span className={styles.tag}>{tagLabels[car.tag]}</span>
                <h3 className={styles.name}>{car.name}</h3>
                <span className={styles.year}>{car.year}</span>
                <div className={styles.spec}>
                    {fuelLabels[car.fuel]} · {transmissionLabels[car.transmission]}<br />
                    {car.seats} seats · {car.bags} bags{car.ac && <span> · A/C</span>}
                </div>
                <p className={styles.note}>{car.note}</p>
                <div className={styles.price}>
                    <em>From</em>
                    <span><strong>€{car.pricePerDay}</strong> <em>/ day</em></span>
                </div>
            </div>
        </Link>
    );
};

export default CarCard;