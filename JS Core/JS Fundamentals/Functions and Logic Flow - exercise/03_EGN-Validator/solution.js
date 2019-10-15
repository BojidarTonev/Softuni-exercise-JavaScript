function validate() {
    function getMonth(month){
        switch (month){
            case 'January': return '01' ; 
            case 'February': return '02' ;
            case 'March': return '03' ;
            case 'April': return '04' ;
            case 'May': return '05' ;
            case 'June': return '06' ;
            case 'July': return '07' ;
            case 'August': return '08' ;
            case 'September': return '09' ;
            case 'October': return '10' ;
            case 'November': return '11' ;
            case 'December': return '12' ;
        }
    }

    function calculateWeight(input){
        let result = 0;
        let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        for(let i = 0; i < 9; i++){
            let sum = input[i] * weights[i];
            result += sum;
        }

        result = result % 11;
        return result;
    }

    let buttonField = document.querySelector('button');
    buttonField.addEventListener('click', () => {
        let genderNumber = 1;

        let yearInput = document.querySelector('#year').value.slice(2, 4);
        let monthInput = getMonth(document.querySelector('#month').value);
        let dateInput = document.querySelector('#date').value;
        if(dateInput.length <= 1){
            dateInput = `0${dateInput}`;
        }
        let genderInput = document.querySelector('#male');
        if(genderInput.checked){
            genderInput = 'Male';
            genderNumber = 2;
        }else{
            genderInput = 'Female';
        }
        let regionalCodeInput = document.querySelector('#region').value;
        if(regionalCodeInput.length == 3){
            regionalCodeInput = regionalCodeInput.slice(0, 2);
        }

        let currentNum = yearInput + monthInput + dateInput + regionalCodeInput + genderNumber;
        let lastNum = calculateWeight(currentNum);
        if(lastNum == 10){
            lastNum = 0;
        }

        let result = currentNum + lastNum;
        
        document.querySelector('#year').value = '';
        document.querySelector('#month').value = 'Select a month';
        document.querySelector('#date').value = '';
        document.querySelector('#region').value = '';
        document.querySelector('#male').checked = false;
        document.querySelector('#female').checked = false;


        document.querySelector('#egn').textContent = `Your EGN is: ${result}`;
    });
}