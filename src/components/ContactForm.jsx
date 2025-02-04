import { useState } from 'react';
import validateForm from './ValidateContactForm.jsx';

export default function ContactForm() {
    // State to hold form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        telephone: '',
        email: '',
        message: ''
    });

    // State to hold validation errors
    const [errors, setErrors] = useState({});

    // Function to encode form data for Netlify submission
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    // Handle input field validation when user leaves the field
    const handleBlur = (e) => {
        const { name, value } = e.target;
        const newErrors = validateForm({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: newErrors[name] });
    };

    // Handle change in form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Perform validation
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors); // Show validation errors
        } else {
            // If no validation errors, send form data to Netlify
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "portfolio-contact", ...formData })
            })
                .then(() => alert("Form successfully submitted!"))
                .catch(error => alert("Error submitting form: " + error));

            // Reset form state
            setErrors({});
            setFormData({
                firstName: '',
                lastName: '',
                telephone: '',
                email: '',
                message: ''
            });
        }
    };

    return (
        <section className="contact">
            <form 
                onSubmit={handleSubmit} 
                className="contact-form" 
                name="portfolio-contact" 
                method="post" 
                data-netlify="true"
            >
                <input type="hidden" name="form-name" value="portfolio-contact" />
                <input type="hidden" name="subject" value="Portfolio Contact Form" />

                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        className="form-control"
                        aria-required="true"
                        aria-describedby="first-name-error"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        className="form-control"
                        aria-required="true"
                        aria-describedby="last-name-error"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="telephone">Telephone:</label>
                    <input 
                        type="tel" 
                        id="telephone" 
                        name="telephone" 
                        placeholder="Enter your telephone number"
                        value={formData.telephone}
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        className="form-control"
                        aria-required="true"
                        aria-describedby="telephone-error"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}  
                        className="form-control"
                        aria-required="true"
                        aria-describedby="email-error"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        className="form-control"
                        aria-required="true"
                        aria-describedby="message-error"
                    ></textarea>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg" aria-label="Submit contact form">Submit</button>
                </div>

                {/* Display validation errors */}
                <div className="form-errors">
                    {errors.firstName && <p id="first-name-error" className="form-error" role="alert" aria-live="assertive" aria-describedby="first-name-error">{errors.firstName}</p>}
                    {errors.lastName && <p id="last-name-error" className="form-error" role="alert" aria-live="assertive" aria-describedby="last-name-error">{errors.lastName}</p>}
                    {errors.telephone && <p id="telephone-error" className="form-error" role="alert" aria-live="assertive" aria-describedby="telephone-error">{errors.telephone}</p>}
                    {errors.email && <p id="email-error" className="form-error" role="alert" aria-live="assertive" aria-describedby="email-error">{errors.email}</p>}
                    {errors.message && <p id="message-error" className="form-error" role="alert" aria-live="assertive" aria-describedby="message-error">{errors.message}</p>}
                </div>
            </form>
        </section>
    );
}
