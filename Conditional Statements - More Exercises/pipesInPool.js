function pipesInPool(input) {
    let poolSize = Number(input[0]);
    let debitForFirstPipe = Number(input[1]);
    let debitForSecondPipe = Number(input[2]);
    let hoursOffline = Number(input[3]);

    let firstPipeFill = hoursOffline * debitForFirstPipe;
    let secondPipeFill = hoursOffline * debitForSecondPipe;
    let totalPipeFill = firstPipeFill + secondPipeFill;

    if (totalPipeFill <= poolSize) {
        poolSize = (poolSize - poolSize) + totalPipeFill * 0.10;
        firstPipeFill = firstPipeFill / totalPipeFill * 100;
        secondPipeFill = secondPipeFill / totalPipeFill * 100;
        console.log(`The pool is ${poolSize.toFixed(2)}% full. Pipe 1: ${firstPipeFill.toFixed(2)}%. Pipe 2: ${secondPipeFill.toFixed(2)}%.`);
    } else {
        totalPipeFill -= poolSize;
        console.log(`For ${hoursOffline.toFixed(2)} hours the pool overflows with ${totalPipeFill.toFixed(2)} liters.`);
    }
}

pipesInPool(["1000","100","120","3"]);
