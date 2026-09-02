
import styles from "./Header.module.css";
import Brand from   "./Brand.jsx";
import {useState} from "react";




const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

   return (

           <header className={styles.hdr}>
               <div className="shell">
                   <Brand/>

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

                   <button className={styles.menuBtn} onClick={() => {setMenuOpen(!menuOpen)}}>Menu</button>
                       {menuOpen &&
                           <div className={styles.panel}>
                               <a href="#fleet">Fleet</a>
                               <a href="#distances">Distances</a>
                               <a href="#electric">Electric</a>
                               <a href="#faq">FAQ</a>

                               <div className={styles.panelLangs}>
                                   <button>ME</button>
                                   <button>EN</button>
                                   <button>NO</button>
                                   <button>RU</button>
                               </div>

                           </div>

                       }





                   <a className="gold-btn" href="#book"> Reserve</a>


               </div>
           </header>
       )

}


export default Header;