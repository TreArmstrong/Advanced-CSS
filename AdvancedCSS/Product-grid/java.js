const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

function addToCart(event) {
  const product = event.target.closest('.product');
  const productName = product.querySelector('h3').textContent;
  const productPrice = product.querySelector('p').innertext;

  console.log('Added ${productName.trim()} to the cart for ${productPrice.trim()}')
  alert('Added ${productName} to the cart!');
}

addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Couldn't figure out how to get it to target the text to log to console