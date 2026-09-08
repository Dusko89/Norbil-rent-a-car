
import {useState} from "react";
import  styles from './Contact.module.css';


const PHONE = "+4796806265";
const WHATSAPP = "4796806265";
const EMAIL = "booking@norbil.me";



const Contact = () => {
    const message = encodeURIComponent("Hi Norbil, I would like to ask about a car.");
    const bookingEnquiry = encodeURIComponent("Booking enquiry.")
    const [open, setOpen] = useState(false);

    return(

        <div className={styles.wrap}>

            { open && (
                <div className={styles.panel}>
                    <a className={styles.link} href={`tel:${PHONE}`}>
                        Call
                        <span>{PHONE}</span>
                    </a>
                    <a className={styles.link} href={`https://wa.me/${WHATSAPP}?text=${message}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                    <a className={styles.link} href={`mailto:${EMAIL}?subject=${bookingEnquiry}`}>Email</a>
                </div>
            )

            }

            <button className={styles.button} onClick={() => setOpen((prev) => !prev)} type="button" aria-expanded={open} aria-label="Contact us">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
                    <path d="M18 19c0 1.657 -2.686 3 -6 3" />
                    <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3" />
                    <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3" />
                </svg>
            </button>

        </div>

    )
}


export default Contact