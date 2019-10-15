function solve() {
  let myButton = document.getElementById('main').querySelectorAll('button')[0];
  let peshoButton = document.getElementById('main').querySelectorAll('button')[1];

  myButton.addEventListener('click', () => {
      let message = document.getElementById('myChatBox').value;
      let spanElement = document.createElement('span');
      spanElement.innerText = 'Me';
      spanElement.style.cssFloat = 'left';

      let paragraphElement = document.createElement('p');
      paragraphElement.innerText = message;
      paragraphElement.style.textAlign = 'left';

      let brElement = document.createElement('br');
      let resultDiv = document.getElementById('chatChronology');
      let divElement = document.createElement('div');

      divElement.appendChild(spanElement);
      divElement.appendChild(brElement);
      divElement.appendChild(paragraphElement);

      resultDiv.appendChild(divElement);

      document.getElementById('myChatBox').value = '';
  });

  peshoButton.addEventListener("click", () => {
      let message = document.getElementById('peshoChatBox').value;
      let spanElement = document.createElement('span');
      spanElement.innerText = 'Pesho';
      spanElement.style.cssFloat = 'right';

      let paragraphElement = document.createElement('p');

      paragraphElement.textContent = message;


      paragraphElement.style.textAlign = 'right';

      let brElement = document.createElement('br');
      let resultDiv = document.getElementById('chatChronology');
      let divElement = document.createElement('div');

      divElement.appendChild(spanElement);
      divElement.appendChild(brElement);
      divElement.appendChild(paragraphElement);

      resultDiv.appendChild(divElement);

      document.getElementById('peshoChatBox').value = '';
  })
}