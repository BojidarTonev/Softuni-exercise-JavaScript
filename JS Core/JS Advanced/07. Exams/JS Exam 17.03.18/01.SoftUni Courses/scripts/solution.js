function solve() {
   //JS WEB NE E KURS A E MODUL
   let signMeBtn = $('.courseFoot button');
   let courses = $('li input[type="checkbox"]');
   let selectedCourses = [];

   signMeBtn.on('click', function(){
      let educationForm = $('#educationForm input[type="radio"]:checked').val();    
      for(let cours of courses){
         if(cours.checked){
            selectedCourses.push(cours.parentElement.children[1].textContent);
         }
      }

      for(let item of selectedCourses){
         let nameOfCours = item.split(' ')[1];
         let result = `JS-${nameOfCours}`;
         let liElement = $('<li></li>').text(result);

         $('#myCourses .courseBody ul').append(liElement);
      }

      let courseNames = selectedCourses.map(x => x.split(' ')[1]);
      let price = calculateRawFinalPrice(courseNames, educationForm);
      //JS Advanced 10% discount
      if(courseNames.includes('Fundamentals') && courseNames.includes('Advanced')){
         let discountInMoney = ((1/10) * 180);
         price -= discountInMoney;
      }

      //6% discount on the module's total price
      if(courseNames.includes('Fundamentals') && 
         courseNames.includes('Advanced') &&
         courseNames.includes('Applications')){
            let discount = (6/100) * price;
            price -= discount;
            
      }

      //Bonus cours 'HTML and CSS'
      if(selectedCourses.length == 4){
         let result = `HTML and CSS`;
         let liElement = $('<li></li>').text(result);

         $('#myCourses .courseBody ul').append(liElement);
      }

      if(educationForm == 'online'){
         let discount = (6/100) * price;
         price -= discount;
      }

      $('.courseFoot p').text(`Cost: ${Math.floor(price)}.00 BGN`);
   });   



   function calculateRawFinalPrice(courseNames, educationForm){
      let price = 0;
      if(courseNames.includes('Fundamentals')){
            price += 170;
      }
      if(courseNames.includes('Advanced')){
            price += 180;
      }
      if(courseNames.includes('Applications')){
            price += 190;
      }
      if(courseNames.includes('Web')){
            price += 490;
      }

      return price;
   }
}  

