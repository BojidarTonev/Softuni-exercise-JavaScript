function TownsToJson(input){
    let array = [];
    for(let i = 1; i < input.length; i++){
        let elements = input[i].split('|');
        for(let k = 0; k < elements.length; k++){
            if(elements[k] != ''){
                let element = elements[k].trim();
                array.push(element);
            }
        }
    }

    let result = [];
    for(let i = 0; i < array.length; i+=3){
        let latitude = Number(array[i+1]);
        let longitude = Number(array[i+2]);
        let obj = {Town: array[i], Latitude: latitude, Longitude: longitude};
        result.push(obj);
    }
    console.log(JSON.stringify(result));
}

function SumByTown(input){
    let obj = {};
    for(let i = 0;i < input.length; i++){
        if(i % 2 == 0){
            if(!obj.hasOwnProperty(input[i])){
                let key = input[i];
                obj[key] = 0;
            }
        } else{
            obj[input[i -1]] += Number(input[i]);

        }
    }

    console.log(JSON.stringify(obj));
}

function CountWordsByText(input){
    let obj = {};

    let array = input.split(/[^\w]+/).filter(x => x != '');
    for(let i = 0; i < array.length; i++){
        let key = array[i];
        if(!obj.hasOwnProperty(array[i])){
            obj[key] = 1;
        } else {
            obj[key]++;
        }
    }

    console.log(JSON.stringify(obj));
}

function CountWordsWithMaps(input){
    let map = new Map();

    let array = input.split(/[^\w]+/).filter(x => x != '');
    for(let item of array){
        let key = item.toLowerCase();
        if(!map.has(key)){
            map.set(key, 0)
        }

        let value = map.get(key);
        value++;
        map.set(key, value);
    }
    let values = map.values();

    for(let key of map.keys()){
        console.log(`'${key}' -> ${values.next().value} times`);
    }
}

function PopulationInTowns(input){
    let obj = {};

    let array = input.split('\n').map(x => x.split(' <-> '));

    for(let i = 0; i < array.length; i++){
        let key = array[i][0];
        let value = array[i][1];

        if(!obj.hasOwnProperty(key)){
            obj[key] = value;
        } else {
            obj[key]+= value;
        }
    }

    Object.keys(obj).forEach(x => console.log(`${x} <-> ${obj[x]}`));
}

function CityMarkets(input){
    let map = new Map();

    let array = input.split('\n').map(x => x.split(' -> '));
    for(let item of array){
        let town = item[0];
        let product = item[1];
        let amountSales = item[2].split(' : ')[0];
        let pricePerOneUniq = item[2].split(' : ')[1];

        let totalIncome = amountSales * pricePerOneUniq;
        let productObj = {
            name: product,
            totalIncome: totalIncome
        };

        if(!map.has(town)){
            map.set(town, [])
        }

        let townProducts = map.get(town);
        townProducts.push(productObj);
    }
    let keys = map.keys();
    let values = map.values();

    for(let [k, v] of map){
        console.log(`Town - ${map.get(k)}`);
        for(let product of map.get(v)){
            console.log(`$$$$${product.name} : ${product.totalIncome}`);
        }
    }
}

CityMarkets('Sofia -> Laptops HP -> 200 : 2000\n' +
    'Sofia -> Raspberry -> 200000 : 1500\n' +
    'Sofia -> Audi Q7 -> 200 : 100000\n' +
    'Montana -> Portokals -> 200000 : 1\n' +
    'Montana -> Qgodas -> 20000 : 0.2\n' +
    'Montana -> Chereshas -> 1000 : 0.3');

function LowestPricesInCities(input){
    let result = [];

    debugger;
    for(let element of input){
        let tokens = element.split(' | ');

        let town = tokens[0];
        let product = tokens[1];
        let price = tokens[2];

        if(result.filter(e => e.product == product) == 0){
            let obj = {
                town: town,
                product: product,
                price: price
            };

            result.push(obj)
        }else {
            let duplicateElement = result.find(p => p.product == product);

            let index = result.indexOf(duplicateElement);

            if(+price < +duplicateElement.price){
                duplicateElement.price = price;
                duplicateElement.town = town;
                result.splice(index, 1);

                result.push(duplicateElement);
            }

        }
    }

    for(let item of result){
        console.log(`${item.product} -> ${item.price} (${item.town})`);
    }
}

function ExtractUniqueWords(input){
    let array = input.split(/[^\w]+/).filter(x => x != '').map(x => x.toLowerCase());

    let uniqueItems = Array.from(new Set(array));
    console.log(uniqueItems.join(', '));
}

