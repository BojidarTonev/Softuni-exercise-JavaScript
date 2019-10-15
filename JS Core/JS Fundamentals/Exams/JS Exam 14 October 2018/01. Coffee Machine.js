function solve(input) {
    let total = 0;
    for(let i = 0; i < input.length; i++){
        let price = 0;
        let tokens = input[i].split(', ');

        let coinsInserted = tokens[0];
        let typeOfDink = tokens[1];
        let drinkSupplement = '';

        let sugarQuantity = tokens[tokens.length - 1];

        if(typeOfDink == 'coffee'){
            drinkSupplement = tokens[2];
            if(drinkSupplement == 'caffeine'){
                price += 0.80;
            } else {
                price += 0.90;
            }

        } else {
            price += 0.80;
        }

        //ima mleko
        if(tokens.indexOf('milk') > -1){
            let number = Number(price * (1/10)).toFixed(1);
            price += +number;
        }

        if(sugarQuantity != 0){
            price += 0.10;
        }

        if(coinsInserted < price){
            let need = Number(price - coinsInserted);
            console.log(`Not enough money for ${typeOfDink}. Need ${need.toFixed(2)}$ more.`);
        } else {
            let change = coinsInserted - price;
            console.log(`You ordered ${typeOfDink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
            total += price;
        }
    }

    console.log(`Income Report: ${total.toFixed(2)}$`);
}

solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0']);