function addProduct(){
    let productElement = $('#add-product input')[0];
    let priceElement =$('#add-product input')[1];

    if(productElement.value != '' && priceElement.value != '' && priceElement.value > 0){
        let trElement = $('<tr>');
        let tdElementProduct = $('<td>').text(productElement.value);
        let tdElementPrice = $('<td>').text(priceElement.value);

        trElement.append(tdElementProduct);
        trElement.append(tdElementPrice);

        $('#product-list').append(trElement);
        let totalPrice = $('tfoot td')[1].textContent;
        let calculatedTotal = Number(totalPrice) + Number(priceElement.value);

        console.log(calculatedTotal);
        

        $('tfoot td')[1].textContent = calculatedTotal;

        productElement.value = '';
        priceElement.value = '';
    }

    
}