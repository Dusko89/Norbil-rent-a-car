import Hero from '../components/Hero'
import Booking from "../components/Booking.jsx";
import Distances from "../components/Distances.jsx";
import Fleet from "../components/Fleet.jsx";
import Electric from "../components/Electric.jsx";
import Standard from "../components/Standard.jsx";
import Faq from "../components/Faq.jsx";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Booking/>
            <Distances/>
            <Fleet/>
            <Electric/>
            <Standard/>
            <Faq/>
        </div>
    )
}

export default Home;