function company(input) {
    let requiredHours = Number(input[0]);
    let days = Number(input[1]);
    let employeesWorkingEmergency = Number(input[2]);
    let diff = 0;

    let workingDays = days * 0.90;
    let workingHours = workingDays * 8;
    let bonusWork = employeesWorkingEmergency * (2 * days);
    let totalWorkingHours = Math.floor(workingHours + bonusWork);

    if (totalWorkingHours >= requiredHours) {
        diff = Math.abs(totalWorkingHours - requiredHours);
        console.log(`Yes!${diff} hours left.`);
    } else if (totalWorkingHours < requiredHours) {
        diff = Math.abs(requiredHours - totalWorkingHours);
        console.log(`Not enough time!${diff} hours needed.`);
    }
}

company(["99", "3", "1"]);
