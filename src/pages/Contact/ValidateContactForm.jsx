  // Validate form inputs
const validateForm = (formData) => {
        const errors = {};
        
        // Validate first name
        if (!formData.firstName) {
            errors.firstName = "First Name is required";
        } else if (formData.firstName.length < 2) {
            errors.firstName = "First Name must be at least 2 characters long";
        }

        // Validate last name
        if (!formData.lastName) {
            errors.lastName = "Last Name is required";
        } else if (formData.lastName.length < 2) {
            errors.lastName = "Last Name must be at least 2 characters long";
        }

        // Validate telephone
        if (!formData.telephone) {
            errors.telephone = "Telephone is required";
        } else if (formData.telephone.length < 10) {
            errors.telephone = "Telephone must be at least 10 characters long";
        }

        // Validate email
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email address is invalid";
        }

        // Validate message
        if (!formData.message) {
            errors.message = "Message is required";
        } else if (formData.message.length < 10) {
            errors.message = "Message must be at least 10 characters long";
        }

        return errors;
    };

    export default validateForm;