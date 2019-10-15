function solve() {
  let input = document.querySelector('#arr').value;
  let resultElement = document.querySelector('#result');

  let array = JSON.parse(input);

  for(let i = 0; i< array.length;i++){
        let p = document.createElement('p');
         p.textContent = `${i} -> ${array[i] * array.length}`;
         resultElement.appendChild(p);
  }
  
}