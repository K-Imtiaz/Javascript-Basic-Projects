// Array by number

//declare an array
var marks = [12, 19, 20, 41, 32, 73, 67, 83, 90, 100, 18, 1];

// Find index number
var mark = marks.indexOf(32);
console.log(mark);
//Array length
console.log(marks.length);
// Replace of the index number;
marks[mark] = 299;
console.log(marks);
// marks[299] = mark;
// console.log(marks);


// Array by string

//declare an array
var name = ["Imtiaz", "Shimul", "Fahim", "Shuvo"]
    //array length
console.log(name);

//indexof shimul
var shimulIndex = name.indexOf("Shimul");
console.log(shimulIndex);

// replace indexof
name[shimulIndex] = "Khondokar";
console.log(name);

// name["Ahmed"] = shimulIndex;
// console.log(name);

//push
name.push("Sifat");
console.log(name);

//pop
name.pop();
console.log(name);


//unshift
name.unshift("Labib");
console.log(name);

//shift 
name.shift();
console.log(name);

// undefined;
var array;
console.log(array);