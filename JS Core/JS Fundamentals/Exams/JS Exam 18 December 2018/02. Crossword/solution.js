function solve() {
   let finalResult = '';
   let output = document.querySelector('#output p');

   let filterButton = document.querySelector('#filter button');
   let sortButton = document.querySelector('#sort button');
   let rotateButton = document.querySelector('#rotate button');
   let getButton = document.querySelector('#get button');
   
   filterButton.addEventListener('click', () => {
         let result = '';
         let input = document.querySelector('#input').value;
         let command = document.querySelector('#filterSecondaryCmd').value;
         let position = document.querySelector('#filterPosition').value - 1;

         if(command == 'uppercase'){
            for(let i = 0; i < input.length; i++){
               if(input.charAt(i) == input.charAt(i).toUpperCase() && isNaN(input.charAt(i) * 1)){
                  result += input.charAt(i);
               }
            }  
         } else if (command == 'lowercase'){
            for(let i = 0; i < input.length; i++){
               if(input.charAt(i) == input.charAt(i).toLowerCase() && isNaN(input.charAt(i) * 1)){
                  result += input.charAt(i);
               }
            } 
         } else if (command == 'nums'){
            for(let i = 0; i < input.length; i++){
               if (!isNaN(input.charAt(i) * 1)){
                     result += input.charAt(i);
               }
            }
         }

         document.querySelector('#input').value = '';
         document.querySelector('#filterSecondaryCmd').value = '';
         document.querySelector('#filterPosition').value = '';
         let letter = result[position];
         finalResult += letter;

         output.textContent = finalResult;
   });

   sortButton.addEventListener('click', () => {
      let result = '';
      let input = document.querySelector('#input').value;
      let command = document.querySelector('#sortSecondaryCmd').value;
      let position = document.querySelector('#sortPosition').value - 1;

      if(command == 'A'){
            let temp = input.split('').sort();
            result = temp.join('');
      } else if(command == 'Z'){
         let temp = input.split('').sort(strDes);
         result = temp.join('');
      }

      document.querySelector('#input').value = '';
      document.querySelector('#sortSecondaryCmd').value = '';
      document.querySelector('#sortPosition').value = '';
      finalResult += result[position];

      output.textContent = finalResult;
   });

   rotateButton.addEventListener('click', () => {
      
      let result = '';
      let input = document.querySelector('#input').value;
      let rotationTimes = document.querySelector('#rotateSecondaryCmd').value;
      let position = document.querySelector('#rotatePosition').value - 1;

      for(let i = 0; i < rotationTimes; i++){
         result = '';
         let temp = input.split('').slice(0, input.length - 1).join('');
         let lastElement = input.split('')[input.length - 1];

         result += lastElement + temp;
         input = result;
      }

      document.querySelector('#input').value = '';
      document.querySelector('#rotateSecondaryCmd').value = '';
      document.querySelector('#rotatePosition').value = '';
      let letter = result[position];
      finalResult += letter;

      output.textContent = finalResult;
   });

   getButton.addEventListener('click', () => {
      let input = document.querySelector('#input').value;
      let position = document.querySelector('#getPosition').value - 1;
      let letter = input[position];

      finalResult += letter;
      document.querySelector('#input').value = ''
      document.querySelector('#getPosition').value = '';

      output.textContent = finalResult;
   });


   function strDes(a, b) {
      if (a>b) return -1;
      else if (a<b) return 1;
      else return 0;
    }
}