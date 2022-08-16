//math power
const result = Math.pow(2, 3)
    // console.log(result);

//math.abs
const boy = 25;
const girl = 45;
const gap = Math.abs(boy - girl);
console.log(gap);
if (gap < 5) {
    console.log("You can marry");
} else {
    console.log("Cannot marry");
}

//-------------------
//round,ceil,floor
//-------------------------
const num = 2.45767;
const fullNumber = Math.round(num);
console.log(fullNumber);
const result2 = Math.ceil(2.0000001);
console.log(result2);
const result3 = Math.floor(45.8775);
console.log(result3);


//====================== Random number
// console.log(Math.random());
const random = Math.random() * 200; //for float number
console.log(random);

for (let i = 0; i < 20; i++) {
    const randomInt = Math.round(Math.random() * 6); //for float number
    console.log(randomInt);
}