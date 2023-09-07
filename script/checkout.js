import {cart , deleteCart} from "../script/cart.js";
import { products } from "../data/products.js";
import { updateMoneyInCents } from "./utils/money.js";


let cartSummeryHTML = '';

cart.forEach( (cartItem)=>{
    const productId = cartItem.productId;


    let matchingProduct ;

    products.forEach((product)=>{
        if(product.id === productId){
            matchingProduct = product;
        }
    });
    console.log(matchingProduct);
cartSummeryHTML +=`
<div class="cart-item-container js-cart-item-container-${productId}">
            <div class="delivery-date">
              Delivery date: Wednesday, June 15
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${updateMoneyInCents(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-delete ="${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>

                <div class="delivery-option">
                  <input type="radio" class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" checked class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">s
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

`
});
document.querySelector('.js-cart-order-summary').innerHTML = cartSummeryHTML;


document.querySelectorAll('.js-delete-link')
.forEach((link) =>{
  link.addEventListener('click' , ()=>{
  const productDelete = link.dataset.productDelete; 
  deleteCart(productDelete);  
  console.log(cart); 


    const deleteFromCart = document.querySelector(`.js-cart-item-container-${productDelete}`);
 deleteFromCart.remove();
  });
  
});



