import { Link } from "react-router-dom";
import styles from './Legal.module.css';

const Terms = () => {
    return (
        <div className={styles.page}>
            <div className="shell">

                <h1 className={styles.title}>Website &amp; Reservation Terms</h1>
                <p className={styles.updated}>Last updated: 10 September 2026</p>

                <p className={styles.lede}>
                    These Website &amp; Reservation Terms govern the use of the NORBIL website and the
                    submission of rental requests through it. They do not replace the final vehicle
                    rental agreement applicable to the actual rental of a vehicle.
                </p>

                <h2 className={styles.h2}>1. About NORBIL</h2>
                <p>The website is operated by:</p>
                <address className={styles.address}>
                    NORBIL DOO<br />
                    Mojanska Ulica 51, Mojanovići, Zeta, Montenegro<br />
                    Tax Identification Number (PIB): 04405463<br />
                    Company Registration Number: 5-0137412/001<br />
                    Business activity: Rental and leasing of cars and light motor vehicles (7711)<br />
                    Phone: <a href="tel:+38267961062">+382 67 961 062</a><br />
                    Email: <a href="mailto:booking@norbil.me">booking@norbil.me</a>
                </address>

                <h2 className={styles.h2}>2. Rental Requests Are Not Confirmed Reservations</h2>
                <p>
                    Submitting a form through this website constitutes a request for availability and an
                    offer from NORBIL.
                </p>
                <p>
                    It does not, by itself, create a confirmed reservation or vehicle rental agreement.
                </p>
                <p>
                    A reservation becomes binding only after NORBIL has provided a clear written
                    confirmation or offer containing the relevant rental details and the customer has
                    accepted the offer in the manner requested by NORBIL, including payment of any
                    required reservation payment or deposit where applicable.
                </p>
                <p>
                    An automated "request received" email or website confirmation does not constitute
                    confirmation of a vehicle reservation unless it expressly states otherwise.
                </p>

                <h2 className={styles.h2}>3. Availability</h2>
                <p>All rental requests are subject to vehicle availability.</p>
                <p>
                    NORBIL may accept or reject a rental request depending on availability, driver
                    eligibility, requested rental dates, location, vehicle requirements or other
                    legitimate operational reasons.
                </p>
                <p>
                    Until the reservation has been expressly confirmed, NORBIL is under no obligation to
                    hold a vehicle for the requested dates.
                </p>

                <h2 className={styles.h2}>4. Prices Shown on the Website</h2>
                <p>
                    Unless expressly identified as a final confirmed price, prices displayed on the
                    website are indicative estimates.
                </p>
                <p>
                    The final rental price may depend on the selected vehicle or vehicle category, rental
                    period, pickup and return location, seasonal pricing, optional extras, additional
                    drivers, cross-border use, insurance options and other services requested by the
                    customer.
                </p>
                <p>
                    Before the customer becomes bound by a reservation, NORBIL will communicate the
                    applicable price and any material additional charges relating to that reservation.
                </p>
                <p>
                    The price stated in NORBIL's written booking confirmation or accepted offer will apply
                    to the reservation, subject to any subsequent changes specifically requested and
                    accepted by the customer.
                </p>

                <h2 className={styles.h2}>5. Vehicle Model and Category</h2>
                <p>
                    Where a particular vehicle is expressly confirmed in writing, NORBIL will use
                    reasonable efforts to provide that vehicle.
                </p>
                <p>
                    Where the reservation is made for a vehicle category rather than a specific vehicle,
                    photographs, makes and models shown on the website are examples and do not guarantee a
                    particular make, model, colour or specification.
                </p>
                <p>
                    If the confirmed vehicle becomes unavailable due to breakdown, accident, late return by
                    a previous customer or another circumstance outside NORBIL's reasonable control, NORBIL
                    may offer a reasonably equivalent or higher vehicle category where available.
                </p>
                <p>
                    If an appropriate replacement cannot be provided, the customer will be entitled to the
                    remedies required by applicable law and the confirmed rental conditions, including
                    refund of amounts paid for services that cannot be provided where applicable.
                </p>

                <h2 className={styles.h2}>6. Driver Eligibility</h2>
                <p>
                    The person renting or driving the vehicle must satisfy all legal requirements and any
                    eligibility conditions stated in the booking confirmation or rental agreement.
                </p>
                <p>
                    The customer may be required to present a valid driving licence, passport or national
                    identification document and any other document reasonably required to verify
                    eligibility before the vehicle is released.
                </p>
                <p>
                    NORBIL may refuse to release a vehicle if the driver does not meet the applicable legal
                    or contractual requirements.
                </p>
                <p>Only persons authorised under the final rental agreement may drive the rented vehicle.</p>

                <h2 className={styles.h2}>7. Flight Numbers and Arrival Information</h2>
                <p>
                    Where a customer provides a flight number, arrival time or similar travel information,
                    that information is used to coordinate the requested vehicle handover.
                </p>
                <p>
                    Providing flight information does not guarantee that NORBIL can accommodate unlimited
                    delays or changes.
                </p>
                <p>
                    Customers should notify NORBIL as soon as reasonably possible if their arrival time or
                    travel plans change.
                </p>
                <p>
                    Any specific rules concerning delayed arrivals, out-of-hours pickup or additional
                    charges will be communicated as part of the reservation where applicable.
                </p>

                <h2 className={styles.h2}>8. Payment and Security Deposit</h2>
                <p>
                    Any advance payment, rental payment, security deposit, payment method or card
                    requirement will be communicated to the customer before the reservation becomes binding.
                </p>
                <p>
                    NORBIL will not charge an undisclosed security deposit or mandatory fee that has not
                    been communicated as part of the applicable reservation or rental terms.
                </p>

                <h2 className={styles.h2}>9. Cancellation and No-Show Conditions</h2>
                <p>
                    Cancellation and no-show conditions applicable to a reservation will be communicated
                    before the reservation becomes binding and included in the written booking confirmation.
                </p>
                <p>The customer should review those conditions carefully before accepting the reservation.</p>
                <p>
                    If no special cancellation condition has been specified, any cancellation will be
                    handled in accordance with applicable mandatory law and the agreement reached between
                    NORBIL and the customer.
                </p>

                <h2 className={styles.h2}>10. Statutory Withdrawal Rights</h2>
                <p>
                    Consumer law may provide a general right to withdraw from certain distance contracts.
                </p>
                <p>
                    However, where applicable European or EEA consumer law governs the transaction, the
                    statutory 14-day withdrawal right generally does not apply to car rental services where
                    the contract provides for a specific date or period of performance.
                </p>
                <p>This does not prevent NORBIL from offering contractual cancellation rights.</p>
                <p>
                    Any applicable cancellation rights are governed by the conditions communicated for the
                    confirmed reservation, subject always to mandatory consumer protection law.
                </p>

                <h2 className={styles.h2}>11. Final Rental Agreement</h2>
                <p>
                    Before or at the time the vehicle is released, the renter may be required to enter into
                    a separate vehicle rental agreement.
                </p>
                <p>
                    That rental agreement may contain additional conditions relating to matters including
                    authorised drivers, permitted use, territorial restrictions, cross-border travel,
                    insurance, excess and deductible amounts, security deposits, fuel, mileage, traffic
                    offences, parking charges, damage, accidents, breakdowns, roadside assistance, loss of
                    keys or documents, smoking, cleaning, late return and other matters directly related to
                    the possession and use of the vehicle.
                </p>
                <p>
                    For matters relating to the actual possession and use of the vehicle, the final rental
                    agreement and confirmed booking conditions will prevail over general information shown
                    on the website.
                </p>
                <p>
                    Nothing in the rental agreement or these Terms limits rights that cannot lawfully be
                    excluded under mandatory law.
                </p>

                <h2 className={styles.h2}>12. Accuracy of Information Provided by the Customer</h2>
                <p>
                    The customer is responsible for providing information that is accurate and reasonably
                    complete.
                </p>
                <p>
                    This includes contact information, rental dates, pickup and return information, driver
                    details and flight information where applicable.
                </p>
                <p>
                    NORBIL is not responsible for problems caused by materially incorrect information
                    supplied by the customer, except to the extent that applicable law provides otherwise.
                </p>

                <h2 className={styles.h2}>13. Website Information</h2>
                <p>NORBIL makes reasonable efforts to keep website information accurate and up to date.</p>
                <p>However, vehicle availability, prices and operational circumstances can change.</p>
                <p>
                    Nothing on the website should be understood as a guarantee of availability unless
                    NORBIL expressly confirms a reservation in writing.
                </p>
                <p>
                    Obvious typographical, technical or pricing errors do not bind NORBIL where the error
                    would reasonably have been apparent, subject to applicable consumer law.
                </p>

                <h2 className={styles.h2}>14. Acceptable Use of the Website</h2>
                <p>
                    You may use the website for legitimate personal or business inquiries relating to
                    NORBIL's services.
                </p>
                <p>
                    You must not intentionally interfere with the operation or security of the website,
                    submit fraudulent requests, attempt unauthorised access to systems or use automated
                    tools in a manner that materially disrupts the service.
                </p>

                <h2 className={styles.h2}>15. Intellectual Property</h2>
                <p>
                    Unless otherwise stated, the website design, branding, text, graphics and original
                    content belonging to NORBIL are protected by applicable intellectual property laws.
                </p>
                <p>
                    They may not be commercially reproduced or used without permission except where
                    permitted by law.
                </p>

                <h2 className={styles.h2}>16. Personal Data</h2>
                <p>
                    Personal data submitted through this website is processed in accordance with the NORBIL{" "}
                    <Link to="/privacy">Privacy Policy</Link>.
                </p>
                <p>
                    The Privacy Policy explains the categories of information collected, purposes of
                    processing, service providers, retention periods and applicable data protection rights.
                </p>

                <h2 className={styles.h2}>17. Liability</h2>
                <p>
                    Nothing in these Terms excludes or limits liability where such exclusion or limitation
                    is prohibited by mandatory law.
                </p>
                <p>
                    Subject to applicable mandatory consumer law, NORBIL is not responsible for indirect
                    losses arising solely from the use or temporary unavailability of the website itself.
                </p>
                <p>
                    Any liability concerning the actual rental, operation or condition of a vehicle will be
                    determined under the confirmed rental agreement and applicable law.
                </p>

                <h2 className={styles.h2}>18. Governing Law and Consumer Rights</h2>
                <p>
                    These Terms and NORBIL's rental services are governed by the laws of Montenegro, except
                    where mandatory law applicable to a consumer provides protections that cannot validly
                    be excluded by agreement.
                </p>
                <p>
                    Nothing in these Terms is intended to deprive a consumer of mandatory rights, remedies
                    or jurisdiction protections available under applicable consumer law.
                </p>
                <p>
                    Where legally permitted, disputes that cannot be resolved amicably shall be submitted
                    to the competent courts of Montenegro.
                </p>

                <h2 className={styles.h2}>19. Changes to These Terms</h2>
                <p>NORBIL may update these Terms from time to time.</p>
                <p>
                    The version applicable to a rental request will be the version published when the
                    request is submitted, except where later changes are expressly agreed between NORBIL
                    and the customer.
                </p>

                <h2 className={styles.h2}>20. Contact</h2>
                <p>Questions relating to these Terms or a reservation may be sent to:</p>
                <address className={styles.address}>
                    NORBIL DOO<br />
                    Mojanska Ulica 51, Mojanovići, Zeta, Montenegro<br />
                    Phone: <a href="tel:+38267961062">+382 67 961 062</a><br />
                    Email: <a href="mailto:booking@norbil.me">booking@norbil.me</a>
                </address>

            </div>
        </div>
    );
};

export default Terms;