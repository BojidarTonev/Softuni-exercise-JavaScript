function solve() {
    let resultElement = document.getElementById('cards');

    let from = document.querySelector('#from');
    let to = document.querySelector('#to');

    let range = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let button = document.querySelector('#exercise button').addEventListener('click', () => {
        let symbol = document.querySelector('#exercise select').value.split(' ')[1];
        let startIndex = range.indexOf(from.value);
        let endIndex = range.indexOf(to.value);

        for(let i = startIndex; i <= endIndex; i++){
            let card = document.createElement('div');
            card.classList = 'card';

            let firstP = document.createElement('p');
            firstP.textContent = symbol;

            let secondP = document.createElement('p');
            secondP.textContent = range[i];

            let thirdP = document.createElement('p');
            thirdP.textContent = symbol;
            
            card.appendChild(firstP);
            card.appendChild(secondP);
            card.appendChild(thirdP);

            resultElement.appendChild(card);
        }
    });    
}