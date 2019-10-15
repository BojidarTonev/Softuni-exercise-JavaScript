function subtract() {
    let firstElement = $('#firstNumber');
    let secondElement = $('#secondNumber');

    firstElement.prop('disabled', false);
    secondElement.prop('disabled', false);

    let result = Number(firstElement.val()) - Number(secondElement.val());
    $('#result').text(result);
    
}
