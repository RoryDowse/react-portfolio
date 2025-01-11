import Hero from "../components/Hero";
import Services from "../components/Services";
import Employer from "../components/Employer";
import Affiliations from "../components/Affiliations";
import Testimonials from "../components/Testimonials";
import Packages from "../components/Packages";
import Inquire from "../components/Inquire";
import Location from "../components/Location";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Employer />
            <Affiliations />
            <Testimonials />
            <Packages />
            <Inquire />
            <Location />
            <FAQ />
            <CTA />
        </>
    );
}