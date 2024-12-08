document.addEventListener("DOMContentLoaded", function() {
    // Select all carousel containers
    const carousels = document.querySelectorAll(".image-carousel");

    // Function to toggle heart icon color
    function toggleHeart(button) {
        if (button.innerHTML === '🤍') {
            button.innerHTML = '❤️'; // Change to filled heart when clicked
        } else {
            button.innerHTML = '🤍'; // Change back to empty heart when clicked
        }
    }

    // Function to handle the star rating
    function rate(star) {
        const stars = star.parentNode.querySelectorAll('.star'); // Get all stars in the same rating section
        const index = Array.from(stars).indexOf(star); // Find the index of the clicked star

        // Loop through all stars and update their status based on the clicked star
        stars.forEach((s, i) => {
            if (i <= index) {
                s.textContent = '★'; // Filled star for selected rating
                s.classList.add('filled'); // Add filled class for styling
            } else {
                s.textContent = '☆'; // Empty star for unselected rating
                s.classList.remove('filled'); // Remove filled class for unselected
            }
        });
    }

    // Loop through each carousel and set up its functionality
    carousels.forEach(function(carousel) {
        const leftBtn = carousel.parentElement.querySelector(".left-btn");
        const rightBtn = carousel.parentElement.querySelector(".right-btn");
        const heartBtn = carousel.parentElement.querySelector(".heart-btn");

        let index = 0; // Start at the first image
        const images = carousel.children; // Get all the images in this carousel
        const totalImages = images.length; // Total number of images in this carousel

        if (totalImages === 0) return; // Exit if no images are present

        // Dynamically set the carousel width to accommodate all images
        carousel.style.width = `${totalImages * 100}%`;

        // Heart button functionality
        if (heartBtn) {
            heartBtn.addEventListener("click", function() {
                toggleHeart(heartBtn); // Call the function to toggle heart color
            });
        }

        // Function to move the carousel left
        function moveLeft() {
            if (index > 0) {
                index--;
                carousel.style.transition = 'transform 0.3s ease'; // Smooth transition
                carousel.style.transform = `translateX(-${(index / totalImages) * 100}%)`; // Shift the carousel to the left
            }
        }

        // Function to move the carousel right
        function moveRight() {
            if (index < totalImages - 1) {
                index++;
                carousel.style.transition = 'transform 0.3s ease'; // Smooth transition
                carousel.style.transform = `translateX(-${(index / totalImages) * 100}%)`; // Shift the carousel to the right
            }
        }

        // Event listeners for carousel buttons
        if (leftBtn) leftBtn.addEventListener("click", moveLeft);
        if (rightBtn) rightBtn.addEventListener("click", moveRight);

        // Select all the star elements and add click event listeners
        const stars = carousel.querySelectorAll('.star'); // Modify the selector if stars are outside of carousels
        stars.forEach(star => {
            star.addEventListener('click', function() {
                rate(star); // Call the rating function on click
            });
        });
    });
});
