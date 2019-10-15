function solve(input){
    let cars = [];
    for(let i = 0; i < input.length; i++){
        cars.push(input[i]);
    }
    let mostProfitableTown = getProfitableTown(cars);
    let arr = cars.filter(x => x.town == mostProfitableTown.name);

    let mostDrivenCarInTheMostDrivenTown = occurances(arr).sort(sortCars)[0];

    let arr2 = cars.filter(x => x.model == mostDrivenCarInTheMostDrivenTown.model);

    let towns = getTownsWithMostPopularModel(arr2);

    console.log(`${mostProfitableTown.name} is most profitable - ${mostProfitableTown.sum} BGN`);
    console.log(`Most driven model: ${mostDrivenCarInTheMostDrivenTown.model}`);
    for(let town of towns){
        let res = town.numbers.sort();
        console.log(`${town.town}: ${res.join(', ')}`);
    }

    function getProfitableTown(arr){
        let kvps = [];

        let allTowns = arr.map(x => x.town).filter((v, i, a) => a.indexOf(v) === i);
        for(let town of allTowns){
            let vignettes = [];
            let sum = 0;
            arr.filter(x => x.town == town).forEach(x => sum += x.price);
            arr.filter(x => x.town == town).forEach(x => vignettes.push(x.regNumber));

            let obj = {
                name: town,
                sum: sum,
                vignettesRegistered: vignettes
            };

            kvps.push(obj);
        }

        let resultItem = kvps.sort(sortProfitableTowns)[0];
        return resultItem;
    }

    function sortProfitableTowns(a, b) {
        var aSum = a.sum,
            bSum = b.sum;
        var aVignettes = a.vignettesRegistered.length,
            bVignettes = b.vignettesRegistered.length;
        if( aSum != bSum )
            return aSum > bSum ? -1 : 1;
        else if (aVignettes != bVignettes)
            return aVignettes > bVignettes ? -1 : 1;
        else
            return a.name < b.name ? -1 : 1;
    }

    function occurances(arr) {
        let result = [];
        for(let i = 0; i < arr.length; i++){
            if(result.filter(x => x.model == arr[i].model).length == 0){
                let obj = {
                    model: arr[i].model,
                    occurances: 1,
                    vignettePrice: arr[i].price
                };

                result.push(obj);
            } else {
                let element = result.find(x => x.model == arr[i].model);
                element.occurances++;
            }
        }

        return result;
    }

    function sortCars(a, b){
        var aOccurances = a.occurances,
            bOccurances = b.occurances;
        var aVignettePrice = a.vignettePrice,
            bVignettePrice = b.vignettePrice;
        if( aOccurances != bOccurances )
            return aOccurances > bOccurances ? -1 : 1;
        else if (aVignettePrice != bVignettePrice)
            return aVignettePrice > bVignettePrice ? -1 : 1;
        else
            return a.model < b.model ? -1 : 1;
    }

    function getTownsWithMostPopularModel(arr){
        let result = [];
        for(let i = 0; i < arr.length; i++){
            if(result.filter(x => x.town == arr[i].town).length == 0){
                let obj = {
                    town : arr[i].town,
                    numbers: []
                };

                obj.numbers.push(arr[i].regNumber);
                result.push(obj)
            } else {
                let element = result.find(x => x.town == arr[i].town);
                element.numbers.push(arr[i].regNumber);

                element.numbers.sort((a, b) => a.regNumber < b.regNumber);
            }
        }
        result = result.sort((a, b) => a.town.localeCompare(b.town));
        return result;
    }
}

solve([ { model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2},
    { model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8},
    { model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9},
    { model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3},
    { model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3}, ]
);