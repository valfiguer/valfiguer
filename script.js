
// script.js

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Smooth scroll
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form submission handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add your form submission logic (e.g., sending data to a server)

    alert(`Mensaje enviado:\nNombre: name\nEmail:{name}\nEmail:name\nEmail:{email}\nMensaje: ${message}`);
    
    // Reset the form
    contactForm.reset();
});