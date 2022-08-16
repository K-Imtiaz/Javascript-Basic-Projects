//Return
function add(number1, number2) {
    console.log(number1, number2);
    var sum = number1 + number2;
    //console.log(sum);
    return sum;
    // return 15;
}
// add(45, 15);
var total = add(80, 20);
console.log("Total: ", total);

//price of singara with right quantity
function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;

    return quantity;
}
var myTaka = 250;
var singaras = bringSingara(myTaka);
console.log("Eating singaras: ", singaras);