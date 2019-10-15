function solve(){
   let rebuildKingdomBtn = $('#kingdom button');
   let joinBtn = $('#characters button');
   let warBtn = $('#actions button');

   rebuildKingdomBtn.on('click', function(){
      let kingdomName = $('#kingdom input')[0].value;
      let kingName = $('#kingdom input')[1].value;

      //valid input
      if(kingName.length >= 2 && isValidKingdomName(kingdomName)){
         createAndAppendElements(kingdomName, kingName);
      } else {
         $('#kingdom input')[0].value = '';
         $('#kingdom input')[1].value = '';
      }

   });

   joinBtn.on('click', function(){
      let characterType = $('#characters div input:checked').attr('value');
      let characterName = $('#characters div input[type="text"]')[0].value;
      let kingdomName = $('#characters div input[type="text"]')[1].value;

      //valid input
      if(characterType != undefined && isNaN(characterName) && 
         characterName.length >= 2 && isValidKingdomName(kingdomName) &&
         kingdomExists(kingdomName)){
            incrementAndAppendFighterNameAndCounter(characterType, kingdomName, characterName);
      } else {
         $('#characters div input[type="text"]')[0].value = '';
         $('#characters div input[type="text"]')[1].value = '';
      }

   });
   
   warBtn.on('click', function(){
      let attackerKingdom = $('#actions input')[0].value.toLowerCase();
      let defenderKingdom = $('#actions input')[1].value.toLowerCase();

      //valid input
      if(isValidKingdomName(attackerKingdom) && isValidKingdomName(defenderKingdom)){
         if(kingdomExists(attackerKingdom) && kingdomExists(defenderKingdom)){
            let attackerPoints = calculateAttackPoints(attackerKingdom);
            let defenderPoints = calculateDefensePoints(defenderKingdom);

            if(attackerPoints > defenderPoints){
               let attackerKing = $(`#map #${attackerKingdom} h2`).text();
               console.log(attackerKing);
               $(`#map #${defenderKingdom} h2`).text(attackerKing);
            } 
         }else {
            $('#actions input')[0].value = '';
            $('#actions input')[1].value= '';
         }
      }else {
         $('#actions input')[0].value = '';
         $('#actions input')[1].value= '';
      }
     
      
   });


   function isValidKingdomName(name){
      let checkName = name.toUpperCase();
      if(checkName == 'CASTLE' || checkName == 'DUNGEON' || checkName == 'FORTRESS' || 
      checkName == 'INFERNO' || checkName == 'NECROPOLIS' || checkName == 'RAMPART' || 
      checkName == 'STRONGHOLD' || checkName == 'TOWER' || checkName == 'CONFLUX'){
         return true;
      } else {
         return false;
      }
   }

   function createAndAppendElements(kingdomName, kingName){
      let h1Element = $('<h1></h1>').text(kingdomName.toUpperCase());
         let divElement = $('<div></div>').addClass('castle');
         let h2Element = $('<h2></h2>').text(kingName.toUpperCase());
         let fieldSetElement = $('<fieldset></fieldset>');

         let legendElement = $('<legeng></legend>').text('Army').appendTo(fieldSetElement);
         let pTanksElement = $('<p></p>').text('TANKS - 0').appendTo(fieldSetElement);
         let pFightersElement = $('<p></p>').text('FIGHTERS - 0').appendTo(fieldSetElement);
         let pMagesElement = $('<p></p>').text('MAGES - 0').appendTo(fieldSetElement);
         let armyOutputElement = $('<div></div>').addClass('armyOutput').appendTo(fieldSetElement);

         $(`#map #${kingdomName.toLowerCase()}`).append(h1Element);
         $(`#map #${kingdomName.toLowerCase()}`).append(divElement);
         $(`#map #${kingdomName.toLowerCase()}`).append(h2Element);
         $(`#map #${kingdomName.toLowerCase()}`).append(fieldSetElement);
         $(`#map #${kingdomName.toLowerCase()}`).show();
   }

   function kingdomExists(kingdomName){
      if($(`#map #${kingdomName.toLowerCase()}`).css('display') == 'none'){
         return false;
      } 
      return true;
   }

   function incrementAndAppendFighterNameAndCounter(characterType, kingdomName, characterName){
            let heroesString = $(`#map #${kingdomName.toLowerCase()} .armyOutput`).text();
            heroesString += `${characterName} `;
            $(`#map #${kingdomName.toLowerCase()} .armyOutput`).text(heroesString);
            $(`#map #${kingdomName.toLowerCase()} .armyOutput`).text().trim();

            if(characterType == 'tank'){
               let count = $(`#map #${kingdomName.toLowerCase()} p`)[0].textContent.split(' ')[2];
               $(`#map #${kingdomName.toLowerCase()} p`)[0].textContent = `TANKS - ${++count}`;
            }else if (characterType == 'mage'){
               let count = $(`#map #${kingdomName.toLowerCase()} p`)[2].textContent.split(' ')[2];
               $(`#map #${kingdomName.toLowerCase()} p`)[2].textContent = `MAGES - ${++count}`;
            }else if (characterType == 'fighter'){
               let count = $(`#map #${kingdomName.toLowerCase()} p`)[1].textContent.split(' ')[2];
               $(`#map #${kingdomName.toLowerCase()} p`)[1].textContent = `FIGHTERS - ${++count}`;
            }
   }

   function calculateAttackPoints(attackerKingdom){
      let points = 0;
      let attackerArmy = $(`#map #${attackerKingdom.toLowerCase()} fieldset p`);
            for(let i = 0; i < 3; i++){
               let units = attackerArmy[i].textContent.split(' ')[2];
               if(i == 0){
                  points += units * 20;
               }else if (i == 1){
                  points += units * 50;
               } else{
                  points += units * 70;
               }
            }

            return points;
   }

   function calculateDefensePoints(defenderKingdom){
      let points = 0;
      let defenderArmy = $(`#map #${defenderKingdom.toLowerCase()} fieldset p`);
            for(let i = 0; i < 3; i++){
               let units = defenderArmy[i].textContent.split(' ')[2];
               if(i == 0){
                  points += units * 80;
               }else if (i == 1){
                  points += units * 50;
               } else{
                  points += units * 30;
               }
            }

            return points;
   }

   
}

solve();



