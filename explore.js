document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle heart icon color
    function toggleHeart(button) {
        button.innerHTML = button.innerHTML === '🤍' ? '❤️' : '🤍';
    }

    // Function to handle the star rating
    function rate(star) {
        const stars = star.parentNode.querySelectorAll('.star');
        const index = Array.from(stars).indexOf(star);

        stars.forEach((s, i) => {
            if (i <= index) {
                s.textContent = '★';
                s.classList.add('filled');
            } else {
                s.textContent = '☆';
                s.classList.remove('filled');
            }
        });
    }

    // Loop through each carousel and set up its functionality
    document.querySelectorAll(".image-carousel").forEach(function(carousel) {
        const leftBtn = carousel.parentElement.querySelector(".left-btn");
        const rightBtn = carousel.parentElement.querySelector(".right-btn");
        const heartBtn = carousel.parentElement.querySelector(".heart-btn");

        const images = carousel.children;
        const totalImages = images.length;

        if (totalImages === 0) return;

        let index = 0;
        carousel.style.width = `${totalImages * 100}%`;

        // Heart button functionality
        if (heartBtn) heartBtn.addEventListener("click", function() {
            toggleHeart(heartBtn);
        });

        // Function to move the carousel left
        function moveLeft() {
            if (index > 0) {
                index--;
                carousel.style.transition = 'transform 0.3s ease';
                carousel.style.transform = `translateX(-${(index / totalImages) * 100}%)`;
            }
        }

        // Function to move the carousel right
        function moveRight() {
            if (index < totalImages - 1) {
                index++;
                carousel.style.transition = 'transform 0.3s ease';
                carousel.style.transform = `translateX(-${(index / totalImages) * 100}%)`;
            }
        }

        // Event listeners for carousel buttons
        if (leftBtn) leftBtn.addEventListener("click", moveLeft);
        if (rightBtn) rightBtn.addEventListener("click", moveRight);

        // Select all the star elements and add click event listeners
        carousel.querySelectorAll('.star').forEach(star => {
            star.addEventListener('click', function() {
                rate(star);
            });
        });
    });
})
