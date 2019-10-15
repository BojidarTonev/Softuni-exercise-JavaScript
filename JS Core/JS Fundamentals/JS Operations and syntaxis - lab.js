function stringLength(firstString, secondString, thirdString){
    let sum = (firstString.length + secondString.length + thirdString.length) / 3;
    console.log(firstString.length + secondString.length + thirdString.length);
    console.log(Math.round(sum));
}

function mathOperations(num1, num2, operator){
    let result = 0;
    switch (operator) {
        case "+": result = Number(num1)+ Number(num2); break;
        case "-": result = Number(num1)- Number(num2); break;
        case "*": result = Number(num1)* Number(num2); break;
        case "/": result = Number(num1)/ Number(num2); break;
        case "%": result = Number(num1)% Number(num2); break;
        case "**": result = Number(num1)** Number(num2); break;
        default: "Error!"; break;
    }

    console.log(result);
}

function SumOfNumbers(num1, num2){
    let begin = Number(num1);
    let end = Number(num2);
    let result = 0;
    for (let i = begin; i <= end; i++){
            result += i;
    }

    console.log(result);
}

function largestNumber(num1, num2, num3){
    let firstNumber = Number(num1);
    let secondNumber = Number(num2);
    let thirdNumber = Number(num3);

    console.log(Math.max(firstNumber, secondNumber, thirdNumber));
}

function circleArea(argument){
    let type = typeof(argument);
    if (type == "number"){
        let result = Math.PI * Math.pow(argument, 2);
    console.log(result.toFixed(2));
    } else {
    console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}
