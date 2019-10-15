function solve() {
  let resultElement = document.querySelector('#result');
  let separator = document.querySelector('#str').value;
  let input = document.querySelector('#text').value;

  let regexMessage = new RegExp(`${separator}.+${separator}`);

  let northDegrees = input.match(/north(?!.*north)(\d{2})/gi);
  let eastDegrees = input.match(/east(?!.*east)(\d{2})/gi);

  let message = input.match(regexMessage);
  message = message[0].slice(separator.length, message.length - separator.length - 1);
  
  console.log(eastDegrees);
}