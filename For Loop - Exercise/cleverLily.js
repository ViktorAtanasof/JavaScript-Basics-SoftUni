function cleverLily(input) {
    let age = Number(input[0]);
    let washingMachine = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toyCounter = 0;
    let savedMoney = 0;
    let money = 10;

    for (let a = 1; a <= age; a++) {
        if (a % 2 !== 0) {
            toyCounter++
        } else {
            savedMoney += money;
            money += 10;
            savedMoney -= 1;
        }
    }

    savedMoney += toyCounter * toyPrice;
    let diff = Math.abs(savedMoney - washingMachine);
    if (savedMoney >= washingMachine) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}

cleverLily(["21","1570.98","3"]);
