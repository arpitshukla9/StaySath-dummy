const container = document.querySelector('.container');
const LoginLink = document.querySelector('.SignInLink');
const RegisterLink = document.querySelector('.SignUpLink');
const loginForm = document.querySelector('.form-box.Login form');
const registerForm = document.querySelector('.form-box.Register form');

RegisterLink.addEventListener('click', () => {
    container.classList.add('active');
});

LoginLink.addEventListener('click', () => {
    container.classList.remove('active');
});

// Handle Register Form Submission
registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = registerForm.querySelector('input[type="email"]').value;
    const username = registerForm.querySelector('input[type="Username"]').value;
    const password = registerForm.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = registerForm.querySelectorAll('input[type="password"]')[1].value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, username, password }),
        });

        if (response.ok) {
            alert('Registration successful');
            registerForm.reset();
        } else {
            alert('Failed to register');
        }
    } catch (error) {
        console.error(error);
        alert('An error occurred');
    }
});

// Handle Login Form Submission
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = loginForm.querySelector('input[name="username"]').value;
    const password = loginForm.querySelector('input[name="password"]').value;

    try {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            alert('Login successful');
            loginForm.reset();
        } else {
            alert('Invalid username or password');
        }
    } catch (error) {
        console.error(error);
        alert('An error occurred');
    }
});





