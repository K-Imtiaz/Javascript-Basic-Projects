var givenMoney = 1000;
var perKgApplesPrice = 400;
var perKgOrangePrice = 300;
var totalPrice = perKgApplesPrice + perKgOrangePrice;
console.log("One kg apple price " + perKgApplesPrice);
console.log("One kg orange price " + perKgOrangePrice);
console.log("Total price of 1 kg apple and oranges price is " + totalPrice + " Taka");
var remainingMoney = givenMoney - totalPrice;
console.log("Remaining money is " + remainingMoney + "Taka");