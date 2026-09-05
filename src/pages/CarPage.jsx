import {useParams} from "react-router-dom";
import cars from "../data/cars.json";
import styles from "../components/CarCard.module.css";
import extras from "../data/extras.json";
import {useState} from "react";

const typeLabels = { hatchback: "Hatchback", wagon: "Station wagon", mpv: "MPV" };
const tagLabels = { city: "City", compact: "Compact", estate: "Estate", family: "Family" };
const transmissionLabels = {automatic: "Automatic", manual: "Manual" };
const fuelLabels = {petrol: "Petrol", diesel: "Diesel"};




const CarPage = () => {
    const {id} = useParams()
    const car = cars.find(c => c.id === id)

    const [selected, setSelected] = useState([]);

    const toggleExtras = (id) => {
        if (selected.includes(id)){
            setSelected(selected.filter(e => e !== id));
        }
        else{
            setSelected([...selected, id])
        }
    }

    if (!car) {
        return <p>Car not found.</p>;
    }

    return (
        <div>

            <div>
                <img src={car.heroImage} alt={car.name} />
            </div>

            <div>
                <div className={styles.body}>
                    <span className={styles.tag}>{tagLabels[car.tag]}</span>
                    <h1 className={styles.name}>{car.name}</h1>
                    <span className={styles.year}>{car.year}</span>

                    <div>
                        {fuelLabels[car.fuel]} · {transmissionLabels[car.transmission]}<br />
                        {car.seats} seats · {car.bags} bags
                        {car.ac && <span> · A/C </span>}
                    </div>

                    <p className={styles.note}>{car.note}</p>
                </div>
            </div>

            {extras.map(extra => (
                <div key={extra.id}>

                    <label htmlFor={extra.id}>
                        {extra.name} — €{extra.price}{extra.perDay && " / day"}
                    </label>

                    <input
                        type="checkbox"
                        id={extra.id}
                        checked={selected.includes(extra.id)}
                        onChange={() => toggleExtras(extra.id)}
                    />

                </div>

            ))
            }
        </div>

    )
}

export default CarPage;