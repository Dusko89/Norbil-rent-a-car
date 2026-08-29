
import styles from "./Brand.module.css"


const Brand = () => (
    <a className={styles.brand} href="#top">
        <span className={styles.plate}>MNE</span>
        <span className={styles.word}>NORBIL</span>
    </a>
);

export default Brand;