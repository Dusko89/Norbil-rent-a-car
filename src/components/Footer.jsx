

import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import Brand from "./Brand.jsx";

const Footer = () => {
    return (
        <footer className={styles.ft}>
            <div className="shell">

                <div className={styles.grid}>
                    <div>
                        <Brand />
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
                            <li><a href="/#fleet">Fleet</a></li>
                            <li><a href="/#electric">Electric roadmap</a></li>
                            <li><a href="/#faq">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="mailto:booking@norbil.me">booking@norbil.me</a></li>
                            <li><a href="tel:+38267961062">+382 67 961 062</a></li>
                            <li>ME · EN · NO</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.base}>
                    <span>Norbil d.o.o. — founded 1 July 2026, Zeta. Operations begin spring 2027.</span>
                    <span className={styles.legal}>
                        <Link to="/terms">Terms</Link>
                        <Link to="/privacy">Privacy</Link>
                    </span>
                </div>

                <p className={styles.cookie}>
                    This website does not use advertising or analytics cookies. Limited technical data
                    may be processed by our hosting and form providers for security and service delivery.
                </p>

            </div>
        </footer>
    );
};

export default Footer;