function getNext() {
    let number = document.querySelector('#num').value;
    let result = document.querySelector('#result');
    result.textContent += `${number} `;
    while(number != 1){
        if(number % 2 == 0){
            number /= 2;
            result.textContent += `${number} `;
        } else {
            number = number * 3 + 1;
            result.textContent += `${number} `;
        }
    }
}