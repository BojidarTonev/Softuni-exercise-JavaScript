function validate() {
	let submitButton = document.querySelector('#submit');
	let isCompany = false;

	submitButton.addEventListener('click', function(ev) {
		ev.preventDefault();
		let $userValue = $('#username').val();
		let $emailValue = $('#email').val();
		let $passwordValue = $('#password').val();
		let $confirmPasswordValue = $('#confirm-password').val();
		let $companyNumberValue = $('#companyNumber').val();

		let validUsername = validateUserInformation($userValue);
		let validEmail = validateEmailData($emailValue);
		let validPassword = validatePasswordData($passwordValue, $confirmPasswordValue);
		let validCompanyNumber = validateCompanyInformation($companyNumberValue);

		if(validUsername && validEmail && validPassword && validCompanyNumber){
			$('#valid').css('display', 'block');
		} else {
			$('#valid').css('display', 'none');
		}
		
	});
	$('#company:checkbox').change(function(){
		if(this.checked){
			$('#companyInfo').css('display', 'block');
			isCompany = true;
		} else {
			$('#companyInfo').css('display', 'none');
			isCompany = false;
		}
	});

	function validateUserInformation(value){
		let pattern = /^[A-Za-z0-9]{3,20}$/g;
		if(value.match(pattern)){
			$('#username').css('border-color', 'darkblue');
			return true;
		} else {
			$('#username').css('border-color', 'red');
			return false;
		}
	}

	function validateEmailData(value){
		let pattern = /.*@.*\..*/g;
		if(value.match(pattern)){
			$('#email').css('border-color', 'darkblue');
			return true;
		} else {
			$('#email').css('border-color', 'red');
			return false;
		}
	}

	function validatePasswordData(value, confirmValue){
		if(value !== confirmValue){
			$('#password').css('border-color', 'red');
			$('#confirm-password').css('border-color', 'red');
			return false;
		}
		let pattern = /^\w{5,15}$/g
		if(value.match(pattern)){
			$('#password').css('border-color', 'darkblue');
			$('#confirm-password').css('border-color', 'darkblue');
			return true;
		} else {
			$('#password').css('border-color', 'red');
			$('#confirm-password').css('border-color', 'red');
			return false;
		}
	}

	function validateCompanyInformation(value){
		if(isCompany){
			if(+value >= 1000 && +value <= 9999){
				$('#companyNumber').css('border-color', 'darkblue');
				return true;
			} else {
				$('#companyNumber').css('border-color', 'red');
				return false;
			}
		} else {
			return true;
		}
	}
}
