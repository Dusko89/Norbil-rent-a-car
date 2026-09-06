
import styles from "./Footer.module.css"
import Brand from "./Brand.jsx";


const  Footer =  () => {
    return (
        <footer className={styles.ft}>
            <div className="shell">

                <div className={styles.grid}>
                    <div>
                    <Brand/>
                        <p className={styles.tag}>
                            Norsk bil. Crnogorski put.<br />
                            Car rental in Montenegro.
                        </p>
                </div>

                <div>
                    <h4>Pick-up points</h4>
                    <ul>
                        <li>Tivat Airport (TIV)</li>
                        <li>Podgorica Airport (TGD)</li>
                        <li>Kotor</li>
                        <li>Budva</li>
                        <li>Herceg Novi</li>
                    </ul>
                </div>

                <div>
                    <h4>Before you drive</h4>
                    <ul>
                        <li> <a href="#fleet">Fleet</a></li>
                        <li> <a href="#terms">Terms and Deposit</a></li>
                        <li> <a href="#border">Crossing the border</a></li>
                        <li> <a href="#electric">Electric roadmap</a></li>
                    </ul>

                </div>

                <div>
                    <h4>Contact</h4>
                    <ul>
                        <li>hei@norbil.me</li>
                        <li>+382 —</li>
                        <li>ME · EN · NO · RU</li>
                    </ul>
                </div>

                </div>

                <div className={styles.base}>
                    <span>Norbil d.o.o. — founded 1 July 2026, Zeta. Operations begin spring 2027.</span>
                    <span>Terms · Privacy · Cancellation</span>
                </div>

            </div>
        </footer>
    )
}

export default Footer;