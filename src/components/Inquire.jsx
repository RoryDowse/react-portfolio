import ContactForm from "./ContactForm"
import './Inquire.css'
export default function Inquire() {
    return (
        <section className="inquire-section" id="inquire-now">
            <h2>Inquire Now</h2>
            <div className="inquire-container">
            <ContactForm />
            </div>
        </section>
    )
}