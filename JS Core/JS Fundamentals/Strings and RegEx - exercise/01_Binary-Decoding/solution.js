function solve() {
  let resultElement = document.querySelector('#result');
  let input = document.querySelector('#str').value;

  let sum = 0;
  for(let i =0; i < input.length; i++){
    if(input[i] == '1'){
      sum++;
    }
  }


  let splitNumber = digSum(sum); 

  let temp = input.slice(splitNumber, input.length - splitNumber).toString();

  let resultArray = temp.match(/.{8}/g);

  let result = '';

  for(let i = 0; i < resultArray.length; i ++){
    let number = parseInt(resultArray[i], 2);
    let letter = String.fromCharCode(number);

    result += letter;
  }

  let printResult = result.match(/[a-zA-Z ]+/g);
  resultElement.textContent = printResult.join('');

  function digSum(n){ 
    sum = 0;
    while(n > 0 || sum > 9){
            if(n == 0){
                n = sum;
                sum = 0;
            }
            sum = sum+n % 10;
            n = Math.floor(n/10);
      }
      
    return sum;  
  }

}