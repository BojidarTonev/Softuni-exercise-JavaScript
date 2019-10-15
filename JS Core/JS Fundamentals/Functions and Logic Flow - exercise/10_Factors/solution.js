function solve() {
   let input = document.querySelector('#num').value;
   //debugger;
   let result = document.querySelector('#result');
   for(let i = 1; i <= input; i++){
         if(input % i == 0){
            if(i == input){
               result.textContent += `${i}`;
            }else {
               result.textContent += `${i} `;
            }
            
         }
   }
}