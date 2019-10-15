function solve() {
    let resultArea = document.querySelector('#output');
    let btn = document.querySelector('button');
    
    btn.addEventListener('click', () => {
        let inputValue = document.querySelector('#input').value;
        let input = '';
        let numberOfCharactersToTake = Number(inputValue.match(/^[0-9]+/));
        let charactersLength = numberOfCharactersToTake.toString().length;
        
        input = inputValue.slice(charactersLength).slice(0, numberOfCharactersToTake);

        let delimeter = input[input.length - 1];
        let tokens = input.split(delimeter).filter(x => x != '');

        let regex = new RegExp(`[${tokens[0]}]`, 'g');
        let result = tokens[1].replace(regex, '');
        result = result.replace(/#/g, ' ');

        resultArea.textContent += result;
    })
}