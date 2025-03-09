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
    
    // Create a mapping of button text to grid IDs
    const categoryMapping = {
        'WELCOME DRINK': 'welcome-drink',
        'SOUP(VEG)': 'soup-veg',
        'SOUP(NON-VEG)': 'soup-non-veg',
        'CHAT COUNTER': 'chat-counter',
        'COUNTER DRESSING(VEG)': 'counter-dressing-veg',
        'COUNTER DRESSING(NON-VEG)': 'counter-dressing-non-veg'
    };
    
    // Show the welcome drink grid by default
    document.getElementById('welcome-drink').style.display = 'grid';
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Hide all menu grids
            Object.values(categoryMapping).forEach(id => {
                const grid = document.getElementById(id);
                if (grid) {
                    grid.style.display = 'none';
                }
            });
            
            // Show the corresponding menu grid
            const categoryId = categoryMapping[button.textContent];
            if (categoryId) {
                const menuGrid = document.getElementById(categoryId);
                if (menuGrid) {
                    menuGrid.style.display = 'grid';
                }
            }
            
            // Update content based on selected category
            document.querySelector('.custom-menu-content h2').textContent = button.textContent;
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

function initializeMenuSelection() {
    const checkboxes = document.querySelectorAll('.menu-item-checkbox input[type="checkbox"]');
    const selectedItemsList = document.getElementById('selected-items-list');
    const clearSelectionBtn = document.getElementById('clear-selection');
    const saveMenuBtn = document.getElementById('save-menu');
    
    // Object to store selected items by category
    const selectedItems = {};
    
    // Function to update the selected items list
    function updateSelectedItemsList() {
        // Clear the current list
        selectedItemsList.innerHTML = '';
        
        let hasItems = false;
        
        // Loop through each category in the selectedItems object
        for (const category in selectedItems) {
            if (selectedItems[category].length > 0) {
                hasItems = true;
                
                // Create category group
                const categoryGroup = document.createElement('div');
                categoryGroup.className = 'category-group';
                
                // Add category title
                const categoryTitle = document.createElement('div');
                categoryTitle.className = 'category-title';
                categoryTitle.textContent = category;
                categoryGroup.appendChild(categoryTitle);
                
                // Add items for this category
                selectedItems[category].forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.className = 'selected-item';
                    itemElement.innerHTML = `
                        <span>${item}</span>
                        <button class="remove-item" data-category="${category}" data-item="${item}">×</button>
                    `;
                    categoryGroup.appendChild(itemElement);
                });
                
                selectedItemsList.appendChild(categoryGroup);
            }
        }
        
        // If no items are selected, show the empty message
        if (!hasItems) {
            const emptyMessage = document.createElement('p');
            emptyMessage.className = 'empty-selection';
            emptyMessage.textContent = 'No items selected yet';
            selectedItemsList.appendChild(emptyMessage);
        }
        
        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                const item = this.getAttribute('data-item');
                
                // Remove the item from the selectedItems object
                selectedItems[category] = selectedItems[category].filter(i => i !== item);
                
                // Find and uncheck the corresponding checkbox
                checkboxes.forEach(checkbox => {
                    if (checkbox.parentElement.querySelector('span').textContent === item) {
                        checkbox.checked = false;
                    }
                });
                
                // Update the list
                updateSelectedItemsList();
            });
        });
    }
    
    // Add event listeners to all checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const itemName = this.parentElement.querySelector('span').textContent;
            
            // Determine the category based on the current active category
            const category = document.querySelector('.custom-menu-content h2').textContent;
            
            // Initialize the category array if it doesn't exist
            if (!selectedItems[category]) {
                selectedItems[category] = [];
            }
            
            if (this.checked) {
                // Add the item to the selectedItems object
                if (!selectedItems[category].includes(itemName)) {
                    selectedItems[category].push(itemName);
                }
            } else {
                // Remove the item from the selectedItems object
                selectedItems[category] = selectedItems[category].filter(item => item !== itemName);
            }
            
            // Update the selected items list
            updateSelectedItemsList();
        });
    });
    
    // Clear selection button
    if (clearSelectionBtn) {
        clearSelectionBtn.addEventListener('click', function() {
            // Clear the selectedItems object
            for (const category in selectedItems) {
                selectedItems[category] = [];
            }
            
            // Uncheck all checkboxes
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            
            // Update the list
            updateSelectedItemsList();
        });
    }
    
    // Save menu button
    if (saveMenuBtn) {
        saveMenuBtn.addEventListener('click', function() {
            // Check if any items are selected
            let hasItems = false;
            for (const category in selectedItems) {
                if (selectedItems[category].length > 0) {
                    hasItems = true;
                    break;
                }
            }
            
            if (hasItems) {
                // In a real application, you would save this to a database
                // For now, we'll just show an alert
                alert('Your custom menu has been saved!');
                
                // You could also redirect to a confirmation page
                // window.location.href = 'confirmation.html';
            } else {
                alert('Please select at least one item for your custom menu.');
            }
        });
    }
    
    // Initialize the list
    updateSelectedItemsList();
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
    initializeMenuSelection();
});