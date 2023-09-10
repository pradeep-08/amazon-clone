 export let cart = JSON.parse(localStorage.getItem('cart'));



 if(!cart){
    cart =  
    [
       {
           productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c231" , 
           quantity : 2 
       } , {
           productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6", 
           quantity : 5
       }
    ];
 }
 
 
    function saveDataToStorage(){
        localStorage.setItem('cart' , JSON.stringify(cart));
    }

 export function updatingCart (productId){
    let matchingItems;
        cart.forEach((item)=> {
            if (productId === item.productId){
                matchingItems = item;
            }
            
        });

        if(matchingItems){
            matchingItems.quantity += 1;
        }else{
            cart.push({productId : productId  , quantity : 1})
        }
        console.log(cart);
        saveDataToStorage()
     
}

  export function deleteCart (productId){
        const newArray = []; 
        cart.forEach((cartItem)=>{
            if(cartItem.productId !== productId){
                newArray.push(cartItem);
            }
        });
        cart = newArray;
        saveDataToStorage()
  };
