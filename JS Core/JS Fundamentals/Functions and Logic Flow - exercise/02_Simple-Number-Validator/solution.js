function validate() {
    function calculateWeight(input){
        let result = 0;
        let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        for(let i = 0; i < 9; i++){
            let sum = Number(input[i]) * weights[i];
            result += sum;
        }

        result = result % 11;
        return result;
    }

    let inputField = document.querySelector('#exercise input');
    let checkButton = document.querySelector('#exercise button');

    checkButton.addEventListener('click', () => {
        let value = inputField.value.split('');
        let resultElement = document.querySelector('#response');
        let calculationResult = calculateWeight(value);

        if (calculationResult == 10){
            calculationResult = 0;
        }

        if(value[9] == calculationResult){
            resultElement.textContent = 'This number is Valid!';
        }else{
            resultElement.textContent = 'This number is NOT Valid!';
        }
    });

}