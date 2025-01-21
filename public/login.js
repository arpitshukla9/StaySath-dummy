// When the user submits the login form
document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get username and password from the form
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    try {
        // Send a POST request to the server's login route
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // If login is successful, you will receive the token and show a success message
            alert('Login successful');
            console.log('Token:', data.token); // You can store this token for authentication
        } else {
            // If there's an error (like invalid username/password), show the message
            alert(data.message);
        }
    } catch (error) {
        alert('Error logging in');
        console.error(error);
    }
});
