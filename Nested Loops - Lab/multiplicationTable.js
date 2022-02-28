function multiplicationTable() {

    for (let firstNum = 1; firstNum <= 10; firstNum++) {
        for (let secondNum = 1; secondNum <= 10; secondNum++) {
            for (let thirdNum = 1; thirdNum <= 10; thirdNum++) {
                let result = firstNum * secondNum;
                console.log(`${firstNum} * ${secondNum} = ${result}`);
            }
        }
    }
}

multiplicationTable(['222']);
