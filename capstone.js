var itemPrices = new Array();
var itemNames = new Array();
  var shopCart = new Array ();
function addToCart(itemName, itemPrice){
 //step 1 find the element
  // var cart = document.getElementById("shoppingcart");
 
 //cart.innerHTML +=  "<p>" + itemName + ", $ " + itemPrice + "</p>";


itemNames.push(itemName); 
itemPrices.push(itemPrice); 



}


function disp(){
var result="";
var sum = 0.0;
for (var i = 0; i < itemNames.length; i++) {     
     result += (itemNames[i] + " : $" + itemPrices[i]) ;
     

}

for(var i=0; i < itemPrices.length; i++){

    sum += itemPrices[i];

}

tax = sum * 1.06;

alert("Your items: " + result + " Total: $" + sum.toFixed(2) + " With tax: $"+ tax.toFixed(2));

}

