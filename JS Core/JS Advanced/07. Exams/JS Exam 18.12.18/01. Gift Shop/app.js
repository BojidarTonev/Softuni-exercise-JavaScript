function solution() {
	let toyTypeElement = $('#toyType');
	let toyPriceElement = $('#toyPrice');
	let toyDescriptionElement = $('#toyDescription');

	$('button[type="button"]').on('click', function(){
		let toyType = toyTypeElement.val();
		let toyPrice = toyPriceElement.val();
		let toyDescription = toyDescriptionElement.val();

		if(toyType != '' && !isNaN(toyPrice)){
			//$('#christmasGiftShop').prepend($('<img>', {src: 'gift.png'}));

			let $divElement = $('<div>');
			$divElement.addClass('gift');
			var $imgElement = ($('<img>', {src: 'gift.png'}));
			let $headingNameElement = $('<h2>').text(toyType);
			let $pElement = $('<p>').text(toyDescription);
			let button = document.createElement('button');
			button.textContent = `Buy it for $${toyPrice}`;
			button.addEventListener('click', function(){
				$divElement.remove();
			});

			$divElement.append($imgElement);
			$divElement.append($headingNameElement);
			$divElement.append($pElement);
			$divElement.append(button);

			$('#christmasGiftShop').append($divElement);
		}

		toyTypeElement.val('');
		toyPriceElement.val('');
		toyDescriptionElement.val('');

	});
}