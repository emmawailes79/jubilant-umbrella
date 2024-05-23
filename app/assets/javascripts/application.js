//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
})

//error message email

<script>
    // JavaScript code for govukInput function
    function govukInput(options) {
        // Check if the 'value' property of 'options' is a valid email address
        if (isValidEmail(options.value)) {
            console.log("Email address is valid:", options.value);
            // Implement logic to enhance input element
        } else {
            console.log("Invalid email address:", options.value);
            // Handle invalid email address scenario (e.g., display error message)
            alert("Invalid email address. Please enter a valid email.");
        }
    }

    // Function to validate an email address
    function isValidEmail(email) {
        // Regular expression to match email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Execute govukInput function after the DOM has loaded
    document.addEventListener('DOMContentLoaded', function() {
        govukInput({
            label: {
                text: "Email address"
            },
            hint: {
                text: "Enter your current email address"
            },
            id: "email",
            name: "email",
            type: "email",
            value: "name@example.com", // Example email address
            autocomplete: "email",
            errorMessage: {
                text: "Enter an email address in the correct format, like name@example.com"
            },
            spellcheck: false
        });
    });
</script>
