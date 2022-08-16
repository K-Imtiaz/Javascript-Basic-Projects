function publicBusFare(totalPassenger) {
    if (typeof totalPassenger !== 'number') {
        return 'Input Valid Number ';
    } else {
        const busPassenger = (totalPassenger % 50);
        const remainingPassenger = (busPassenger % 11);
        return remainingPassenger * 250;

    }

}
const restPassengerCost = publicBusFare(263);
console.log("Public Bus cost: ", restPassengerCost);