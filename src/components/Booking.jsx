import styles from "./Booking.module.css";
import { useState } from "react";
import {useSearchParams} from "react-router-dom";

const locationLabels = {
    podgorica: "Podgorica Airport (TGD)",
    tivat: "Tivat Airport (TIV)",
    kotor: "Kotor",
    budva: "Budva",
    hercegnovi: "Herceg Novi"
};






const Booking = () => {
    const [location, setLocation] = useState("");
    const [collectDate, setCollectDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [message, setMessage] = useState("");
    const [searchParams, setSearchParams] = useSearchParams()



    const handleSubmit = (e) => {

        e.preventDefault();
        if (!location) {
            setMessage("Choose pick-up location!");
            return;
        }

        if (!collectDate || !returnDate) {
            setMessage("Choose both dates!");
            return;
        }

        if (returnDate <= collectDate) {
            setMessage("Select different return date!");
            return;
        }


        const days = Math.round((new Date(returnDate) - new Date(collectDate)) / 86400000);
        setMessage(`${days} days from ${locationLabels[location]}. Pick a car below.`);
        setSearchParams({from: collectDate, to: returnDate, loc: location})
        document.getElementById("fleet").scrollIntoView({behavior: "smooth"});


    }




    return (
        <section className={styles.book} id="book">
            <div className="shell">
                <form className={styles.card} onSubmit={handleSubmit}>

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
                        <button className="gold-btn" type="submit">Search cars</button>
                    </div>

                </form>
                {message && <div className={styles.msg} aria-live="polite">{message}</div>}

                <p className={styles.note}>
                    <span>▲</span>
                    <span>Norbil begins operating in spring 2027. Reserve now and we confirm your car as soon as the season opens — nothing is charged before then.</span>
                </p>
            </div>
        </section>
    );
};

export default Booking;