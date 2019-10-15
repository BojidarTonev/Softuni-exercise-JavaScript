function solve(matrix1, matrix2){
    let result = [];
    let bigSum = false;
    let reminder = 0;

    for(let row = 0; row < matrix1.length; row++){
        let resultRow = [];
        for(let col = 0; col < matrix1[row].length; col++){
            let sum = matrix1[row][col] + matrix2[row][col];
            if(bigSum){
                bigSum = false;
                sum += reminder;
                reminder = 0;
            }
            if(sum >= 10){
                bigSum = true;
                reminder = sum - 9;
                sum = 9;
            }

            resultRow.push(sum);
        }
        if(reminder > 0){
            if(reminder <= 9){
                resultRow.push(reminder);
            }
            else {
                while(true){
                    if(reminder < 9){
                        resultRow.push(reminder);
                        break;
                    }
                    
                    resultRow.push(9);
                    reminder-=9;
                }
            }

        }

        reminder = 0;
        bigSum = false;
        
        result.push(resultRow);
    }

    console.log(JSON.stringify(result));

}