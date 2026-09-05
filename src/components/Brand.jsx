
import styles from "./Brand.module.css"
import {Link} from "react-router-dom";

const Brand = () => (
    <Link className={styles.brand} to="/">
        <span className={styles.plate}>MNE</span>
        <span className={styles.word}>NORBIL</span>
    </Link>
);

export default Brand;