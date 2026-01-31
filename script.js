// Basic animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in classes to elements as they scroll into view
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .hero-content, .section-title').forEach(el => {
        el.style.opacity = '0'; // Hide initially
        el.classList.add('animate-fade-up'); // For now just animate on load
    });

    // Active Link handler
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Mobile Menu Toggle (Simple placeholder for now)
    console.log('Site Loaded');
});
