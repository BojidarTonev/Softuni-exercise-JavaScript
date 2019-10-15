function solve() {
  let generateButton = document.querySelector('button');
  let buyButton = document.querySelectorAll('button')[1];
  let furnitureElement = document.querySelector('#furniture-list');
  
  generateButton.addEventListener('click', () => {
    let input = JSON.parse(document.querySelector('#exercise textarea').value);
    for(let item of input){
        let element = document.createElement('div');
        element.classList.add('furniture');
        
        let pName = document.createElement('p');
        pName.textContent = `Name: ${item.name}`;

        let img = document.createElement('img');
        img.src = item.img;
        
        let price = document.createElement('p');
        price.textContent = `Price: ${item.price}`;

        let decFactor = document.createElement('p');
        decFactor.textContent = `Decoration factor: ${item.decFactor}`;

        let inputType = document.createElement('input');
        inputType.setAttribute('type', 'checkbox');

        element.appendChild(pName);
        element.appendChild(img);
        element.appendChild(price);
        element.appendChild(decFactor);
        element.appendChild(inputType);

        furnitureElement.appendChild(element);
    }
  });

  buyButton.addEventListener('click', () => {
    let clean = document.querySelector('#exercise textarea');
    clean.value = '';
    let resultArea = document.querySelectorAll('#exercise textarea')[1];

    let resultNames = [];
    let resultPrices = [];
    let decorationFactors = [];
      let elements = document.querySelector('#furniture-list').children;
      for(let item of elements){
        let checkBox = item.querySelector('input');
          if(checkBox.checked){
            resultNames.push(item.querySelector('p').textContent.split(': ')[1]);
            resultPrices.push(+item.querySelectorAll('p')[1].textContent.split(': ')[1]);
            decorationFactors.push(+item.querySelectorAll('p')[2].textContent.split(': ')[1]);
          }
      }
      let finalPrice = resultPrices.reduce(add, 0);
      let avgDec = ParseFloat(decorationFactors.reduce(add, 0)/decorationFactors.length);

      resultArea.textContent += `Bought furniture: ${resultNames.join(', ')}\n`;
      resultArea.textContent += `Total price: ${finalPrice.toFixed(2)}\n`;
      resultArea.textContent += `Average decoration factor: ${avgDec}`;
  });

   function add(a, b) {
     return ParseFloat(a) + ParseFloat(b);
 }
}