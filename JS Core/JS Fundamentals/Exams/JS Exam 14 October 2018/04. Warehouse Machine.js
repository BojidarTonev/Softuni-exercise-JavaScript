function solve(input){
    let warehouse = [];
    for(let i = 0; i < input.length; i++){
        let tokens = input[i].split(', ');
        let command = tokens[0];

        if (command == 'IN'){
            let brandName = tokens[1];
            let coffeeName = tokens[2];
            let expDate = tokens[3];
            let quantity = tokens[4];
             let obj = {
                 brandName: brandName,
                 coffees: []
             };
             let coffeeObj = {
                 coffeeName: coffeeName,
                 expDate: expDate,
                 quantity: quantity
             };

             if(warehouse.filter(x => x.brandName == brandName).length == 0){
                 obj.coffees.push(coffeeObj);
                 warehouse.push(obj);
             } else{
                 let obj = warehouse.find(x => x.brandName == brandName);
                 if(obj.coffees.filter(x => x.coffeeName == coffeeName).length == 0){
                     obj.coffees.push(coffeeObj);
                 } else {
                     let coffee = obj.coffees.find(x => x.coffeeName == coffeeName);
                     let coffeeDate = new Date(coffee.expDate);
                     let exDate = new Date(expDate);
                     let index = obj.coffees.indexOf(coffee);
                     if(coffeeDate < exDate){
                         obj.coffees[index] = coffeeObj;
                     } else if (coffeeDate == expDate){
                         obj.coffees[index].quantity += quantity;
                     }
                 }
             }

        }
        else if (command == 'OUT'){
            let brandName = tokens[1];
            let coffeeName = tokens[2];
            let date = tokens[3];
            let quantity = tokens[4];

            if(warehouse.filter(x => x.brandName == brandName).length > 0){
                let obj = warehouse.find(x => x.brandName == brandName);
                if(obj.coffees.filter(x => x.coffeeName == coffeeName).length > 0){
                    let coffee = obj.coffees.find(x => x.coffeeName == coffeeName);
                    let coffeeDate = new Date(coffee.expDate);
                    let date2 = new Date(date);
                    if(coffeeDate > date2 && coffee.quantity >= quantity){
                        warehouse.find(x => x.brandName == brandName).quantity -= quantity;
                    }
                }
            }
        } else if (command == 'REPORT'){
            console.log('>>>>> REPORT! <<<<<');
            for(let element of warehouse){
                console.log(`Brand: ${element.brandName}:`);
                for(let item of element.coffees){
                    console.log(`-> ${item.coffeeName} -> ${item.expDate} -> ${item.quantity}.`);
                }
            }
        } else if (command == 'INSPECTION'){
            console.log('>>>>> INSPECTION! <<<<<');
            warehouse.sort((a, b) => a.brandName.localeCompare(b.brandName));
            for(let item of warehouse){
                item.coffees.sort((a, b) => a.quantity.localeCompare(b.quantity));
            }
            for(let element of warehouse){
                console.log(`Brand: ${element.brandName}:`);
                for(let item of element.coffees){
                    console.log(`-> ${item.coffeeName} -> ${item.expDate} -> ${item.quantity}.`);
                }
            }
        }
    }
}

solve([
    "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
    "IN, Folgers, Black Silk, 2023-03-01, 14",
    "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
    "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
    "IN, Folgers, Black Silk, 2022-01-01, 10",
    "IN, Lavazza, Intenso, 2022-07-19, 20",
    "OUT, Dallmayr, Espresso, 2022-07-19, 5",
    "OUT, Dallmayr, Crema, 2022-07-19, 5",
    "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
    "REPORT",
    "INSPECTION",
]);