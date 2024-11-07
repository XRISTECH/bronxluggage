function addToCart(itemName, price, imageSrc) {
    let cartItems = localStorage.getItem('cartItems');
    cartItems = cartItems ? JSON.parse(cartItems) : [];
    cartItems.push({ name: itemName, price: price, image: imageSrc });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartIcon();
    updateCartIcon2();
    alert('Item added to cart');
  }
  
  function updateCartIcon() {
      const cartIcon = document.querySelector('.cart-icon');
      const cartItems = JSON.parse(localStorage.getItem('cartItems'));
      const cartItemCount = cartItems ? cartItems.length : 0;
  
      cartIcon.setAttribute('data-count', cartItemCount);
      localStorage.setItem('cartItemCount', cartItemCount);
    
    }
  
    function updateCartIcon2() {
      const cartIcon = document.querySelector('.cart-icon1');
      const cartItems = JSON.parse(localStorage.getItem('cartItems'));
      const cartItemCount = cartItems ? cartItems.length : 0;
   
      cartIcon.setAttribute('data-count', cartItemCount);
      localStorage.setItem('cartItemCount', cartItemCount);
    
    }
    function goToCart() {
      window.location.href = '../cart.html';
    }
  
    document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.querySelector('.cart-icon');
    const cartItemCount = localStorage.getItem('cartItemCount');
  
    if (cartItemCount) {
      cartIcon.setAttribute('data-count', cartItemCount);
    }
    updateCartIcon();
    updateCartIcon2();
  });


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
  