import {useParams} from "react-router-dom";
import {useSearchParams} from "react-router-dom";
import cars from "../data/cars.json";
import styles from "../components/CarCard.module.css";
import extras from "../data/extras.json";
import {useState} from "react";

const typeLabels = { hatchback: "Hatchback", wagon: "Station wagon", mpv: "MPV" };
const tagLabels = { city: "City", compact: "Compact", estate: "Estate", family: "Family" };
const transmissionLabels = {automatic: "Automatic", manual: "Manual" };
const fuelLabels = {petrol: "Petrol", diesel: "Diesel"};




const CarPage = () => {

    const [searchParams] = useSearchParams();
    const [collectDate, setCollectDate] = useState(searchParams.get("from") || "");
    const [returnDate, setReturnDate] = useState(searchParams.get("to") || "");
    const [location, setLocation] = useState(searchParams.get("loc") || "");


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



    const days = Math.round((new Date(returnDate) - new Date(collectDate)) / 86400000);
    const basePrice = days * car.pricePerDay;


    const extrasPrices= selected.map(id => {
            const extra = extras.find(e => e.id === id);
            return extra.perDay ? extra.price * days : extra.price;
        })

    const extrasTotal = extrasPrices.reduce((sum, price) => sum + price, 0);

    let total = basePrice + extrasTotal;






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



            <section className={styles.book} id="book">
                <div className="shell">
                    <form className={styles.card} >

                        <div className={styles.field}>
                            <label htmlFor="loc">Pick up at</label>
                            <select id="loc" value={location} onChange={
                                (e) => setLocation(e.target.value)} >

                                <option value="">Select pick-up location</option>
                                <option value = "podgorica">Podgorica Airport (TGD)</option>
                                <option value = "tivat">Tivat Airport (TIV)</option>
                                <option value = "kotor">Kotor</option>
                                <option value = "budva">Budva</option>
                                <option value = "hercegnovi">Herceg Novi</option>

                            </select>
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="d1">Collect</label>
                            <input id="d1" type="date" min= "2026-09-01" value={collectDate} onChange={
                                (e) => setCollectDate(e.target.value)
                            } />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="d2">Return</label>
                            <input id="d2" type="date" min= "2026-09-01" value={ returnDate } onChange={
                                (e) => setReturnDate(e.target.value)
                            } />
                        </div>

                        <div className={styles.go}>
                            <button className="gold-btn" type="submit">Reserve</button>
                        </div>

                    </form>


                    <p className={styles.note}>
                        <span>▲</span>
                        <span>Norbil begins operating in spring 2027. Reserve now and we confirm your car as soon as the season opens — nothing is charged before then.</span>
                    </p>
                </div>
            </section>





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

            <div>
                <p>{days} days × €{car.pricePerDay} = €{basePrice}</p>
                <p>Extras: €{extrasTotal}</p>
                <p>Total: €{total}</p>
            </div>

        </div>

    )
}

export default CarPage;