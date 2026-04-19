// Select the hamburger menu element and the navigation links container
const menuToggle = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Add a click event listener to the hamburger menu
// This acts like an interrupt, waiting for the user's action
menuToggle.addEventListener('click', function() {
    // Toggle the 'active' class on the navigation links
    // This triggers the CSS transition we defined earlier
    navLinks.classList.toggle('active');
});