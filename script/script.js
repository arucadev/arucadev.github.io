const fadeIndicator = document.querySelector('.fade-scroll');

// Showing fade if user is scrolling
function toggleFadeIndicator() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (window.scrollY < scrollableHeight) {
    fadeIndicator.style.opacity = '1';
  } else {
    fadeIndicator.style.opacity = '0';
  }
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

alert('Email copied to clipboard: ' + email); // Alerts user
});
