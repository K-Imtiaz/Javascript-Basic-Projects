// Variable, variable type,

// var x = 10; //
// Redeclaring a variable using the var keyword can impose problems.
// Redeclaring a variable inside a block will also redeclare the variable outside the block:



// let y = 15;
// Variables defined with let cannot be Redeclared.
// Variables defined with let must be Declared before use.
// Variables defined with let have Block Scope.


// const pi = 3.141592653589793;
// Variables defined with const cannot be Redeclared.
// Variables defined with const cannot be Reassigned.
// Variables defined with const have Block Scope.


// data,data types, primitive, non-primitive data types.
var x = 10;
var y = 5;
var add = x + y;
var sub = x - y;
var mul = x * y;
var div = x / y;
var remainder = x % y;

console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
console.log(remainder);

var name1 = "Khondokar";
var name2 = ' Imtiaz';
var name3 = " Ahmed"
var fullName = name1 + name2 + name3;
console.log(typeof fullName);
console.log(fullName);


var num1 = 10.278378;
var num2 = 20.1783;
var total = num1 + num2;
console.log(total);
totalNum = total.toFixed(2)
console.log(totalNum);

//ParshInt
var sum1 = 75.012;
var sumParshInt = parseInt(sum1);
console.log(sumParshInt);

//ParshFloat
var s = 84.8788;
var sFloat = parseFloat(s);
console.log(s);

// short hand
++;
--;