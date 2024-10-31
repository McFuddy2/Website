function loadComponent(file, elementId) {
    console.log("scripts.js loaded");
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('File not found');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading component:', error);
        });
}

// Adjust the paths according to your directory structure
loadComponent('header.html', 'header');
loadComponent('footer.html', 'footer');


let currentIndex = 0; // Track the current index
const totalImages = document.querySelectorAll('.carousel-slide').length; // Count total slides
const visibleImages = 3; // Number of images to show at a time

function updateCarousel() {
    const carousel = document.querySelector('.carousel-images');
    const offset = -(currentIndex * (100 / visibleImages)); // Calculate the offset based on the current index
    carousel.style.transform = `translateX(${offset}%)`; // Update the carousel position
}

function nextSlide() {
    if (currentIndex < totalImages - visibleImages) {
        currentIndex++; // Move to the next slide
    } else {
        currentIndex = 0; // Loop back to the first image
    }
    updateCarousel(); // Update the carousel display
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--; // Move to the previous slide
    } else {
        currentIndex = totalImages - visibleImages; // Loop back to the last set of images
    }
    updateCarousel(); // Update the carousel display
}

// Optional: Initialize the carousel position on page load
window.onload = updateCarousel;


// Array of certificate image sources
const certificates = [
    'images/certs/bootdev_certificate.png',
    'images/certs/bootdev_certificate(1).png',
    'images/certs/bootdev_certificate(2).png',
    'images/certs/bootdev_certificate(3).png',
    'images/certs/bootdev_certificate(4).png',
    'images/certs/bootdev_certificate(5).png',
    'images/certs/bootdev_certificate(6).png',
    'images/certs/bootdev_certificate(7).png',
    'images/certs/bootdev_certificate(8).png',
    'images/certs/bootdev_certificate(9).png',
    'images/certs/bootdev_certificate(10).png',
    'images/certs/bootdev_certificate(11).png',
    'images/certs/bootdev_certificate(12).png',
    'images/certs/certificateGlennBurgess.jpg',
    // Add more image paths as necessary
];

// Get the certificate image element
const certImage = document.getElementById('certImage');
let currentIndex2 = 0;

// Function to change the certificate image
function changeCertificate() {
    currentIndex2 = (currentIndex2 + 1) % certificates.length; // Cycle through certificates
    certImage.src = certificates[currentIndex2]; // Update image source
}

// Change certificate every 1 second
setInterval(changeCertificate, 1000); // 2000 milliseconds = 2 seconds

// Toggle the visibility of the Notable Concepts section
document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggle-concepts");
    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const concepts = this.nextElementSibling;
            concepts.style.display = concepts.style.display === "none" ? "block" : "none";
            this.textContent = concepts.style.display === "none" ? "View Notable Concepts" : "Hide Notable Concepts";
        });
    });
});
