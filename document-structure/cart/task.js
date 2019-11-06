const basket = document.querySelector('.cart__products');
const products = document.querySelectorAll('.product'); 

products.forEach(el => {
  const movement = el.querySelectorAll('.product__quantity-control');
  const counting = el.querySelector('.product__quantity-value');
   
  movement.forEach(move => {
     move.addEventListener('click', (event) => {
       if (event.target.classList.contains('product__quantity-control_dec')) {
        if(counting.textContent == '1') {
          return false;
        }  
        counting.textContent--;
          
       } else if (event.target.classList.contains('product__quantity-control_inc')) {
         counting.textContent++;
       }
     })  
  })

  const addProduct = el.querySelector('.product__add');
  
  addProduct.addEventListener('click', (event) => {
    let image = event.target.closest('.product').querySelector('.product__image').cloneNode();
    
    if (!basket.querySelector(`[data-id="${el.dataset.id}"]`)) {
      let basketChild = document.createElement('div');
      basketChild.dataset.id = el.dataset.id;

      basketChild.innerHTML = `
        <img class="cart__product-image" src="${image.src}">
        <div class="cart__product-count">${counting.textContent}</div>
      `;

      basket.appendChild(basketChild);
    
    } else {
      let presentValue = basket.querySelector(`[data-id="${el.dataset.id}"]`).querySelector('.cart__product-count');
      presentValue.textContent = Number(presentValue.textContent) + Number(counting.textContent);
    } 
  })
});





