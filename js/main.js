// Replace the existing menuItems array with these three arrays
const vegetarianMenu = [
    { name: 'Paneer Tikka', price: 250 },
    { name: 'Vegetable Biryani', price: 220 },
    { name: 'Dal Makhani', price: 180 },
    { name: 'Palak Paneer', price: 200 },
    { name: 'Veg Kolhapuri', price: 190 },
];

const nonVegetarianMenu = [
    { name: 'Butter Chicken', price: 300 },
    { name: 'Chicken Biryani', price: 280 },
    { name: 'Fish Curry', price: 320 },
    { name: 'Mutton Rogan Josh', price: 350 },
    { name: 'Tandoori Chicken', price: 280 },
];

const jainMenu = [
    { name: 'Jain Vegetable Curry', price: 220 },
    { name: 'Jain Pulao', price: 200 },
    { name: 'Jain Dal Fry', price: 170 },
    { name: 'Jain Aloo Gobi', price: 180 },
    { name: 'Jain Bhindi Masala', price: 190 },
];

// Function to display menu items
function displayMenu(menuItems, containerId) {
    const menuContainer = document.getElementById(containerId);
    if (menuContainer) {
        menuContainer.innerHTML = ''; // Clear existing content
        menuItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('menu-item');
            itemElement.innerHTML = `
                <h3>${item.name}</h3>
                <p>₹${item.price.toFixed(2)}</p>
            `;
            menuContainer.appendChild(itemElement);
        });
    }
}

// Function to handle menu toggle
function initializeMenuToggle() {
    const viewMenuBtn = document.getElementById('view-menu-btn');
    const createMenuBtn = document.getElementById('create-menu-btn');
    const viewMenuSection = document.getElementById('view-menu-section');
    const createMenuSection = document.getElementById('create-menu-section');

    if (viewMenuBtn && createMenuBtn && viewMenuSection && createMenuSection) {
        viewMenuBtn.addEventListener('click', () => {
            viewMenuBtn.classList.add('active');
            createMenuBtn.classList.remove('active');
            viewMenuSection.classList.add('active');
            createMenuSection.classList.remove('active');
        });

        createMenuBtn.addEventListener('click', () => {
            createMenuBtn.classList.add('active');
            viewMenuBtn.classList.remove('active');
            createMenuSection.classList.add('active');
            viewMenuSection.classList.remove('active');
        });
    }
}

// Function to initialize category buttons
function initializeCategoryButtons() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const customMenuContent = document.querySelector('.custom-menu-content h2');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Update content based on selected category
            if (customMenuContent) {
                customMenuContent.textContent = button.textContent;
            }
        });
    });
}

// Function to handle contact form submission
function handleContactForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Your existing contact form handling code
        });
    }
}

function initializeTestimonialCarousel() {
    const carousel = document.querySelector('.testimonial-carousel');
    if (carousel) {
        let isDown = false;
        let startX;
        let scrollLeft;

        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });

        carousel.addEventListener('mouseleave', () => {
            isDown = false;
        });

        carousel.addEventListener('mouseup', () => {
            isDown = false;
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });
    }
}

function handleLoginForm() {
    const form = document.getElementById('login-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.email.value;
            const password = form.password.value;
            // Here you would typically send this data to a server for authentication
            console.log('Login attempt:', { email, password });
            alert('Login functionality not implemented in this demo.');
        });
    }
}

function handleSignupForm() {
    const form = document.getElementById('signup-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            const confirmPassword = form['confirm-password'].value;

            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }

            // Here you would typically send this data to a server to create a new account
            console.log('Signup attempt:', { name, email, password });
            alert('Signup functionality not implemented in this demo.');
        });
    }
}

function handleForgotPasswordForm() {
    const form = document.getElementById('forgot-password-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.email.value;
            // Here you would typically send this email to a server to initiate password reset
            console.log('Password reset requested for:', email);
            alert('Password reset functionality not implemented in this demo.');
        });
    }
}
// Initialize functions when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    displayMenu(vegetarianMenu, 'vegetarian-menu');
    displayMenu(nonVegetarianMenu, 'non-vegetarian-menu');
    displayMenu(jainMenu, 'jain-menu');
    initializeMenuToggle();
    initializeCategoryButtons();
    handleContactForm();
    initializeTestimonialCarousel();
    handleLoginForm();
    handleSignupForm();
    handleForgotPasswordForm();
});