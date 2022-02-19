function fishLand(input) {
    let mackerel = Number(input[0]);
    let caca = Number(input[1]);
    let bonito = Number(input[2]);
    let horseMackerel = Number(input[3]);
    let seaShells = Number(input[4]);

    let bonitoPriceKG = mackerel + (mackerel * 0.60);
    let bonitoSum = bonito * bonitoPriceKG;
    let horseMackerelPrice = caca + (caca * 0.80);
    let horseMackerelSum = horseMackerel * horseMackerelPrice;
    let seaShellsPrice = seaShells * 7.50;
    let sumTotal = bonitoSum + horseMackerelSum + seaShellsPrice;


    console.log(sumTotal.toFixed(2));
}

fishLand(["6.90", "4.20", "1.5", "2.5", "1"]);
