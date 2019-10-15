function solve(input, command){
    let headers = input[0];
    let tokens = command.split(' ');

    if(tokens[0] == 'sort'){
        let resultMatrix = [];
        let col = [];
        let header = tokens[1];
        let indexOfHeader = headers.indexOf(header);
        resultMatrix[0] = input[0];

        for(let row = 1; row < input.length; row++){
            col.push(input[row][indexOfHeader])
        }

        col.sort((a, b) => a.localeCompare(b));
        for(let i = 0; i < col.length; i++){
            let resultRow = [];
            for(let j = 0; j < input.length; j++){
                let temp = col[i];
                let temp1 = input[j][indexOfHeader];
                if(temp == temp1){
                    resultMatrix.push(input[j])
                }
            }
        }

        print(resultMatrix);

    } else if (tokens[0] == 'hide'){
        let headerToRemove = tokens[1];
        let indexOfHeader = headers.indexOf(headerToRemove);

        for(let i = 0; i < input.length; i++){
            for(let k = 0; k < input[i].length; k++){
                if(k == indexOfHeader){
                    input[i].splice(k , 1)
                }
            }
        }

        print(input);
    } else if (tokens[0] == 'filter'){
        let content = [];
        content.push(headers);
        let header = tokens[1];
        let value = tokens[2];

        let indexOfHeader = headers.indexOf(header);
        for(let i = 1; i < input.length; i++){
            for(let k = 0; k < input[i].length; k++){
                if(k == indexOfHeader){
                    if(input[i][k] == value){
                        content.push(input[i]);
                    }
                }
            }
        }

        print(content)
    }


    function print(arr){
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i].join(' | '));
        }
    }

    function sortFunction(a, b, index) {
        if (a[index] === b[index]) {
            return 0;
        }
        else {
            return (a[index] < b[index]) ? -1 : 1;
        }
    }
}

solve([['name', 'age', 'grade'],
        ['Peter', '25', '5.00'],
        ['George', '34', '6.00'],
        ['Marry', '28', '5.49']],
    'sort name');