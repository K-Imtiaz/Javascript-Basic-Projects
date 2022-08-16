var shoppingCart = {
        books: 3,
        sunglass: 1,
        mouse: 1,
        keyboard: 1,
        pen: 25,
        coke: 12
    }
    //specific properties value find
var penCount = shoppingCart.pen;
console.log("Pen count:", penCount);
// console.log(shoppingCart);


//Just Properties/key show in terminal
var properties = Object.keys(shoppingCart);
console.log(properties);

//Just Values of the properties shows in terminal
var propertiesValues = Object.values(shoppingCart);
console.log(propertiesValues);


var propertyName = 'books';
var propertiesValue = shoppingCart[propertyName];
console.log(propertiesValue);

//set property value
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart[propertyName] = 89;
console.log(shoppingCart);