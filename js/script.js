document.addEventListener('DOMContentLoaded', function () {
    // Glide carousel initialization and options
    var glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        autoplay: 3000, // Autoplay interval in milliseconds (e.g., 5000 for 5 seconds)
        hoverpause: true, // Pause autoplay on mouse hover
        breakpoints: {
            800: {
                perView: 1
            }
        }
    });

    glide.mount();

    // Event listeners for navigation buttons
    document.getElementById('home-btn').addEventListener('click', function() {
        showSection('home');
    });

    document.getElementById('about-btn').addEventListener('click', function() {
        showSection('about');
    });

    document.getElementById('menu-btn').addEventListener('click', function() {
        showSection('menu');
    });

    document.getElementById('order-btn').addEventListener('click', function() {
        showSection('order');
    });

    document.getElementById('contact-btn').addEventListener('click', function() {
        showSection('contact');
    });

    // Function to show/hide sections
    function showSection(sectionId) {
        // Hide all sections
        var sections = document.querySelectorAll('main section');
        sections.forEach(function(section) {
            section.classList.add('hidden');
        });

        // Show the selected section
        var selectedSection = document.getElementById(sectionId);
        selectedSection.classList.remove('hidden');
    }
});

// Cache DOM elements for better performance
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector("#dropdown .menu");
const dropdownText = document.getElementById('dropdownText');
const placeOrder = document.querySelector("#place-order");
const cancel = document.querySelector("#cancel");

// Function to toggle the 'open' class
function toggleDropdown() {
    dropdownMenu.classList.toggle("open");
    dropdownToggle.classList.toggle("open");
}

// Function to handle menu item clicks using event delegation
function handleMenuItemClick(event) {

    // Prevent the default anchor action
    event.preventDefault();

    // Check if the clicked element is a submenu item
    if (event.target.closest('.submenu-item a')) {
        const selectedOption = event.target.textContent;
        dropdownText.textContent = selectedOption;
        toggleDropdown(); // Close the menu
    }
    
    else if (event.target.closest('.menu-item.dropdown > a')) {
        
        // Toggle the visibility of the submenu
        const parentMenuItem = event.target.parentElement;
        const submenu = parentMenuItem.querySelector('.submenu');
        
        if (submenu) {
            submenu.classList.toggle("open");
        }
    }
    
    // Check if the clicked element is a menu item
    else if (event.target.closest('.menu-item a, .submenu-item a')) {
        event.preventDefault(); // Prevent the default anchor action
        const selectedOption = event.target.textContent;
        dropdownText.textContent = selectedOption;
        toggleDropdown(); // Close the menu
    }
}

// Attach event listener to the dropdown toggle
dropdownToggle.addEventListener("click", toggleDropdown);

// Attach a single event listener to the dropdown menu for handling item clicks
dropdownMenu.addEventListener('click', handleMenuItemClick);

// Event listener for the place order button
placeOrder.addEventListener("click", () => {
    const isConfirmed = confirm("Are you sure you want to place order?");
    if (isConfirmed) {
        alert("Your order was placed successfully.");
    }
});

// Event listener for the cancel button
cancel.addEventListener("click", () => {
    window.close(); // Close the current window
});