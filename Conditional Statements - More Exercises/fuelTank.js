function fuelTank(input) {
    let fuelType = input[0];
    let fuelTankInLiters = Number(input[1]);
    let fuelTypeLowerCase = fuelType.toLowerCase();

    if (fuelType !== "Diesel" && fuelType !== "Gasoline" && fuelType !== "Gas") {
        console.log('Invalid fuel!');
    } else if (fuelTankInLiters >= 25) {
        console.log(`You have enough ${fuelTypeLowerCase}.`);
    } else if (fuelTankInLiters < 25) {
        console.log(`Fill your tank with ${fuelTypeLowerCase}!`);
    }
}

fuelTank(["Gas", "25"]);
