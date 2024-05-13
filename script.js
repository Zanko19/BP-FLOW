{
    document.querySelector('.hamburger').addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.style.display === 'block') {
            navLinks.style.display = 'none'; // Si les liens sont visibles, les cacher
        } else {
            navLinks.style.display = 'block'; // Sinon, les rendre visibles
            navLinks.style.left = '0'; // Assure que les liens sont visibles en ajustant leur position
        }
    });
}
