import Welcome from "../components/Welcome";
import Services from "../components/Services";
import Affiliations from "../components/Affiliations";
import Testimonials from "../components/Testimonials";
import Packages from "../components/Packages";

export default function Home() {
    return (
        <>
            <Welcome />
            <Services />
            <Affiliations />
            <Testimonials />
            <Packages />
        </>
    );
}