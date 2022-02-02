function worldSwimmingRecord(input) {
    let recordInSec = Number(input[0]);
    let lenghtInMeters = Number(input[1]);
    let timeInSec = Number(input[2]);
    let seconds = 12.5;

    let lenghtPlusTime = lenghtInMeters * timeInSec;
    let slowMeters = Math.floor(lenghtInMeters / 15); 
    let waterResistance = (slowMeters * seconds);
    let lenghtPlusTimeTotal = lenghtPlusTime + waterResistance;
    let recordDifference = Math.abs(recordInSec - lenghtPlusTimeTotal);

    if (lenghtPlusTimeTotal < recordInSec) {
        console.log(`Yes, he succeeded! The new world record is ${lenghtPlusTimeTotal.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${recordDifference.toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(["10464","1500","20"]);
