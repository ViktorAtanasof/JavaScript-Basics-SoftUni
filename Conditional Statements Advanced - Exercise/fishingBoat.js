function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermans = Number(input[2]);
    let price = 0;
    let cost = 0;

    switch(season) {
        case "Spring":
            price = 3000;
        break;
        case "Summer":
        case "Autumn":
            price = 4200;
        break;
        case "Winter":
            price = 2600;
        break;
    }
    if (fishermans <= 6) {
        price = price * 0.90;
    } else if(fishermans >= 7 && fishermans <= 11) {
        price = price * 0.85;
    } else if(fishermans >= 12) {
        price = price * 0.75;
    } 
    if (fishermans % 2 === 0 && season !== "Autumn") {
        price = price * 0.95;
    }
    if (price <= budget) {
        cost = Math.abs(price - budget);
        console.log(`Yes! You have ${cost.toFixed(2)} leva left.`);
    } else if (price >= budget) {
        cost = Math.abs(price - budget);
        console.log(`Not enough money! You need ${cost.toFixed(2)} leva.`);
    }
}

fishingBoat(["2000","Winter","13"]);
