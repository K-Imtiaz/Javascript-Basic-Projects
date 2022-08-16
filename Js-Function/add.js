function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
const result1 = add(12, 13);
const result2 = add(50, 10);
const finalResult = add(result1, result2);

console.log("Result 1 : ", result1);
console.log("Result 2 : ", result2);
console.log("Final Result: ", finalResult);