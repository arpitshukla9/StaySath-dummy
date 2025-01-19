// Toggle mobile menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// Toggle dropdown
function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
}

// Close dropdown and menu when clicking outside
document.addEventListener('click', function(e) {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    const dropdown = document.querySelector('.dropdown');
    const userButton = document.querySelector('.user-button');
    
    // Close menu if clicking outside
    if (menu && !menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove('active');
    }
    
    // Close dropdown if clicking outside
    if (dropdown && !dropdown.contains(e.target) && !userButton.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});




















document.getElementById('search-button').addEventListener('click', function (event) {
    const query = document.getElementById('location').value;
    if (query) {
        alert("You searched for: " + query);
    } else {
        alert("Please enter a search term.");
    }
});

// Automatically change the slide every 3 seconds
setInterval(() => moveSlide(1), 3000);

// JavaScript to redirect to login page when the button is clicked
document.getElementById('login-signup-btn').addEventListener('click', function () {
    // Redirect to the login page
    window.location.href = 'login.html';
});




const slides = document.querySelectorAll('.unique-slide');
let currentIndex = 0;
const totalSlides = slides.length;
const slideInterval = 5000; // 5 seconds for each image to appear

function showNextSlide() {
    // Remove 'active' class from current slide
    slides[currentIndex].classList.remove('active');
    
    // Increment to next slide index
    currentIndex = (currentIndex + 1) % totalSlides;
    
    // Add 'active' class to next slide
    slides[currentIndex].classList.add('active');
    
    // Move the slider container to show the next slide
    const newTransformValue = -(100 * currentIndex) + '%';
    document.getElementById('hotelTravelSlides').style.transform = `translateX(${newTransformValue})`;
}

// Initialize the first slide as active
slides[currentIndex].classList.add('active');

// Start the cycle of slides
setInterval(showNextSlide, slideInterval);




function changeTheme(theme) {
    // Remove any existing theme class from <body>
    document.body.className = '';
    document.querySelector('.navbar').className = 'navbar';

    // Add the new theme class
    document.body.classList.add(`${theme}-theme`);
    document.querySelector('.navbar').classList.add(`${theme}-theme`);

    // Save the user's theme preference to localStorage
    localStorage.setItem('selectedTheme', theme);
}

// Apply the saved theme on page load
window.onload = function () {
    const savedTheme = localStorage.getItem('selectedTheme') || 'default';
    changeTheme(savedTheme);
};


// Function to toggle the dropdown visibility
function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
}



// Select the login/signup container
const container = document.querySelector('.container');

// Select login and signup links
const LoginLink = document.querySelector('.SignInLink');
const RegisterLink = document.querySelector('.SignUpLink');

// Toggle the display of the container when the login/signup button is clicked
document.getElementById("loginSignupBtn").addEventListener("click", function () {
    if (container.style.display === "none" || container.style.display === "") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
});

// Add 'active' class when RegisterLink is clicked
RegisterLink.addEventListener('click', () => {
    container.classList.add('active');
});

// Remove 'active' class when LoginLink is clicked
LoginLink.addEventListener('click', () => {
    container.classList.remove('active');
});





document.querySelector('.contact-form').addEventListener('mousemove', function (event) {
    const h1 = this.querySelector('h1');
    const h2 = this.querySelector('h2');
    const rect = this.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const moveX = (x / rect.width - 0.5) * 30;  // Adjust the multiplier for more/less movement
    const moveY = (y / rect.height - 0.5) * 30;

    h1.style.transform = `rotateY(${moveX}deg) rotateX(${moveY}deg)`;
    h2.style.transform = `rotateY(${moveX}deg) rotateX(${moveY}deg)`;
});

document.querySelector('.contact-form').addEventListener('mouseleave', function () {
    const h1 = this.querySelector('h1');
    const h2 = this.querySelector('h2');
    h1.style.transform = 'rotateY(0) rotateX(0)';
    h2.style.transform = 'rotateY(0) rotateX(0)';
});




const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, 500);
document.getElementById('globe-container').appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(2, 32, 32);
const texture = new THREE.TextureLoader().load("textures/heightmap_ref_group_baseColor.png")
const material = new THREE.MeshBasicMaterial({ map: texture });
const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.001;
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    const container = document.getElementById('globe-container');
    camera.aspect = container.clientWidth / 500;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, 500);
});


// Function to toggle the visibility of title, paragraph, and button
function toggleText(paragraphId, section) {
    const paragraph = document.getElementById(paragraphId);
    const title = section.querySelector('.section-title');
    const button = section.querySelector('.submit-btn');
    const inputFields = section.querySelectorAll('.contact-form input, .contact-form textarea');

    // If paragraph is hidden, show it, hide title and show input fields and button
    if (paragraph.style.display === 'none' || paragraph.style.display === '') {
        paragraph.style.display = 'block'; // Show the paragraph
        title.style.display = 'none'; // Hide the title
        inputFields.forEach(input => input.style.display = 'block'); // Show input fields
        button.style.display = 'block'; // Show the button
    } else {
        paragraph.style.display = 'none'; // Hide the paragraph
        title.style.display = 'block'; // Show the title
        inputFields.forEach(input => input.style.display = 'none'); // Hide input fields
        button.style.display = 'none'; // Hide the button
    }
}

// Ensure the paragraphs, input fields, and buttons are hidden on initial load
window.onload = function () {
    const paragraphs = document.querySelectorAll('.slider-section p');
    const titles = document.querySelectorAll('.slider-section .section-title');
    const buttons = document.querySelectorAll('.slider-section button');
    const inputFields = document.querySelectorAll('.contact-form input, .contact-form textarea');

    paragraphs.forEach(paragraph => {
        paragraph.style.display = 'none'; // Hide all paragraphs initially
    });

    titles.forEach(title => {
        title.style.display = 'block'; // Ensure titles are visible initially
    });

    buttons.forEach(button => {
        button.style.display = 'none'; // Ensure buttons are hidden initially
    });

    inputFields.forEach(input => {
        input.style.display = 'none'; // Ensure input fields are hidden initially
    });
};
// JavaScript to handle the button click for the Contact section
document.querySelector('.slider-section').addEventListener('click', function () {
    const contactForm = this.querySelector('.contact-form');
    const inputFields = this.querySelectorAll('.contact-form input, .contact-form textarea');
    const button = this.querySelector('.submit-btn');

    // Toggle the visibility of the contact form, input fields, and button
    if (contactForm.classList.contains('show')) {
        // If already visible, hide the contact form and its content
        contactForm.classList.remove('show');
        inputFields.forEach(input => input.style.display = 'none'); // Hide input fields
        button.style.display = 'none'; // Hide submit button
    } else {
        // If hidden, show the contact form and its content
        contactForm.classList.add('show');
        inputFields.forEach(input => input.style.display = 'block'); // Show input fields
        button.style.display = 'block'; // Show submit button
    }
});

