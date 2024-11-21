// Get all navigation links
const navLinks = document.querySelectorAll('.navigation-bar li a');

// Function to handle clicks on links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));
        // Add active class to the clicked link
        link.classList.add('active');
    });
});

// Scroll-based active link update
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 50; // Adjust offset for smooth highlighting
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (
            section.offsetTop <= scrollPosition &&
            section.offsetTop + section.offsetHeight > scrollPosition
        ) {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        }
    });
});