function oscars(input) {
    let index = 0;
    let actorName = input[index];
    index++;
    let startPoints = Number(input[index]);
    index++;
    let countJudges = Number(input[index]);
    index++;

    let givenScore = 0;
    let accumolatedScore = 0;
    let totalPoints = 0;

    for (let i = 0; i < countJudges; i++) {

        let judgeName = input[index];
        index++;
        let pointsReceived = Number(input[index]);
        index++

        givenScore = (judgeName.length * pointsReceived) / 2;

        accumolatedScore += givenScore;

        totalPoints = startPoints + accumolatedScore;

        if (totalPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            break
        }
    }
    let diff = Math.abs(totalPoints - 1250.5);
    if (totalPoints < 1250.5) {
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
    }
}

oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);
