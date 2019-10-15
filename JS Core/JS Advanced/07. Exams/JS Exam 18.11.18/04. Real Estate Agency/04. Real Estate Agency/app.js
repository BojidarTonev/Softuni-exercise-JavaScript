function realEstateAgency () {
	let agencyProfit = 0;

	let $apartmentRentElement = $('input[name="apartmentRent"]');
	let $apartmentTypeElement = $('input[name="apartmentType"]');
	let $agencyCommisionElement = $('input[name="agencyCommission"]');

	$('button[name="regOffer"]').on('click', function(){
		if(!isNaN($apartmentRentElement.val()) && !isNaN($agencyCommisionElement.val()) &&
		$apartmentTypeElement.val() != '' && $apartmentTypeElement.val().indexOf(':') == -1 &&
		$apartmentRentElement.val() > 0 && $agencyCommisionElement.val() >= 0 && $agencyCommisionElement.val() <= 100){
			let pRentElement = $('<p>').text(`Rent: ${$apartmentRentElement.val()}`);
			let pTypeElement = $('<p>').text(`Type: ${$apartmentTypeElement.val()}`);
			let pCommisionElement = $('<p>').text(`Commission: ${$agencyCommisionElement.val()}`);

			let divElement = $('<div>').addClass('apartment');
			divElement.append(pRentElement);
			divElement.append(pTypeElement);
			divElement.append(pCommisionElement);

			$('#building').append(divElement);
			$('#message').text('Your offer was created successfully.');
		} else{
			$('#message').text('Your offer registration went wrong, try again.');
		}

		$apartmentRentElement.val('');
		$apartmentTypeElement.val('');
		$agencyCommisionElement.val('');
	});

	let $familyBudgetElement = $('input[name="familyBudget"]');
	let $familyApartmentTypeElement = $('input[name="familyApartmentType"]');
	let $familyNameElement = $('input[name="familyName"]');

	$('button[name="findOffer"]').on('click', function(){
		if($familyBudgetElement.val() > 0 &&
		$familyApartmentTypeElement.val() != '' &&
		$familyNameElement.val() != ''){
			let apartments = $('#building').children();
			let isFound = false;
			for(let i = 0; i < apartments.length; i++){
				let apartment = apartments[i];
				let rent = apartment.children[0].textContent.split(' ')[1];
				let type = apartment.children[1].textContent.split(' ').slice(1).join(' ');
				let commision = apartment.children[2].textContent.split(' ')[1];
				let price = rent + (rent * commision/100);

				if($familyApartmentTypeElement.val() == type && $familyBudgetElement.val() >= price){
					agencyProfit += (rent * commision/100) * 2;
					isFound = true;
					let button = document.createElement('button');
					button.addEventListener('click', function(){
						let parentElement = this.parentElement;
						let familyName = parentElement.children[0].textContent;

						parentElement.style.display = "none";
						$('#message').text(`They had found cockroaches in ${familyName}'s apartment`);
					});

					button.textContent = 'MoveOut';
					apartment.setAttribute("style", "border width: 2px; border-style: solid");
					apartment.style.borderColor = "red";
					apartment.children[0].textContent = (`${$familyNameElement.val()}`);
					apartment.children[1].textContent = ('lives here now');
					apartment.children[2].style.display="none";
					apartment.appendChild(button);

					$('#roof h1').text(`Agency profit: ${agencyProfit} lv.`);
				}
			}

			if(!isFound){
				$('#message').text('We were unable to find you a home, so sorry :(');
			}

		}

		$familyBudgetElement.val('');
		$familyApartmentTypeElement.val('');
		$familyNameElement.val('');
	});
}