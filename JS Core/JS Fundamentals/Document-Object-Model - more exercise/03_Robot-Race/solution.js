function solve(){
   let facebookDistance = 0;
   let googleDistance = 0;
   let softUniDistance = 0;

   let robotNameField = document.querySelector('#exercise input');
   let distanceField = document.querySelectorAll('#exercise input')[1];

   let doItButton = document.querySelector('#exercise button');
   doItButton.addEventListener('click', () => {
      let robotNameInput = robotNameField.value;
      let moveInput = distanceField.value.split(' ')[0];
      let distance = distanceField.value.split(' ')[1];
      
      if(moveInput == 'forward'){
            //debugger;
            let robot = document.querySelector(`#${robotNameInput}`);
            if(robotNameInput == 'facebook'){
               facebookDistance += Number(distance);
               robot.style.marginLeft = facebookDistance + 'px';
            } else if (robotNameInput == 'google'){
               googleDistance += Number(distance);
               robot.style.marginLeft = googleDistance + 'px';
            } else {
               softUniDistance += Number(distance);
               robot.style.marginLeft = softUniDistance + 'px';
            }
            
            
      } else {

      }


      document.querySelector('#exercise input').value = '';
      document.querySelectorAll('#exercise input')[1].value = '';
   });
}
	