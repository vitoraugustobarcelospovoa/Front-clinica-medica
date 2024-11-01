function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("active");
}

const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById("navMenu");
        menu.classList.remove('active'); // Remove a classe 'active' para fechar o menu
    });
});
