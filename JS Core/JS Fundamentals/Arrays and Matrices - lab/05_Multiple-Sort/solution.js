function solve() {
  let arrayInput = document.querySelector('#arr').value;
  let result = document.querySelector('#result');

  let array = JSON.parse(arrayInput);
  let array2 = JSON.parse(arrayInput);

  let sortedArray = array.sort((a, b) => a - b);
  let sortedArray2 = array2.sort(function(a, b){
    if(a < b){
      return - 1;
    } if (a > b){
      return 1;
    } 
    return 0;   
  });

  let firstDiv = document.createElement('div');
  let secondDiv = document.createElement('div');

  firstDiv.textContent = sortedArray.join(', ');
  secondDiv.textContent = sortedArray2.join(', ');

  result.appendChild(firstDiv);
  result.appendChild(secondDiv);

}