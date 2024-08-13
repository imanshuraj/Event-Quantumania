// Toggle hamburger menu visibility
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Handle form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission
        
        // Display a simple confirmation message
        alert('Thank you for your message! We will get back to you shortly.');

        // Reset form fields
        form.reset();
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll(".gallery-item img");
    
    galleryItems.forEach(item => {
        item.addEventListener("click", function() {
            const lightbox = document.createElement("div");
            lightbox.id = "lightbox";
            document.body.appendChild(lightbox);

            const img = document.createElement("img");
            img.src = this.src;
            lightbox.appendChild(img);

            lightbox.addEventListener("click", function() {
                lightbox.remove();
            });
        });
    });
});
