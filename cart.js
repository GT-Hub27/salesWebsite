             
 // Add to cart button

let carts = document.querySelectorAll('.add-cart');

let products = [
  {
    name: 'Diffuse-1',
    tag: 'diffuse1',
    price: 9,
    inCart: 0,
    img: "images/diffuse-1.jpg" 
    
  },
  {
    name: 'Reed-Dffuser-1',
    tag: 'reeddiffuse1',
    price: 12,
    inCart: 0,
    img: "images/reed-diffuser-1.jpg"
  },
  {
    name: 'Candle-3',
    tag: 'candle3',
    price: 4,
    inCart: 0
  }, 
  {
    name: 'Reed-Dffuser-4',
    tag: 'reeddiffuse4',
    price: 4,
    inCart: 0
  },
  {
    name: 'Diffuse-2',
    tag: 'diffuse2',
    price: 9,
    inCart: 0
  },
  {
    name: 'Diffuse-3',
    tag: 'diffuse3',
    price: 12,
    inCart: 0
  },

];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if (productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = JSON.parse(localStorage.getItem('productsInCart')) || {};

  if (cartItems[product.tag] == undefined) {
    cartItems[product.tag] = product;
    cartItems[product.tag].inCart = 1;
  } else {
    cartItems[product.tag].inCart += 1;
  }

  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem('totalCost');
  cartCost = cartCost ? parseInt(cartCost) : 0;
  localStorage.setItem('totalCost', cartCost + product.price);
}

// Cart section of checkout

function displayCart() {
  let cartItems = JSON.parse(localStorage.getItem('productsInCart')) || {};
  let productContainer = document.querySelector('.products');
  if (productContainer && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
        <div class="products"> 
          <ion-icon name="close-outline"></ion-icon>
          <img src="./images/${item.tag}.jpg">
          <span>${item.name}</span>
        </div>
      `;
    });
  }
}



 // backtics a way to inject vieraiable insdie with a string


onLoadCartNumbers();
displayCart();
