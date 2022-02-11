function newHouse(input) {
    let typeFlower = input[0];
    let amountFlower = Number(input[1]);
    let budget = Number(input[2]);
    let flowercost = 0;
    let cost = 0;

    switch (typeFlower) {
        case "Roses": 
            flowercost = amountFlower * 5.00;
            if(amountFlower > 80) {
                flowercost = flowercost * 0.90;
            }
            break;
        case "Dahlias":
            flowercost = amountFlower * 3.80;
            if(amountFlower > 90) {
                flowercost = flowercost * 0.85;
            } 
            break;
        case "Tulips":
            flowercost = amountFlower * 2.80;
            if(amountFlower > 80) {
                flowercost = flowercost * 0.85;
            } 
            break;
        case "Narcissus":
            flowercost = amountFlower * 3.00;
            if(amountFlower < 120) {
                flowercost = flowercost * 1.15;
            } 
            break;
        case "Gladiolus":
            flowercost = amountFlower * 2.50;
            if(amountFlower < 80) {
                flowercost = flowercost * 1.20;
            } 
            break;
    }
    if (flowercost <= budget) {
        cost = Math.abs(budget - flowercost);
        console.log(`Hey, you have a great garden with ${amountFlower} ${typeFlower} and ${cost.toFixed(2)} leva left.`);
    } else if (flowercost >= budget ) {
        cost = Math.abs(budget - flowercost);
        console.log(`Not enough money, you need ${cost.toFixed(2)} leva more.`);
    }
}

newHouse(["Dahlias","112","460"]);
