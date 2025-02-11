// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
          // Get the form element
          const form = document.querySelector("form");

          // Add event listener for form submission
          form.addEventListener("submit", function (event) {
                    event.preventDefault(); // Prevent form from submitting immediately

                    // Collect all form input elements
                    const name = document.getElementById("name");
                    const email = document.getElementById("email");
                    const phone = document.getElementById("phone");
                    const tgUsername = document.getElementById("tg-username");
                    const githubUsername = document.getElementById("github-username");
                    const message = document.getElementById("message");

                    // Basic form validation
                    let isValid = true;

                    // Validate name
                    if (!name.value.trim()) {
                              alert("Name is required.");
                              isValid = false;
                    }

                    // Validate email
                    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    if (!email.value.trim() || !emailRegex.test(email.value)) {
                              alert("Please enter a valid email address.");
                              isValid = false;
                    }

                    // Validate phone number
                    const phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number
                    if (!phone.value.trim() || !phoneRegex.test(phone.value)) {
                              alert("Please enter a valid phone number (10 digits).");
                              isValid = false;
                    }

                    // Validate Telegram username
                    if (!tgUsername.value.trim()) {
                              alert("Telegram username is required.");
                              isValid = false;
                    }

                    // Validate GitHub username
                    if (!githubUsername.value.trim()) {
                              alert("GitHub username is required.");
                              isValid = false;
                    }

                    // Validate message
                    if (!message.value.trim()) {
                              alert("Message is required.");
                              isValid = false;
                    }

                    // If all fields are valid, submit the form
                    if (isValid) {
                              // You can handle the form submission via AJAX if needed
                              // For now, we just log the values to the console
                              console.log("Form is valid. Submitting...");

                              // If using actual form submission:
                              form.submit(); // Uncomment this if you want to submit the form normally
                    } else {
                              console.log("Form has errors. Please correct them and try again.");
                    }
          });
});
