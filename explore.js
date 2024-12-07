document.addEventListener("DOMContentLoaded", function() {
    // Select all carousel containers
    const carousels = document.querySelectorAll(".image-carousel");

    // Loop through each carousel and set up its functionality
    carousels.forEach(function(carousel) {
        const leftBtn = carousel.parentElement.querySelector(".left-btn");
        const rightBtn = carousel.parentElement.querySelector(".right-btn");
        const heartBtn = carousel.parentElement.querySelector(".heart-btn");
        const heartCounter = carousel.parentElement.querySelector(".heart-counter");

        let index = 0; // Start at the first image
        const images = carousel.children; // Get all the images in this carousel
        const totalImages = images.length; // Total number of images in this carousel

        // Dynamically set the carousel width to accommodate all images
        carousel.style.width = `${totalImages * 100}%`;

        // Heart counter functionality
        let heartCount = 0;
        heartBtn.addEventListener("click", function() {
            heartCount++; // Increment the heart count
            heartCounter.textContent = heartCount; // Update the heart count display
            heartBtn.textContent = heartCount > 0 ? "❤️" : "🤍"; // Toggle heart color
        });

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
        leftBtn.addEventListener("click", moveLeft);
        rightBtn.addEventListener("click", moveRight);
    });
});
