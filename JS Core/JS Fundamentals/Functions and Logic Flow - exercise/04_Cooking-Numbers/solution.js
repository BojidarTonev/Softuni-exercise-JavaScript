function solve() {
    function getCurrentNum(){
        currentNum = (+outputField.textContent) || inputField.value;
        return currentNum;
    }

    let currentNum = 0;
    let inputField = document.querySelector('#exercise input');
    let outputField = document.querySelector('#output');

    let chopOperation = document.querySelectorAll('#operations button')[0]
    .addEventListener('click', chop);
    let diceButton = document.querySelectorAll('#operations button')[1]
    .addEventListener('click', dice);
    let spiceButton = document.querySelectorAll('#operations button')[2]
    .addEventListener('click', spice);
    let bakeButton = document.querySelectorAll('#operations button')[3]
    .addEventListener('click', bake);
    let filletButton = document.querySelectorAll('#operations button')[4]
    .addEventListener('click', fillet);

    function chop(){
        let num = getCurrentNum();
        num = num / 2;
        outputField.textContent = num;
    }

    function dice(){
        let num = getCurrentNum();
        num = Math.sqrt(num);
        outputField.textContent = num;
    }

    function spice(){
        let num = getCurrentNum();
        num++;
        outputField.textContent = num;
    }

    function bake(){
        let num = getCurrentNum();
        num *= 3;
        outputField.textContent = num;
    }

    function fillet(){
        let num = getCurrentNum();
        num *= 0.8;
        outputField.textContent = num;
    }
    
}
