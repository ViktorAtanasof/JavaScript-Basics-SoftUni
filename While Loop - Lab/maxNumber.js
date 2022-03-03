function maxNumbers(input) {
    let num = Number(input[0]);
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER;

    while (num !== "Stop") {
        let currentNum = Number(num);

        if (currentNum > max) {
            max = currentNum
        }
        num = input[index];
        index++;
    }
    console.log(max);

}

maxNumbers(["100", "99", "80", "70", "Stop"]);
