function examPreparation(input) {
    let index = 0;
    let failGrades = Number(input[index]);
    index++;
    let examName = input[index];
    index++;

    let badGradesCount = 0;
    let sumGrades = 0;
    let problem = "";
    let countExam = 0;
    let isOk = true;

    while (examName !== "Enough") {
        let examGrades = Number(input[index]);
        index++;

        sumGrades += examGrades;
        countExam++;
        if (examGrades <= 4) {
            badGradesCount++;
            if (badGradesCount >= failGrades) {
                isOk = false;
                break;
            }
        } problem = examName;

        examName = input[index];
        index++;

    }
    let average = sumGrades / countExam;
    if (isOk) {

        console.log(`Average score: ${average.toFixed(2)}`);
        console.log(`Number of problems: ${countExam}`);
        console.log(`Last problem: ${problem}`);
    } else {
        console.log(`You need a break, ${badGradesCount} poor grades.`);
    }
}

examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]);
