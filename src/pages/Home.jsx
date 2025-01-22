import { Helmet } from "react-helmet";

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
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Rory Dowse Web Development",
        "image": "https://rorydowsedev.com/assets/rory-dowse-headshot.webp",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Deer Valley, Phoenix, AZ",
            "addressLocality": "Phoenix",
            "addressRegion": "AZ",
            "postalCode": "85027",
            "addressCountry": "US"
        },
        "openingHours": "Mo-Fr 09:00-17:00",
        "keywords": "web development, SEO, website design",
        "description": "Website design and SEO services tailored to your business needs.",
        "telephone": "+1-480-336-0379",
        "url": "https://rorydowsedev.com/",
        "priceRange": "$$",
        "sameAs": [
            "https://www.linkedin.com/in/rorydowse/",
            "https://github.com/rorydowse"
        ]
    };

    return (
        <>
            <Helmet>
                <title>Website Design and SEO Services in Deer Valley, Phoenix, AZ</title>
                <link rel="canonical" href="https://rorydowsedev.com/" />
                <meta name="description" content="Rory Dowse Web Development provides website design and SEO services to help businesses and individuals achieve their online goals." />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>
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