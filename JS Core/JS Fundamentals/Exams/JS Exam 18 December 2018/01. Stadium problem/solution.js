function solve() {
    let resultMoney = 0;
    let fans = 0;

    let outputArea = document.getElementById('output');
    let summaryButton = document.querySelector('#summary button');

    let seats = document.querySelectorAll('.seat');
    for(let seat of seats){
        seat.addEventListener('click', () => {
                let sector = seat.parentNode.parentNode.parentNode.parentNode.parentNode.className
                let letter = getSector(seat);

                if(seat.style.backgroundColor == ''){
                    fans++;
                    seat.style.backgroundColor = 'rgb(255,0,0)';
                    if(sector == 'VIP'){
                        if(letter == 'A'){
                            resultMoney += 25;
                        } else if (letter == 'B') {
                            resultMoney += 15;
                        } else {
                            resultMoney += 10;
                        }
                    } else {
                        if(letter == 'A'){
                            resultMoney += 10;
                        } else if (letter == 'B') {
                            resultMoney += 7;
                        } else {
                            resultMoney += 5;
                        }
                    }
                    outputArea.value += ` Seat ${seat.textContent} in zone ${sector} sector ${letter} was taken.\n`;
                } else {
                    outputArea.value += ` Seat ${seat.textContent} in zone ${sector} sector ${letter} is unavailable.\n`;
                }              
        });
    }

    summaryButton.addEventListener('click', () => {
        let result = `${resultMoney} leva, ${fans} fans.`
        document.querySelector('span').textContent = result;
    });

    function getSector(seat){
        let rowElements = seat.parentElement.parentElement.children;
        for(let i = 0; i < rowElements.length; i++){
            for(let k = 0; k < rowElements[i].children.length; k++){
                if(rowElements[i].children[k] == event.target){
                    switch(i){
                        case 0: return 'A'; 
                        case 1: return 'B';
                        case 2: return 'C';
                    }
                }
            }
            
        }
    }
}