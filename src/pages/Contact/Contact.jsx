import { useState } from 'react';
import validateForm from './ValidateContactForm.jsx';
import './Contact.css';

// Define the Contact component
export default function Contact() {
    // State to hold form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    // State to hold validation errors
    const [errors, setErrors] = useState({});

    // Handle input field error when user moves out of the field
    const handleBlur = (e) => {
        console.log(e);
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

        // Get validation errors
        const validationErrors = validateForm(formData);

        // Check if there are validation errors
        if (Object.keys(validationErrors).length > 0) {
            // Set errors state with validation errors
            setErrors(validationErrors);
        } else {
            // If no validation errors, process with form submission
            console.log('Form data submitted:', formData);
            setErrors({}); // Reset form state (clear errors)
            setFormData({ // Reset form data
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            });
        }
    };

    return (
        <section className="contact-section">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit} className="contact-form">
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
                        onMouseOut={handleBlur}  
                        className="form-control"
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
                        onMouseOut={handleBlur} 
                        className="form-control"
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
                        onMouseOut={handleBlur}  
                        className="form-control"
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
                        onMouseOut={handleBlur} 
                        className="form-control"
                    ></textarea>
                </div>

                {/* Submit button */}
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>

                {/* Display validation errors */}
                <div className="form-errors">
                    {errors.firstName && <p className="form-error">{errors.firstName}</p>}
                    {errors.lastName && <p className="form-error">{errors.lastName}</p>}
                    {errors.email && <p className="form-error">{errors.email}</p>}
                    {errors.message && <p className="form-error">{errors.message}</p>}
                </div>
            </form>
        </section>
    );
}
