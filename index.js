
function cartClicked() {

   const elem = document.getElementsByClassName('cart');
   if (elem[0].classList.contains('cart-active')){
    elem[0].classList.toggle('cart-active');
    elem[0].innerHTML = '<i class="fa fa-shopping-cart"></i> Add to Cart';
    alert('Item removed from cart!')
     }
     else{
        elem[0].classList.toggle('cart-active');
        elem[0].innerHTML = '<i class="fa fa-shopping-cart"></i> Added to Cart';
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
    }   
 }
