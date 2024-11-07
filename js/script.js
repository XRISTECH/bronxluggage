
  
const toggleSpan = document.querySelector('.toggle');
const dropdownDiv = document.getElementById('dropdown');
let isDropdownVisible = false;

// Toggle dropdown visibility when toggle span is clicked
toggleSpan.addEventListener('click', function(event) {
  event.stopPropagation(); // Prevent event from bubbling up to document
  if (!isDropdownVisible) {
    dropdownDiv.style.opacity = '0'; // Set initial opacity to '0'
    dropdownDiv.style.display = 'block';
    setTimeout(() => {
      dropdownDiv.style.opacity = '1'; // Transition opacity to '1'
    }, 10);
    isDropdownVisible = true;
  } else {
    dropdownDiv.style.opacity = '1'; // Set opacity to '1'
    setTimeout(() => {
      dropdownDiv.style.display = 'none'; // Hide the dropdown
    }, 300); // Wait for the transition to complete before hiding the dropdown
    isDropdownVisible = false;
  }
});

// Hide dropdown when clicked anywhere on the page
document.addEventListener('click', function() {
  if (isDropdownVisible) {
    dropdownDiv.style.opacity = '1'; // Set opacity to '1'
    setTimeout(() => {
      dropdownDiv.style.display = 'none'; // Hide the dropdown
    }, 300); // Wait for the transition to complete before hiding the dropdown
    isDropdownVisible = false;
  }
});
const navbar = document.getElementById('n1');
const scroll = document.getElementById('scroller');
const vcount = document.getElementById('visitor-count');
const cart = document.getElementById('cart');
const dp = document.querySelector('.dropdown');
document.addEventListener('scroll', () => {
  
  if (window.scrollY > 400) {
    
    scroll.style.display = 'block';
    vcount.style.color = 'black'
    cart.style.color = '#fb9a1a';
    navbar.style.position = 'fixed';
    navbar.style.top = '0px';
    
  } else {
    scroll.style.display = '';
    vcount.style.color = ''
    cart.style.color = 'white';
    navbar.style.position = '';
    navbar.style.top = '';
    
  }

  
});




$(document).ready(function() {
    $('#myCarousel').carousel();
  });   
  
  $('.carousel-control-prev').click(function() {
      $('#myCarousel').carousel('prev');
    });

    $('.carousel-control-next').click(function() {
      $('#myCarousel').carousel('next');
    });
    setInterval(function() {
      $('#myCarousel').carousel('next');
    }, 3000);
  

    window.addEventListener('DOMContentLoaded', function() {
      const tickerContent = document.getElementById('ticker-content');
    
      function updateTicker() {
        // Get current date, time, and location
        const currentDate = new Date().toDateString();
        const currentTime = new Date().toLocaleTimeString();
    
        // Get current location
        getCurrentLocation(function(location) {
          // Update ticker content
          tickerContent.textContent = `Current Date: ${currentDate} | Current Time: ${currentTime} | Location: ${location}`;
    
          // Repeat the update every second
          setTimeout(updateTicker, 1000);
        });
      }
    
      function getCurrentLocation(callback) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            function(position) {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
    
              // Fetch location data using latitude and longitude
              // Here, you can use any geolocation API or service to get the location information
    
              // For demonstration purposes, we'll use a simple example that displays latitude and longitude
              const location = `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
    
              callback(location);
            },
            function(error) {
              console.error('Error occurred while retrieving location:', error);
              callback('Location not available');
            }
          );
        } else {
          callback('Location not available');
        }
      }
    
      updateTicker();
    });
    