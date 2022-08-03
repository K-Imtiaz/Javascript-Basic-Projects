console.log();
//continue;
var numbers = [10, 20, 23, 32, 51, 36, 67, 56, 87, 101, 200]
for (i = 0; i < numbers.length; i++) {
    var number = numbers[i]
    if (number > 50) {
        continue;
    }
    console.log(number);
}