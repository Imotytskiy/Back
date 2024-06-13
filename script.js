// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Get the values of the form fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate the form fields
    let valid = true;
    if (username === '') {
        document.getElementById('usernameError').textContent = 'Username is required';
        valid = false;
    }
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
        valid = false;
    }

    // If the form is valid, you can proceed with form submission or further processing
    if (valid) {
        // For demonstration, just show an alert
        alert('Form submitted successfully!');

        // Here you can add the code to actually submit the form data to your server
        // Example: using fetch to send data to a server endpoint
        /*
        fetch('/submit-login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        */
    }
});