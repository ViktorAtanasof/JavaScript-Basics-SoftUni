function harvest(input) {
    let loze = Number(input[0]);
    let grapes = Number(input[1]);
    let requiredLitersForWine = Number(input[2]);
    let employees = Number(input[3]);
    let diff = 0;

    let totalGrapes = loze * grapes;
    let wine = totalGrapes * 0.40 / 2.5;

    if (wine < requiredLitersForWine) {
        diff = Math.abs(requiredLitersForWine - wine);
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);
    } else if (wine >= requiredLitersForWine) {
        diff = Math.abs(wine - requiredLitersForWine);
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        let winePerPerson = diff / employees;
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(winePerPerson)} liters per person.`);
    }
}

harvest(["1020", "1.5", "425", "4"]);
