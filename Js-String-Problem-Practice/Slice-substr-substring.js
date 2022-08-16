// String length
let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let textLength = text.length;
console.log(textLength);

// String Parts

// String Slice count from 1
let str = 'Apple,Banana,Kiwi';
let strPart = str.slice(6, 12);
console.log(strPart);

// reverse slice
let fruits = 'Apple,Banana,Kiwi,imtu';
let fruitsPart = fruits.slice(-9, -5);
console.log(fruitsPart);



let New = 'Apple,Banana,Kiwi';
let NewPart = New.slice(6);
console.log(NewPart);

//conting from end
let New2 = 'Apple,Banana,Kiwi';
let NewPart2 = New2.slice(-11);
console.log(NewPart2);



// .................. ......................

// String Substring
// substring and slice are similar but start with 0
let boys = 'Imtiaz,Shuvo,Shimul,Fahim';
let boysPart = boys.substring(7, 12);
console.log(boysPart);


//substr print the rest of the part of string
let boys2 = 'Imtiaz,Shuvo,Shimul,Fahim';
let boysPart2 = boys2.substr(7, 12);
console.log(boysPart2);

let boys3 = 'Imtiaz,Shuvo,Shimul,Fahim';
let boysPart3 = boys3.substr(-5);
console.log(boysPart3);


//concat  used an alternative of + operator
let text1 = "Hello";
let text2 = "world";
let text3 = text1.concat(" ", text2);
console.log(text3);

let textX = "Hello".concat(" ", "World!!!!!");
console.log(textX);

//a string can be converted to an array with the split() method
let x = "a,b,c,d,e,f,g,h";
const xArray = x.split(",")
const xArray2 = x.split(",")
console.log(xArray[0]);
console.log(xArray2);


//Join
const lyrics = ['You are a good person', 'That why I dont deserve you', 'But I love you so much',
    'rong jomeche sada kala'
];

const newSong = lyrics.join('. ')
console.log(newSong);