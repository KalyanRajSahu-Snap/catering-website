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

// Initialize functions when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    displayMenu(vegetarianMenu, 'vegetarian-menu');
    displayMenu(nonVegetarianMenu, 'non-vegetarian-menu');
    displayMenu(jainMenu, 'jain-menu');
    handleContactForm();
    handleLoginForm();
    handleSignupForm();
    handleSubscribeForm();
});