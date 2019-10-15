function solve() {
   let input = document.querySelector('input[type="text"]').value;
   let resultElement = document.querySelector('#result');

   let array = JSON.parse(input);
   let resultArray = [];
   for(let element of array){
      let resultText = reverse(element);
      resultArray.push(resultText);
   }

   resultElement.textContent = resultArray.join(' ');

   function reverse(str){
    let reversed = "";    
    for (var i = str.length - 1; i >= 0; i--){
      if(i == str.length - 1){
        reversed += str.charAt(i).toUpperCase();
      } else {
        reversed += str[i];
      }
    }

    return reversed;
  }
}