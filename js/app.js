 // Global variables
 let currentPage = 1;
 const itemsPerPage = 3;
 const products = document.querySelectorAll('.product');

 // Function to display the items for the current page
 function displayPage() {
   // Calculate the index of the first and last items to display
   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;

   // Hide all products
   products.forEach(product => {
     product.style.display = 'none';
   });

   // Display the items for the current page
   for (let i = startIndex; i < endIndex && i < products.length; i++) {
     products[i].style.display = 'block';
   }
 }

 // Function to handle the previous button click
 function previousPage() {
   if (currentPage > 1) {
     currentPage--;
     displayPage();
   }
 }

 // Function to handle the next button click
 function nextPage() {
   const totalPages = Math.ceil(products.length / itemsPerPage);
   if (currentPage < totalPages) {
     currentPage++;
     displayPage();
   }
 }

 // Display the initial page
 displayPage();

 button = document.querySelector('.btn-add-to-cart');

 var isListView = false;
function addToCart(itemName, price, imageSrc) {
 let cartItems = localStorage.getItem('cartItems');
 cartItems = cartItems ? JSON.parse(cartItems) : [];
 cartItems.push({ name: itemName, price: price, image: imageSrc });
 localStorage.setItem('cartItems', JSON.stringify(cartItems));
 updateCartIcon();
 updateCartIcon2();
 const cartItemCount = cartItems ? cartItems.length : 0;
 if (button.textContent !== "Added to Cart") {
     alert(cartItemCount +' Items added to cart');

   
   }



}

function updateCartIcon2() {
   const cartIcon = document.querySelector('.cart-icon1');
   const cartItems = JSON.parse(localStorage.getItem('cartItems'));
   const cartItemCount = cartItems ? cartItems.length : 0;

   cartIcon.setAttribute('data-count', cartItemCount);
   localStorage.setItem('cartItemCount', cartItemCount);
 
 }

function updateCartIcon() {
 const cartIcon = document.querySelector('.cart-icon');
 const cartItems = JSON.parse(localStorage.getItem('cartItems'));
 const cartItemCount = cartItems ? cartItems.length : 0;

 cartIcon.setAttribute('data-count', cartItemCount);
 localStorage.setItem('cartItemCount', cartItemCount);
}

function goToCart() {
 window.location.href = 'cart.html';
}
function goToCart2() {
  window.location.href = '../cart.html';
 }
function applyFilters() {
 const brandFilter = document.getElementById('brand').value;
 const colorFilter = document.getElementById('color').value;
 const casingFilter = document.getElementById('casing').value;
 const priceFilter = document.getElementById('price').value;

 const products = document.querySelectorAll('.product');

 products.forEach(product => {
   const brand = product.getAttribute('data-brand');
   const color = product.getAttribute('data-color');
   const casing = product.getAttribute('data-casing');
   const price = parseInt(product.getAttribute('data-price'));

   const priceFilterValue = parseInt(priceFilter);

   if (
     (brandFilter === '' || brand === brandFilter) &&
     (colorFilter === '' || color === colorFilter) &&
     (casingFilter === '' || casing === casingFilter) &&
     (isNaN(priceFilterValue) || price < priceFilterValue)
   ) {
     product.style.display = 'block';
   } else {
     product.style.display = 'none';
   }
 });
}

function resetFilters() {
 document.getElementById('brand').value = '';
 document.getElementById('color').value = '';
 document.getElementById('casing').value = '';
 document.getElementById('price').value = '';

 const products = document.querySelectorAll('.product');
 products.forEach(product => {
   product.style.display = 'block';
 });
}
applyFilters();
function toggleView(viewType) {
 isListView = viewType === 'list';
 const productsContainer = document.querySelector('.products');
 if (isListView) {
   productsContainer.classList.add('list-view');
   productsContainer.classList.remove('grid-view');
 } else {
   productsContainer.classList.remove('list-view');
   productsContainer.classList.add('grid-view');
 }
}

document.addEventListener('DOMContentLoaded', function() {
 const cartIcon = document.querySelector('.cart-icon');
 const cartItemCount = localStorage.getItem('cartItemCount');

 if (cartItemCount) {
   cartIcon.setAttribute('data-count',cartItemCount);
 }
 updateCartIcon();
 updateCartIcon2();
});