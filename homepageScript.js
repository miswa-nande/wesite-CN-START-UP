// Get the burger menu and nav links
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Toggle the 'active' class when burger is clicked
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const businessContainer = document.querySelector('.business-container');
const cardWidth = 320; // Includes card width + gap
const totalCards = businessContainer.children.length;
let currentPosition = 0;

// Function to move the carousel
const moveCarousel = (direction) => {
    const maxScroll = (totalCards - 1) * cardWidth;
    if (direction === 'left' && currentPosition > 0) {
        currentPosition -= cardWidth;
    } else if (direction === 'right' && currentPosition < maxScroll) {
        currentPosition += cardWidth;
    }
    businessContainer.style.transform = `translateX(-${currentPosition}px)`;
};

// Event Listeners for Buttons
leftBtn.addEventListener('click', () => moveCarousel('left'));
rightBtn.addEventListener('click', () => moveCarousel('right'));



function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

