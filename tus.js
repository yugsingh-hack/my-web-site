// script.js


let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function changeCarousel() {
    // Hide all carousel items
    carouselItems.forEach(item => item.style.display = 'none');
    
    // Show current item
    carouselItems[currentIndex].style.display = 'block';
    
    // Update index for next item
    currentIndex = (currentIndex + 1) % carouselItems.length;
}

// Set initial display for the carousel
changeCarousel();

// Change carousel every 3 seconds
setInterval(changeCarousel, 3000);

// Show first item initially
carouselItems.forEach(item => item.style.display = 'none');
carouselItems[0].style.display = 'block';

// Search functionality for navigation (filtering items in the navbar)
const searchInput = document.querySelector('.search-bar');
searchInput.addEventListener('keyup', (e) => {
  const searchText = e.target.value.toLowerCase();
  const navLinks = document.querySelectorAll('.nav-links li');
  
  navLinks.forEach(link => {
    if (link.textContent.toLowerCase().includes(searchText)) {
      link.style.display = 'block';
    } else {
      link.style.display = 'none';
    }
  });
});
