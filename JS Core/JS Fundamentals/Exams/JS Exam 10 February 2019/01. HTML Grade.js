function solve(examPoints, homeworksCompleted, totalHomeworks){
    if(examPoints == 400){
        console.log('6.00');
        return;
    }
    let points = (examPoints/ 4)* 0.9;
    let bonus = 0;

    if(homeworksCompleted == totalHomeworks){
        bonus = 10;
    } else {
        bonus = (homeworksCompleted/totalHomeworks)*10;
    }

    let grade = Number(3 + 2 *((points + bonus) - 100/5)/(100/2));
    if(grade < 3.00){
        console.log('2.00');
    } else if (grade > 6.00){
        console.log('6.00');
    } else {
        console.log(grade.toFixed(2));
    }
}

solve(4500, 10, 10);