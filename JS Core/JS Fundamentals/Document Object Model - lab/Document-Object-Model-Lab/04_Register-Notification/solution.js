
 function register() {
   let usernameValue = document.getElementById('username').value;
   let emailValue = document.getElementById('email').value;
   let passwordValue = document.getElementById('password').value;

   let regex = new RegExp("(.+)@(.+).(com|bg)");
   if (usernameValue && regex.test(emailValue) && passwordValue)
   {
       let headingElement = document.createElement('h1');
       headingElement.textContent = 'Successful Registration!';

       let resultSection = document.getElementById('result');
       resultSection.appendChild(headingElement);
       let brElement = document.createElement('br');
       let brElement2 = document.createElement('br');

       let userResult = document.createTextNode(`Username : ${usernameValue}`);
       let emailResult = document.createTextNode(`Email: ${emailValue}`);
       let passwordResult = document.createTextNode(`Password: ${'*'.repeat(passwordValue.length)}`);

       resultSection.appendChild(userResult);
       resultSection.appendChild(brElement);
       resultSection.appendChild(emailResult);
       resultSection.appendChild(brElement2);
       resultSection.appendChild(passwordResult);

       setTimeout(() => {
         document.getElementById('result').innerHTML = "";
       }, 5000);

   }
 }
