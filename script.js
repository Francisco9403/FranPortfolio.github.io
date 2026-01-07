// 1. Menú Móvil (Hamburguesa)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// 2. Manejo del Formulario (Formspree)
const form = document.getElementById("contactForm");
const statusTxt = document.getElementById("form-status");

form.addEventListener("submit", async function(event) {
    event.preventDefault();
    statusTxt.innerHTML = "Sending...";
    statusTxt.style.color = "#444";

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            statusTxt.innerHTML = "Thanks! Message sent successfully.";
            statusTxt.style.color = "green";
            form.reset();
        } else {
            statusTxt.innerHTML = "Oops! There was a problem.";
            statusTxt.style.color = "red";
        }
    } catch (error) {
        statusTxt.innerHTML = "Error connecting to server.";
        statusTxt.style.color = "red";
    }
});


// --- ANIMACIÓN AL HACER SCROLL ---
// Detecta cuando los elementos entran en pantalla
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Agrega la clase que anima
        }
    });
});

// Busca todos los elementos que tengan la clase "reveal"
const hiddenElements = document.querySelectorAll('.reveal');
hiddenElements.forEach((el) => observer.observe(el));

// --- EFECTO NAVBAR TRANSPARENTE A SÓLIDO ---
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Si bajamos más de 50px, añade la clase "scrolled" (pone fondo blanco)
        navbar.classList.add('scrolled');
    } else {
        // Si estamos arriba del todo, quita la clase (vuelve a transparente)
        navbar.classList.remove('scrolled');
    }
});