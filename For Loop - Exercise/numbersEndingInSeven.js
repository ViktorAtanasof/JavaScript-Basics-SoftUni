function numbersEndingInSeven() {
    for (let a = 7; a <= 997; a++) {
        if (a % 10 === 7) {
            console.log(a);
        }
    }
}

numbersEndingInSeven();
