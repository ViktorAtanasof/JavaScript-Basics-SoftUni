function deposit(input){
    let depositValue = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let interestRate = Number(input[2]);

    let sumOfInterest = depositValue * (interestRate/100);
    let interestPerMonth = sumOfInterest/12;

    let totalSum = depositValue + depositPeriod * interestPerMonth;
    console.log(totalSum);
}

deposit(["200","3","5.7"]);
