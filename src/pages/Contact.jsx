import { Helmet } from 'react-helmet';
import ContactForm from '../components/ContactForm';
import './Contact.css';

export default function Contact() {
    return (
        <section className="contact-section" aria-labelledby="contact-title">
            <Helmet>
                <title>Contact | Rory Dowse Dev</title>
                <link rel="canonical" href="https://rorydowsedev.com/contact" />
                <meta name="description" content="Contact Rory Dowse today to inquire about opportunities, collaborations, or just to say hello!" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "mainEntity": {
                            "@type": "Person",
                            "name": "Rory Dowse",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "email": "mailto:rorydowse@hotmail.com",
                                "availableLanguage": "English"
                            }
                        }
                    }
                    `}
                </script>
            </Helmet>
            <h2>Contact Me</h2>
            <ContactForm />
        </section>
    );
}