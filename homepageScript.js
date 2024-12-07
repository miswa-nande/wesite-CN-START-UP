// Get the burger menu and nav links
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Toggle the 'active' class when burger is clicked
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});




function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

