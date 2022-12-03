
function cartClicked() {

   const elem = document.getElementsByClassName('cart');
   if (elem[0].classList.contains('cart-active')){
    elem[0].classList.toggle('cart-active');
    alert('Item removed from cart!')
     }
     else{
         elem[0].classList.toggle('cart-active');
    alert('Successfully added item to cart, Happy shopping!')
     }  
}
function wishlistClicked() {
    const elem = document.getElementsByClassName('wishlist');
    if (elem[0].classList.contains('wishlist-active')){
   elem[0].classList.toggle('wishlist-active');
   alert('Item removed from wishlist!')
    }
    else{
        elem[0].classList.toggle('wishlist-active');
   alert('Successfully added item to wishlist, keep exploring!')
    }   
 }
