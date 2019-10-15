function solve() {
   let inputField = document.querySelector('#arr');
   let input = inputField.value;
   let inputArray = JSON.parse(input);

   let BulgarianArmy = {name : 'BulgarianArmy', count: 0};
   let CivilProtection = {name : 'CivilProtection', count: 0};
   let Diplomatic = {name : 'Diplomatic', count: 0};
   let Foreigners = {name : 'Foreigners', count: 0};
   let Other = {name : 'Other', count: 0};
   let Province = {name : 'Province', count: 0};
   let Sofia = {name : 'Sofia', count: 0};
   let Transient = {name : 'Transient', count: 0};

   for(let i =0; i < inputArray.length; i++){
      let elements = inputArray[i].split(' ');
      let first = elements[0];
      let second = elements[1];
      let third = elements[2];

      if(first == 'BA' && isNaN(second) && isNaN(thid) && second.length == 3 && third.length == 3){
        BulgarianArmy.count++;
      } else if(frist == 'CP' && isNaN(second) && isNaN(third) && second.length == 2 && third.length == 3){
        CivilProtection.count++;
      } else if((first == 'C' || first == 'CT') && isNaN(second) && second.length == 4){
        Diplomatic.count++;
      } else if(first == 'XX' && isNaN(second) && second.length == 4){
        Foreigners.count++;
      } else if(first.length == 3 && isNaN(first) && ){

      }

   }
   
}