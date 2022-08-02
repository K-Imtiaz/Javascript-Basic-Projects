var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Use push to add elemnts to an array as the last elements of an array
numbers.push(10)
console.log(numbers);
var friends = ['Imtiaz', 'Akash', 'Sojib', 'Rayhan'];
friends.push("Sifat");
friends.push("Sabbir");
friends.push("Shuvo", "Shimul")
console.log(friends);

//use pop to remove the last elemnts of an array
console.log(numbers);
// numbers.pop();
var elements = numbers.pop();
// console.log(numbers);
console.log(elements);

//use unshift to add add an elemets at the beginning of an array
console.log(friends);
friends.unshift("Momin")
console.log(friends);

//use shift to add add an elemets at the end of an array
friends.shift();
console.log(friends);