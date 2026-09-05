import { useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";
import cars from "../data/cars.json";
import extras from "../data/extras.json";
import styles from "./CarPage.module.css";

const tagLabels = { city: "City", compact: "Compact", estate: "Estate", family: "Family" };
const transmissionLabels = { automatic: "Automatic", manual: "Manual" };
const fuelLabels = { petrol: "Petrol", diesel: "Diesel" };

const CarPage = () => {
    const [searchParams] = useSearchParams();
    const { id } = useParams();
    const car = cars.find(c => c.id === id);

    const [location, setLocation] = useState(searchParams.get("loc") || "");
    const [collectDate, setCollectDate] = useState(searchParams.get("from") || "");
    const [returnDate, setReturnDate] = useState(searchParams.get("to") || "");
    const [selected, setSelected] = useState([]);

    const toggleExtras = (extraId) => {
        if (selected.includes(extraId)) {
            setSelected(selected.filter(e => e !== extraId));
        } else {
            setSelected([...selected, extraId]);
        }
    };

    if (!car) {
        return <p>Car not found.</p>;
    }

    const days = Math.round((new Date(returnDate) - new Date(collectDate)) / 86400000) || 0;
    const basePrice = days * car.pricePerDay;

    const extrasPrices = selected.map(extraId => {
        const extra = extras.find(e => e.id === extraId);
        return extra.perDay ? extra.price * days : extra.price;
    });

    const extrasTotal = extrasPrices.reduce((sum, price) => sum + price, 0);
    const total = basePrice + extrasTotal;

    return (
        <div className={styles.page}>

            <div className={styles.hero}>
                <img src={car.heroImage} alt={car.name} />
            </div>

            <div className={`shell ${styles.grid}`}>

                <div>
                    <span className={styles.tag}>{tagLabels[car.tag]}</span>
                    <h1 className={styles.name}>{car.name}</h1>
                    <span className={styles.year}>{car.year}</span>

                    <div className={styles.spec}>
                        {fuelLabels[car.fuel]} · {transmissionLabels[car.transmission]}<br />
                        {car.seats} seats · {car.bags} bags{car.ac && " · A/C"}
                    </div>

                    <p className={styles.note}>{car.note}</p>
                </div>

                <div className={styles.panel}>
                    <p className={styles.panelTitle}>Your booking</p>

                    <div className={styles.field}>
                        <label htmlFor="loc">Pick up at</label>
                        <select id="loc" value={location} onChange={(e) => setLocation(e.target.value)}>
                            <option value="">Select pick-up location</option>
                            <option value="podgorica">Podgorica Airport (TGD)</option>
                            <option value="tivat">Tivat Airport (TIV)</option>
                            <option value="kotor">Kotor</option>
                            <option value="budva">Budva</option>
                            <option value="hercegnovi">Herceg Novi</option>
                        </select>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="d1">Collect</label>
                        <input id="d1" type="date" min="2026-09-01" value={collectDate}
                               onChange={(e) => setCollectDate(e.target.value)} />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="d2">Return</label>
                        <input id="d2" type="date" min="2026-09-01" value={returnDate}
                               onChange={(e) => setReturnDate(e.target.value)} />
                    </div>

                    <div className={styles.extras}>
                        {extras.map(extra => (
                            <div className={styles.extra} key={extra.id}>
                                <label htmlFor={extra.id}>{extra.name}</label>
                                <span>€{extra.price}{extra.perDay && " / day"}</span>
                                <input
                                    type="checkbox"
                                    id={extra.id}
                                    checked={selected.includes(extra.id)}
                                    onChange={() => toggleExtras(extra.id)}
                                />
                            </div>
                        ))}
                    </div>

                    <div className={styles.total}>
                        <div className={styles.line}>
                            <span>{days} days × €{car.pricePerDay}</span>
                            <span>€{basePrice}</span>
                        </div>
                        <div className={styles.line}>
                            <span>Extras</span>
                            <span>€{extrasTotal}</span>
                        </div>
                        <div className={styles.grand}>
                            <em>Total</em>
                            <strong>€{total}</strong>
                        </div>
                    </div>

                    <p className={styles.hint}>
                        <span>▲</span>
                        <span>Norbil begins operating in spring 2027. Nothing is charged before then.</span>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default CarPage;