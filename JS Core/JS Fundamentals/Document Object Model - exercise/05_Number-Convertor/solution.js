function solve() {
    let option = document.getElementById('selectMenuTo');
    let binaryOption = document.createElement('option');
    binaryOption.textContent = 'Binary';
    let hexadecimalOption = document.createElement('option');
    hexadecimalOption.textContent = 'Hexadecimal';

    option.appendChild(binaryOption);
    option.appendChild(hexadecimalOption);

    let button = document.getElementById('menus').querySelector('button');
    button.addEventListener("click", () => {
        let number = document.getElementById('input').value;
        let resultElement = document.getElementById('result');
        let convertToElement = document.getElementById('selectMenuTo');
        let convertToValue = convertToElement.value;
        if (convertToValue === "Binary") {
            resultElement.value = (+number).toString(2);
        } else if (convertToValue === "Hexadecimal") {
            resultElement.value = (+number).toString(16).toUpperCase();
        }
    })
}