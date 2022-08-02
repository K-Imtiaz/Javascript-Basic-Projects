var numbers = [25, 30, 78, 11, 90, 100];
//1. get elements by index
console.log(numbers);
console.log(numbers.length);

//2. set elemnts value
var second = numbers[2]
console.log(second);
numbers[5] = 199;
numbers[4] = 299;
console.log(numbers);

// 3.find Index of an elements
// var positionIndex = numbers.indexOf(78);
var positionIndex = numbers.indexOf(75);
console.log(positionIndex);