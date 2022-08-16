function make_Avg(a, b, c) {
    var total = a + b + c;
    var average = total / 3;
    return average;
}
const valueOfa = 100;
const valueOfb = 90
const valueOfc = 84;

var myAverage = make_Avg(valueOfa, valueOfb, valueOfc);
console.log("Average is: ", myAverage);