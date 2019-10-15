function leapYear() {
    function IsLeap(year){
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }

    let input = document.querySelector('input');
    let checkButton = document.querySelector('div button');
    let leapYearResult = document.querySelector('#year h2');
    let yearResult = document.querySelector('#year div');

    checkButton.addEventListener('click', () => {
        let result = IsLeap(input.value);
        if(result){
            leapYearResult.textContent = 'Leap Year';
        }else{
            leapYearResult.textContent = 'Not Leap Year'
        }

        yearResult.textContent = input.value;
        input.value = '';
    });

}