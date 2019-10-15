function addDestination(){
    let cityElement = $('.inputData')[0];
    let countryElement = $('.inputData')[1];
    let seasonElement = $('#seasons');

    if(cityElement.value != '' && countryElement.value != '' 
    && seasonElement.val() != ''){
        let tableElement = $('#destinationsList');
        let trElement = $('<tr></tr>');

        let tdElement = $('<td></td>').text(`${cityElement.value}, ${countryElement.value}`);
        let tdElement2 = $('<td></td>').text(`${seasonElement.val()[0].toUpperCase()}${seasonElement.val().slice(1)}`);

        trElement.append(tdElement);
        trElement.append(tdElement2);

        tableElement.append(trElement);
        let summaryBox = $(`.summary[id=${seasonElement.val()}]`);
        console.log(summaryBox);
        summaryBox.attr('readonly', false);
        let currentNum = Number(summaryBox.attr('value')) + 1;
        summaryBox.attr('value', currentNum);
        summaryBox.attr('readonly', true);



        cityElement.value = '';
        countryElement.value = '';
        seasonElement.prop('selectedIndex',0);
    }
}