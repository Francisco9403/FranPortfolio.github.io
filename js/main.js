document.addEventListener('DOMContentLoaded', () => {

    // 1. Inicializar AOS (Animaciones al hacer scroll)
    AOS.init({
        once: true,
        offset: 50,
        duration: 800,
        easing: 'ease-out-cubic',
    });

    // 2. Inicializar Typed.js (Efecto de máquina de escribir en el Hero)
    // Nos aseguramos de que el elemento exista antes de inicializarlo
    const typedElement = document.getElementById('typed-text');
    if (typedElement) {
        new Typed('#typed-text', {
            strings: [
                'Full Stack Developer.',
                'QA Automation Engineer.',
                'Analista Funcional.',
                'Process Automation Specialist.'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            cursorChar: '|'
        });
    }

    // 3. Menú Hamburguesa para móviles
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(9, 9, 11, 0.98)';
                navLinks.style.backdropFilter = 'blur(10px)';
                navLinks.style.padding = '30px 0';
                navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
            }
        });
    }

    // 4. Cambiar estilo del Navbar al hacer scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '15px 0';
            navbar.style.background = 'rgba(9, 9, 11, 0.95)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.background = 'rgba(9, 9, 11, 0.8)';
        }
    });
});