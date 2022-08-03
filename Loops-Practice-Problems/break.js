// BREAK
for (var i = 1; i <= 20; i++) {
    console.log(i);
    if (i > 5) {
        break;
    }
}
var chocoGiven = 0;
while (chocoGiven < 10) {
    console.log("Chocolate den, please");
    chocoGiven++;
    if (chocoGiven > 5) {
        break;
    }
}
console.log();
var items = ['bootle', 'mouse', 'glass', 'pen', 'headphones', 'tissue', 'coke', 'book', 'notebook'];
for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item == 'pen') {
        break
    }
    console.log(item);
}

console.log();
for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log();
var numbers = [10, 20, 23, 32, 51, 36, 67, 56, 87, 101, 200]
for (i = 0; i < numbers.length; i++) {
    var number = numbers[i]
    if (number > 100) {
        break;
    }
    console.log(number);
}