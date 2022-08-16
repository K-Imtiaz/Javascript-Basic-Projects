var shoppingCart = {
    books: 3,
    sunglass: 1,
    mouse: 1,
    keyboard: 1,
    pen: 25,
    coke: 12,
    shoes: 2,
    bottle: 10
}

const keys = Object.keys(shoppingCart);
console.log(keys);
const values = Object.values(shoppingCart);
console.log(values);

//hardest way
for (var i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyName, propertyValue);
}

//easy way by for in loop
for (var propertyName in shoppingCart) {
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}