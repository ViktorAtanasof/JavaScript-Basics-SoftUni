function basketballEquipment(input){
    let trainers = Number(input[0]);

    let shoesPrice = trainers - trainers * 0.40;
    let equipmentPrice = shoesPrice - shoesPrice * 0.20;
    let ballPrice = equipmentPrice / 4;
    let accPrice = ballPrice / 5;
    let totalPrice =  shoesPrice + equipmentPrice + ballPrice + accPrice + trainers;

    console.log(totalPrice);
}

basketballEquipment(["365"]);
