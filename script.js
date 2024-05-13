document.querySelector('.hamburger').addEventListener('click', function() {
    const links = document.querySelector('.nav-links');
    if (links.style.left === '0px') {
        links.style.left = '-100%'; // Cacher le menu
    } else {
        links.style.left = '0px'; // Afficher le menu
    }
});
