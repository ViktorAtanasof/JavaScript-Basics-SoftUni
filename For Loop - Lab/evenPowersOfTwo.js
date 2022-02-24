function evenPowersOfTwo(input) {
    let a = Number(input[0]);

    for(let i = 0; i <= a; i+=2) {
        console.log(Math.pow(2,i));
    }
}

evenPowersOfTwo(["3"]);
