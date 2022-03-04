function sequenceTwoKPlusOne(input) {
    let n = Number(input[0]);
    let counter = 1;

    while (counter <= n) {
        console.log(counter);
        counter = 2 * counter + 1;

    }
}

sequenceTwoKPlusOne(["3"]);
