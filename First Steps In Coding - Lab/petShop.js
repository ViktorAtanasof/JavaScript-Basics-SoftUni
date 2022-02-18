function petShop(input) {
    let dogsFood = Number(input[0]* 2.5);
    let catsFood = Number(input[1]* 4);

    let totalSum = dogsFood + catsFood;
    console.log(`${totalSum} lv.`);
}

zooShop(["5","4"]);
