var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
var price=Math.floor(Math.random()*100+1)
cart.push({[item]: price})
console.log(`${item} has been added to your cart.`)
return cart
}

function viewCart() {

}

function total() {
  // write your code here
  for (var i=0; i<cart.length; i++) {
    var value += cart[i][0]
    return value
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
