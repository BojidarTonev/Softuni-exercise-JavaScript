function solve() {
    let resultDiv = document.getElementById('allNumbers');

    let button = document.querySelector('button');
    button.addEventListener('click', () => {
        let values = document.querySelector('input').value.split(' ');
        if (values.length === 6) {
            let validInput = values.every(CheckIfValid);
            if (validInput) {
                for (let i = 1; i <= 49; i++) {
                    let divElement = document.createElement('div');
                    divElement.className += "numbers";
                    divElement.textContent = `${i}`;

                    if (maybeOrange(i)) {
                        divElement.style.backgroundColor = "#FF7F50";
                    }

                    resultDiv.appendChild(divElement);
                }
            }
            document.querySelector('input').disabled = true;
            document.querySelector('button').disabled = true;

        }

    });

    function CheckIfValid(value) {
        return value >= 1 && value <= 49;

    }

    function maybeOrange(input){
        let elements = document.querySelector('input').value.split(' ');
        for (let i = 0;i < elements.length; i++){
            if (input == elements[i]){
                return true;
            }

        }

        return false;
    }

}