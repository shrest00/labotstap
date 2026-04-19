document.addEventListener('DOMContentLoaded', function () {
    // Initialize ALL Popovers
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

    // Initialize ALL Tooltips (You have one on the email info icon!)
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // Form Logic
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const emailInput = document.getElementById('email');
            
            if (emailInput.checkValidity()) {
                const modal = new bootstrap.Modal(document.getElementById('subscribeModal'));
                modal.show();
                signupForm.reset();
                signupForm.classList.remove('was-validated');
            } else {
                signupForm.classList.add('was-validated');
            }
        });
    }
});