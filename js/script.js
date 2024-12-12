const fadeIndicator = document.querySelector('.fade-scroll');

/**
 * Showing/hiding fade scroll indicator 
 */
function toggleFadeIndicator() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (window.scrollY < scrollableHeight - 20) {
    fadeIndicator.style.opacity = '1';
  } else {
    fadeIndicator.style.opacity = '0';
  }
  console.log({scrollY, scrollableHeight})
}

// Listening scroll, load and resize event
window.addEventListener('scroll', toggleFadeIndicator);
window.addEventListener('load', toggleFadeIndicator);
window.addEventListener('resize', toggleFadeIndicator);



document.querySelector('.highlight').addEventListener('click', function (e) {
e.preventDefault(); // Prevent immediate scroll

const targetId = this.getAttribute('href'); // Obtains link href
const targetElement = document.querySelector(targetId);

// Adds highlight-effect class
targetElement.classList.add('highlight-effect');

// Auto scroll
targetElement.scrollIntoView({ behavior: 'smooth' });

// Removes highlight after a timeout
setTimeout(() => {
    targetElement.classList.remove('highlight-effect');
}, 1000);
});


document.getElementById('copy-email').addEventListener('click', function (e) {
e.preventDefault(); // Prevents from opening outlook

const email = this.getAttribute('href').replace('mailto:', ''); // Extracts the email of 'mailto'

const tempInput = document.createElement('input');
tempInput.value = email;
document.body.appendChild(tempInput);
tempInput.select(); // Selects text
document.execCommand('copy'); // Clipboard copy
document.body.removeChild(tempInput); // Removes the temporal input

alert('Email address copied to clipboard!'); // Alerts user
});

// TOGGLE THEME
// Elements
const toggleCheckbox = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeToggleLabel = document.querySelector('.theme-toggle');

// SVGs
const lightModeSVG = `
    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
    <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
    <path d="M19 11h2m-1 -1v2"></path>
`;

const darkModeSVG = `
    <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path>
    <path d="M6.343 17.657l-1.414 1.414"></path>
    <path d="M6.343 6.343l-1.414 -1.414"></path>
    <path d="M17.657 6.343l1.414 -1.414"></path>
    <path d="M17.657 17.657l1.414 1.414"></path>
    <path d="M4 12h-2"></path>
    <path d="M12 4v-2"></path>
    <path d="M20 12h2"></path>
    <path d="M12 20v2"></path>
`;

/**
 * Apply saved theme
 */
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const isDarkMode = savedTheme === 'dark';

    // Apply class and checkbox state
    document.documentElement.classList.toggle('darkmode', isDarkMode);
    toggleCheckbox.checked = isDarkMode;

    // Change svg icon
    themeIcon.innerHTML = isDarkMode ? darkModeSVG : lightModeSVG;

    // Apply correct title
    themeToggleLabel.setAttribute('title', isDarkMode ? 'Light mode' : 'Dark mode');
}

/**
 * Alternate between light and dark theme
 */
function toggleTheme() {
    const isDarkMode = toggleCheckbox.checked;

    // Alternate root class
    document.documentElement.classList.toggle('darkmode', isDarkMode);

    // localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    // Change icon svg
    themeIcon.innerHTML = isDarkMode ? darkModeSVG : lightModeSVG;

    // Change title
    themeToggleLabel.setAttribute('title', isDarkMode ? 'Light mode' : 'Dark mode');
}

// Events
toggleCheckbox.addEventListener('change', toggleTheme);

// Init
applySavedTheme();
