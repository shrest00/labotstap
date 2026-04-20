const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(el => new bootstrap.Popover(el))

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const thankYouMessage = document.getElementById('thank-you-message');
    const formText = document.getElementById('form-text');

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            // 1. Prevent the default form submission (page reload)
            event.preventDefault();

            // 2. (Optional) Get the email for a personalized touch
            const email = document.getElementById('userEmail').value;
            console.log("Form submitted for:", email);

            // 3. Hide the form and the introductory text
            signupForm.classList.add('d-none');
            formText.classList.add('d-none');

            // 4. Show the thank you message
            thankYouMessage.classList.remove('d-none');
            
            // 5. Trigger a Toast for extra feedback (optional)
            const toastElement = document.getElementById('mainToast');
            if (toastElement) {
                const toastBody = document.getElementById('toastBody');
                toastBody.innerText = "Subscription successful!";
                const toast = new bootstrap.Toast(toastElement);
                toast.show();
            }
        });
    }
});