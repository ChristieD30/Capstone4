var itemPrices = new Array();
var itemNames = new Array();
  var shopCart = new Array ();
function addToCart(itemName, itemPrice){
 //step 1 find the element
  var cart = document.getElementById("shoppingcart");
 
  cart.innerHTML +=  "<p>" + itemName + " " + itemPrice + "</p>";


itemNames.push(itemName); 
itemPrices.push(itemPrice); 



}


function disp(){
var result="";

for (var i = 0; i < itemNames.length; i++) {     
     result += (itemNames[i] + " : $" + itemPrices[i]); 

 
}
return console.log(result);
}