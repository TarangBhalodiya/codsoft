
document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('click', () => {
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
