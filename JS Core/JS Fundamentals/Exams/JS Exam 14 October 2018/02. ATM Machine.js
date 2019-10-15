function solve(input){
    let totalSum = 0;
    let totalArray = [];
    for(let i = 0; i < input.length; i++){
        let commandArray = input[i];

        if(commandArray.length > 2){
            //insert money
            for(let i = 0; i < commandArray.length; i++){
                let element = commandArray[i];
                totalArray.push(element);
            }
            let currentSum = commandArray.reduce((a, b) => a + b, 0);
            totalSum += currentSum;

            console.log(`Service Report: ${currentSum}$ inserted. Current balance: ${totalSum}$.`);
        } else if(commandArray.length == 2){
            //withdraw money
            let balance = commandArray[0];
            let moneyWant = commandArray[1];
            if(balance < moneyWant){
                console.log(`Not enough money in your account. Account balance: ${balance}$.`);
            } else if(totalSum < moneyWant){
                console.log(`ATM machine is out of order!`);
            } else {
                let curr = 0;
                totalArray.sort((a, b) => a - b).reverse();
                while(curr < +moneyWant){
                    console.log(totalArray);
                    if(totalArray.pop() > moneyWant){
                        continue;
                    }
                    curr += totalArray.pop();
                }
                totalSum -= moneyWant;
                balance -= moneyWant;
                console.log(`You get ${moneyWant}$. Account balance: ${balance}$. Thank you!`);
            }

        } else if(commandArray.length == 1){
            //report
            let bankNote = commandArray[0];
            let numberOfBanknotes = totalArray.filter(x => x == bankNote);
            console.log(`Service Report: Banknotes from ${bankNote}$: ${numberOfBanknotes.length}.`);
        }
    }
}

solve([[10, 20, 10, 50, 5, 10],
    [100, 30],
    [20],
    [20, 10, 10],
    [5, 10],
    [150, 150]
]);