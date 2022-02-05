function timePlusFifteenMinutes(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    minutes = minutes + 15;

    if (minutes > 59) {
        hour = hour + 1;
    }
    if (minutes > 59) {
        minutes = minutes - 60;
    }
    if (hour > 23) {
        hour = 0;
    }

    if (minutes < 10) {
        console.log(`${hour}:0${minutes}`);
    } else {
        (console.log(`${hour}:${minutes}`));
    }

}

time15Minutes(["0", "44"]);
