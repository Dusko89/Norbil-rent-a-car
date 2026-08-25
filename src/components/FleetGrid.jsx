
import cars from "../data/cars.json"
import CarCard from "../components/CarCard.jsx"
import styles from "./FleetGrid.module.css"

const FleetGrid = () => {
    return (
        <div className={styles.grid}>

            {cars.map(auto => <CarCard key={auto.id} car={auto} />)}


        </div>

    )

}

export default FleetGrid