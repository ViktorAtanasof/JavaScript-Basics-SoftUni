function yardGreening(input) {
    let squareMeter = Number(input[0]* 7.61);
    let discount = squareMeter * 0.18;
    let totalSum = squareMeter - discount;

    console.log(`The final price is: ${totalSum} lv.
    The discount is: ${discount} lv.`);
}

yardGreening(["550"]);
