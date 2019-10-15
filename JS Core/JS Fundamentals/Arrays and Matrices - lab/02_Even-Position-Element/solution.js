function solve() {
    let input = document.querySelector('input[type="text"]').value;
    let result = document.querySelector('#result');
    
    //debugger;
    let array = JSON.parse(input);
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
      if(i % 2 == 0){
        resultArray.push(array[i]);
      }
    }
    result.textContent = resultArray.join(' x ');
}