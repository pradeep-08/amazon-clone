  import { cart , updatingCart } from "../script/cart.js";
  import { products } from "../data/products.js";
  import { updateMoneyInCents } from "./utils/money.js";
  
  let productHtml = '';
        products.forEach((products) => {
        productHtml += `
                <div class="product-container">
                    <div class="product-image-container">
                        <img class="product-image" src = "${products.image}">
                    </div>

                    <div class="product-name limit-text-to-2-lines">
                        ${products.name}
                    </div>

                    <div class="product-rating-container">
                        <img class="product-rating-stars"
                        src="images/ratings/rating-${products.rating.stars * 10}.png">
                        <div class="product-rating-count link-primary">
                        ${products.rating.count}
                        </div>
                    </div>

                    <div class="product-price">
                    ₹${updateMoneyInCents(products.priceCents)}
                    </div>

                    <div class="product-quantity-container">
                <select>
                <option selected value="1">Add</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart js-added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart"  data-product-Id="${products.id}">
                Add to Cart
            </button>
            </div>
            
            
   `
   
    });

            document.querySelector('.js-product-grid').innerHTML = productHtml;


            function keepAddQty (){
                let cartQuantity = 0;
                cart.forEach((items)=>{
                    cartQuantity += items.quantity;
                
                })
                document.querySelector('.js-cart-qty').innerHTML = cartQuantity;
            }
    
            document.querySelectorAll('.js-add-to-cart')        
            .forEach((button)=>{
            button.addEventListener('click' , () => {
                
                const  productId = button.dataset.productId;
                updatingCart(productId);
                keepAddQty();
    });
        
    /*document.querySelectorAll(".js-add-to-cart").forEach((button)=>{
    
        button.addEventListener('click' , ()=>{
            
    })
    function added(){
        let image = document.querySelectorAll(".added-to-cart");
        image.style.opacity = 5;
    }
});*/


        
          
        });
        