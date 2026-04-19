// Function to asynchronously load HTML components
async function loadComponents() {
    try {
        // Fetch and inject the header
        const headerResponse = await fetch('components/header.html');
        const headerHTML = await headerResponse.text();
        document.getElementById('header-container').innerHTML = headerHTML;

        // Fetch and inject the footer
        const footerResponse = await fetch('components/footer.html');
        const footerHTML = await footerResponse.text();
        document.getElementById('footer-container').innerHTML = footerHTML;

        // Initialize mobile menu ONLY AFTER the header has been injected
        initMobileMenu();
    } catch (error) {
        console.error('Error loading components:', error);
    }
}

// Function to handle the mobile hamburger menu logic
function initMobileMenu() {
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Add event listener to the toggle button
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
}

// Wait for the DOM to be fully loaded before running our script
document.addEventListener('DOMContentLoaded', loadComponents);