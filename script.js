document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent! We will get back to you shortly.");
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
