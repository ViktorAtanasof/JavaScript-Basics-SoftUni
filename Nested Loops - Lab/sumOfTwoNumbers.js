function sumOfTwoNumbers(input) {
    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let goalNumber = Number(input[2]);
    let combinations = 0;

    for (let i = startInterval; i <= endInterval; i++) {
        for (let a = startInterval; a <= endInterval; a++) {
            combinations++;
            if (i + a === goalNumber) {
                console.log(`Combination N:${combinations} (${i} + ${a} = ${goalNumber})`)
                return;
            }
        }
    }
    console.log(`${combinations} combinations - neither equals ${goalNumber}`);

}

sumOfTwoNumbers(["1", "10", "5"]);
