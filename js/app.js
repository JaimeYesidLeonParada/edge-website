// Default language set to Spanish for the local market
let currentLang = 'es';

// Function to translate the page based on the selected language
function translatePage(lang) {
    // Find all HTML elements that have the 'data-i18n' attribute
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        // Check if the translation exists in our dictionary
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Function to handle the language toggle button logic
function initLanguageToggle() {
    const langToggleBtn = document.getElementById('lang-toggle');
    
    if (langToggleBtn) {
        // Set the initial text of the button
        langToggleBtn.textContent = currentLang === 'es' ? 'EN' : 'ES';

        // Add the click interrupt to toggle languages
        langToggleBtn.addEventListener('click', function() {
            // Switch the current language state
            currentLang = currentLang === 'es' ? 'en' : 'es';
            
            // Update button text to show the opposite language
            langToggleBtn.textContent = currentLang === 'es' ? 'EN' : 'ES';
            
            // Execute the translation engine
            translatePage(currentLang);
        });
    }
}

// Function to handle the mobile hamburger menu logic
function initMobileMenu() {
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
}

// Function to asynchronously load HTML components
async function loadComponents() {
    try {
        const headerResponse = await fetch('components/header.html');
        document.getElementById('header-container').innerHTML = await headerResponse.text();

        const footerResponse = await fetch('components/footer.html');
        document.getElementById('footer-container').innerHTML = await footerResponse.text();

        // Initialize features only after components are successfully injected
        initMobileMenu();
        initLanguageToggle();
        
        // Force the initial translation translation on page load
        translatePage(currentLang);
    } catch (error) {
        console.error('Error loading components:', error);
    }
}

// Wait for the DOM to be fully loaded before running our script
document.addEventListener('DOMContentLoaded', loadComponents);