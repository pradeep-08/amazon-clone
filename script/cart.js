 export const cart = [
    {
        productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c231" , 
        quantity : 2 
    } , {
        productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6", 
        quantity : 5
    }
 ];


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

     
}
