function solve(){
    let inputField = document.querySelector('#exercise input');
    let registerButton = document.querySelector('#exercise button');

    registerButton.addEventListener('click', () => {
        let studentName = inputField.value;
        document.querySelector('#exercise input').value = '';
        let numberOfLi = studentName[0].charCodeAt(0) - 65;

        let li = document.querySelectorAll('li')[numberOfLi];
        if(!li.textContent){
            li.textContent += studentName;
        } else {
            li.textContent += `, ${studentName}`;
        }
    });
}
