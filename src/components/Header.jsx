
import styles from "./Header.module.css";


const Header = () => {
   return (
           <header className={styles.hdr}>
               <div className="shell">
                   <a className={styles.brand} href="#top">
                       <span className={styles.plate}>MNE</span>
                       <span className={styles.word}>NORBIL</span>
                   </a>

                   <nav className={styles.nav}>
                       <a href="#fleet">Fleet</a>
                       <a href="#distances">Distances</a>
                       <a href="#electric">Electric</a>
                       <a href="#faq">FAQ</a>
                   </nav>

                   <div className={styles.langs}>
                       <button>ME</button>
                       <button>EN</button>
                       <button>NO</button>
                       <button>RU</button>
                   </div>


                   <a className="gold-btn" href="#book">Reserve</a>


               </div>
           </header>
       )

}


export default Header;