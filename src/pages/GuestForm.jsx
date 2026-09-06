import { useState } from "react";
import styles from "./GuestForm.module.css";

const GuestForm = () => {

    const [form, setForm] = useState({
        name: "", email: "", phone: "", flight: "", message: "", consent: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    };

    const validate = () => {
        const next = {};

        if (!form.name.trim()) {
            next.name = "Enter your full name";
        }

        if (!form.email.trim()) {
            next.email = "Enter your email address";
        } else if (!form.email.includes("@") || !form.email.includes(".")) {
            next.email = "Enter a valid email address";
        }

        if (!form.phone.trim()) {
            next.phone = "Enter a phone number we can reach you on";
        }

        if (!form.consent) {
            next.consent = "You need to agree before we can reply";
        }

        return next;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.currentTarget.elements.website.value !== "") return;

        const found = validate();
        setErrors(found);

        if (Object.keys(found).length > 0) return;

        console.log(form);
    };

    return (
        <section className={styles.wrap}>
            <div className="shell">
            <p className="eyebrow">Request</p>
            <h2 className="h2">Send your details</h2>
            <p className={styles.intro}>
                Tell us who you are and we will confirm availability by email.
                Nothing is charged now.
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>

                {/* honeypot — ne uklanjaj */}
                <div className={styles.hp} inert>
                    <label htmlFor="website">Website</label>
                    <input
                        id="website"
                        name="website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                    />
                </div>

                <div className={styles.grid}>

                    <div className={styles.fld}>
                        <label className={styles.label} htmlFor="name">Full name</label>
                        <input
                            className={styles.input}
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            autoComplete="name"
                            aria-invalid={errors.name ? true : undefined}
                            aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        {errors.name && (
                            <p id="name-error" className={styles.error}>{errors.name}</p>
                        )}
                    </div>

                    <div className={styles.fld}>
                        <label className={styles.label} htmlFor="email">Email</label>
                        <input
                            className={styles.input}
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            autoComplete="email"
                            aria-invalid={errors.email ? true : undefined}
                            aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                            <p id="email-error" className={styles.error}>{errors.email}</p>
                        )}
                    </div>

                    <div className={styles.fld}>
                        <label className={styles.label} htmlFor="phone">Phone number</label>
                        <input
                            className={styles.input}
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            autoComplete="tel"
                            aria-invalid={errors.phone ? true : undefined}
                            aria-describedby={errors.phone ? "phone-error" : undefined}
                        />
                        {errors.phone && (
                            <p id="phone-error" className={styles.error}>{errors.phone}</p>
                        )}
                    </div>

                    <div className={styles.fld}>
                        <label className={styles.label} htmlFor="flight">
                            Flight number <span>(optional)</span>
                        </label>
                        <input
                            className={styles.input}
                            id="flight"
                            name="flight"
                            type="text"
                            value={form.flight}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={`${styles.fld} ${styles.full}`}>
                        <label className={styles.label} htmlFor="message">
                            Message <span>(optional)</span>
                        </label>
                        <textarea
                            className={styles.textarea}
                            id="message"
                            name="message"
                            rows={4}
                            value={form.message}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.full}>
                        <div className={styles.consent}>
                            <input
                                className={styles.consentBox}
                                id="consent"
                                name="consent"
                                type="checkbox"
                                checked={form.consent}
                                onChange={handleChange}
                                aria-invalid={errors.consent ? true : undefined}
                                aria-describedby={errors.consent ? "consent-error" : undefined}
                            />
                            <label className={styles.consentText} htmlFor="consent">
                                I agree that Norbil may use my details to respond to this request.
                            </label>
                        </div>
                        {errors.consent && (
                            <p id="consent-error" className={styles.error}>{errors.consent}</p>
                        )}
                    </div>

                </div>

                <div className={styles.actions}>
                    <button className="gold-btn" type="submit">Send booking request</button>
                    <p className={styles.note}>
                        This is a request, not a confirmed booking. We reply within 24 hours.
                    </p>
                </div>

            </form>
            </div>
        </section>
    );
};

export default GuestForm;