
const productList = document.getElementById('productList');
const cartItems = document.querySelector('.cart-items');
const loginForm = document.getElementById('login');
const registrationForm = document.getElementById('registration');
const buyitems= document.querySelector('.buy-items')



productList.addEventListener('click', function (event) {
  if (event.target.className === 'button 1') {
    const productItem = event.target.closest('.product-item');
    const productName = productItem.querySelector('h3').textContent;
    const productPrice = productItem.querySelector('.price').textContent;
    const productImageSrc = productItem.querySelector('img').getAttribute('src');

    
    const cartItem = document.createElement('li');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <div class="product-info">
        <img src="${productImageSrc}" alt="${productName}">
        <p>${productName}</p>
      </div>
      <p>${productPrice}</p>
      <button class="remove">Remove</button>
      <button class="buy">Buy</button>
    `;

    cartItems.appendChild(cartItem);
  }
});
productList.addEventListener('click', function (event) {
    if (event.target.className === 'button 2') {
      const productItem = event.target.closest('.product-item');
      const productName = productItem.querySelector('h3').textContent;
      const productPrice = productItem.querySelector('.price').textContent;
      const productImageSrc = productItem.querySelector('img').getAttribute('src');
  
      
      const cartItem = document.createElement('li');
      cartItem.className = 'buy-item';
      cartItem.innerHTML = `
        <div class="product-info">
          <img src="${productImageSrc}" alt="${productName}">
          <p>${productName}</p>
        </div>
        <p>${productPrice}</p>
      `;
  
      buyitems.appendChild(cartItem);
    }
  });
  


cartItems.addEventListener('click', function (event) {
    if (event.target.className === 'remove') {
      const cartItem = event.target.closest('.cart-item');
      cartItem.remove();
    }
  });

  cartItems.addEventListener('click', function (event) {
    if (event.target.className === 'buy') {
      const cartItem = event.target.closest('.cart-item');
      buyitems.appendChild(cartItem)
    }
  });


const userDatabase = [ { username: 'raju', password: 'king' }
  ];
  
  
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
  
    const user = userDatabase.find(user => user.username === username && user.password === password);
  
    if (user) {
      document.getElementById('productList').scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('Invalid username or password. Please try again.');
    }
  
    loginForm.reset();
  });
  
  registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();
  
   
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
  
   
    const userExists = userDatabase.some(user => user.username === newUsername);
  
    if (userExists) {
      alert('Username already exists. Please choose a different username.');
    } else {
      
      userDatabase.push({ username: newUsername, password: newPassword });
      alert('Registration successful!');
    }


    
  
    registrationForm.reset();
  });
  
