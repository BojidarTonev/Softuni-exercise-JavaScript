function printArrayWithGiveDelimeter(input){
    let delimeter = input[input.length - 1];
    input.pop();


    console.log(input.join(delimeter));
}

function printEveryNElementOfAnArray(input){
            let element = input[input.length - 1];
            for(let i =0; i < input.length - 1; i++){
                if(i % element == 0){
                    console.log(input[i]);
                }
            }
}

function AddAndRemoveElements(input){
    let initialNumber = 1;
    let array = [];
    for(let i =0; i < input.length; i++){
        if(input[i] == 'remove'){
            array.pop();
        } else {
            array.push(initialNumber);
        }
        initialNumber++;
    }

    if(array.length == 0){
        console.log('Empty');
    } else {
        array.forEach(x => console.log(x));
    }
}

function RotateArray(input){
    let numberOfRotations = input[input.length - 1];
    input.pop();

    for(let i = 0;i < numberOfRotations; i++){
        let lastNumber = input[input.length - 1];
        input.pop();
        input.unshift(lastNumber);
    }

    console.log(input.join(' '));

}

function ExtractSubsequenceFromArray(input){
    let result = [];
    result.push(input[0]);

    for(let i =1; i < input.length; i ++){
        if(result[result.length - 1] <= input[i]){
            result.push(input[i]);
        }

    }

    console.log(result.join('\n'));
}

function MagicMatrices(input){
    let rowSums = [];
    for(let row = 0; row < input.length; row++){
        let rowSum = 0;

        for(let col = 0; col < input[row].length; col++){
            rowSum += input[row][col];
        }
        rowSums.push(rowSum);
    }

    let result = rowSums.every(x => x === rowSums[0]);
    console.log(result);
}