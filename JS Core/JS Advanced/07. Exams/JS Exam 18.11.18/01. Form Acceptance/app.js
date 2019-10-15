function acceptance() {
	let $companyElement = $('input[name="shippingCompany"]');
	let $productElement = $('input[name="productName"]');
	let $quantityElement = $('input[name="productQuantity"]');
	let $scrapeElement = $('input[name="productScrape"]');
	
	if($companyElement.val() != '' && $productElement.val() != '' &&
	!isNaN($quantityElement.val()) && !isNaN($scrapeElement.val()) &&
	$quantityElement.val() != '' && $scrapeElement.val() != ''){
		let realQuantity = +$quantityElement.val() - +$scrapeElement.val();
		if(realQuantity > 0){
			let divElement = $('<div>');
			let pElement = $('<p>');
			pElement.text(`[${$companyElement.val()}] ${$productElement.val()} - ${realQuantity} pieces`);
			let button = $('<button>');
			button.attr('type', 'button');
			button.text('Out of stock');
	
			divElement.append(pElement);
			divElement.append(button);
			$('#warehouse').append(divElement);
	
			button.on('click', function(){
				let element = $(this).parent();
				element.hide();
			});
		}
		
	}

	$companyElement.val('');
	$productElement.val('');
	$quantityElement.val('');
	$scrapeElement.val('');
}