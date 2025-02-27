// Sample menu items
const menuItems = [
    { name: 'Butter Chicken', price: 12.99 },
    { name: 'Vegetable Biryani', price: 10.99 },
    { name: 'Paneer Tikka', price: 9.99 },
    { name: 'Chicken Tandoori', price: 13.99 },
];

// Function to display menu items
function displayMenu() {
    const menuContainer = document.getElementById('menu-items');
    if (menuContainer) {
        menuItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('menu-item');
            itemElement.innerHTML = `
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
            `;
            menuContainer.appendChild(itemElement);
        });
    }
}

// Function to handle contact form submission
function handleContactForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Here you would typically send this data to a server
            console.log('Form submitted:', { name, email, message });
            alert('Thank you for your message. We will get back to you soon!');
            form.reset();
        });
    }
}

function handleSubscribeForm() {
    const form = document.querySelector('.subscribe-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            
            // Here you would typically send this to a server
            console.log('Newsletter subscription:', email);
            alert('Thank you for subscribing!');
            form.reset();
        });
    }
}

// Initialize functions when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    displayMenu();
    handleContactForm();
    handleSubscribeForm();
});