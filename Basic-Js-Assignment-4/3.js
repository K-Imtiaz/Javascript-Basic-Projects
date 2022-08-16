function oilPrice(diesel, petrol, octane) {

    if (typeof diesel !== 'number') {
        return ' Input valid information ';
    } else if (typeof petrol !== 'number') {
        return ' Input valid information ';
    } else if (typeof octane !== 'number') {
        return ' Input valid information ';
    } else {
        const dieselPrice = diesel * 114;
        const petrolPrice = petrol * 130;
        const octanePrice = octane * 135;
        let total = (dieselPrice + petrolPrice + octanePrice);
        return total;
    }

}
// const LitterOfDieselPetronOctane = oilPrice(3, 5, 7);
// console.log("Oil price: ", LitterOfDieselPetronOctane);