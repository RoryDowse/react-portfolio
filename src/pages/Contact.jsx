import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const errors = {};
        
        if (!formData.firstName) {
            errors.firstName = "First Name is required";
        } else if (formData.firstName.length < 2) {
            errors.firstName = "First Name must be at least 2 characters long";
        }

        if (!formData.lastName) {
            errors.lastName = "Last Name is required";
        } else if (formData.lastName.length < 2) {
            errors.lastName = "Last Name must be at least 2 characters long";
        }

        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email address is invalid";
        }

        if (!formData.message) {
            errors.message = "Message is required";
        } else if (formData.message.length < 10) {
            errors.message = "Message must be at least 10 characters long";
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log('Form data submitted:', formData);
            setErrors({});
            setFormData({
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
                    ></textarea>
                </div>

                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>

          {/* Error display section */}
          <div className="form-errors">
                    {errors.firstName && <p>{errors.firstName}</p>}
                    {errors.lastName && <p>{errors.lastName}</p>}
                    {errors.email && <p>{errors.email}</p>}
                    {errors.message && <p>{errors.message}</p>}
                </div>
            </form>
        </section>
    );
}
