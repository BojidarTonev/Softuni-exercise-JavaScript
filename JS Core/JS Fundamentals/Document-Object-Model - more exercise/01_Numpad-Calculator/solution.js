function solve() {
    let expressionField = document.querySelector('#expressionOutput');
    let resultField = document.querySelector('#resultOutput');

    let num1 = 0;
    let num2 = 0;
    let operation = '';

    let result = 0;

    let allButtons = document.querySelectorAll('button');
    for(let button of allButtons){
        button.addEventListener('click', () => {
            switch(button.value){
                case '*': 
                    operation = button.value;
                    expressionField.textContent += ` ${operation} `;
                 break;
                case '/': 
                    operation = button.value; 
                    expressionField.textContent += ` ${operation} `;
                 break;
                case '+': 
                    operation = button.value; 
                    expressionField.textContent += ` ${operation} `;
                 break;
                case '-': 
                    operation = button.value;
                    expressionField.textContent += ` ${operation} `;
                 break;
                case '=': 
                    switch(operation){
                        case '+': result = num1 * num2; break;
                        case '-': 
                        debugger;
                        result = num1 - num2; break;
                        case '/': result = num1 / num2; break;
                        case '*': result = num1 * num2; break;
                    }
                    resultField.textContent = result;
                    result = 0;
                 break;
                    case 'Clear': 
                        expressionField.textContent = ''; 
                        resultField.textContent = '';
                        num1 = 0;
                        num2 = 0;
                        result = 0;
                    break;
                default:
                if(num1 == 0){
                    num1 = button.value;
                    expressionField.textContent += `${num1}`;
                    if(operation){
                        expressionField.textContent += ` ${operation} `
                    }
                } else {
                    num2 = button.value;
                    expressionField.textContent += `${num2}`;
                } break;
            }
        });
    }
}