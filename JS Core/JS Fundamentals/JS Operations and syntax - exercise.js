function ILIkeJavaScript(input){
    console.log(`Hello ${input}, do you like JavaScript?`);
}

function EvenNumbers1ToN(input){
    let number = Number(input);
    for (let i = 1; i <= number; i++){
        if (i % 2 == 0){
            console.log(i)
        }
    }
}

function Fruit(fruit, weightInGrams, pricePerKilogram){
    let weightInKilograms = weightInGrams/1000;
    let resultPrice = weightInKilograms * pricePerKilogram;

    console.log(`I need ${resultPrice.toFixed(2)} leva to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.`);
}

function FitnessRates(dayOfWeek, service, time){
    if (dayOfWeek != "Saturday" && dayOfWeek != "Sunday"){
        if (service == "Fitness"){
            if (time >= 8 && time <= 15){
                console.log(5);
            }else {
                console.log(7.50);
            }

        }else if(service == "Sauna"){
            if (time >= 8 && time <= 15){
                console.log(4);
            }else {
                console.log(6.50);
            }
        }else{
            if (time >= 8 && time <= 15){
                console.log(10);
            }else {
                console.log(12.50);
            }
        }

    }
    else {
        if (service == "Fitness"){
            console.log(8);

        }else if(service == "Sauna"){
            console.log(7);
        }else{
            console.log(15);
        }
    }
}

function GreatestCommonDivisor(num1, num2){
    let reminder;
    while(num2 != 0){
        reminder = num1 % num2;
        num1 = num2;
        num2 = reminder;
    }

    console.log(num1);
}

function SameNumbers(input){
    input=input.toString();
    let result = +input[0];
    let areEqual = true;

    for (let i =1; i<input.length; i++){

        if (input[i] != input[i-1]){
            areEqual = false;
        }

        result += +input[i];
    }

    console.log(areEqual);
    console.log(result);
}

function TimeToWalk(numberOfSteps, footPrintInMeters, speed){
    let allMeters = numberOfSteps*footPrintInMeters;
    let rests = Math.floor(allMeters/500);
    speed = speed /60 /60 *1000;
    let time = allMeters/speed + rests*60;
    let hours = Math.floor(time/3600);
    time -= hours * 60;
    let minutes = Math.floor(time/60);
    let seconds = Math.round(time - minutes*60);

    let result = new Date();
    result.setHours(hours);
    result.setMinutes(minutes);
    result.setSeconds(seconds);

    console.log(result.toLocaleTimeString());

}

function FlightTimeTable(input){
    console.log(`${input[0]}: Destination - ${input[1]}, Flight - ${input[3]}, Time - ${input[2]}, Gate - ${input[4]}`);
}

function CalorieObject(input){
    let objects = new Array();
    for (let i = 0; i < input.length-1; i+=2){
        if (i % 2 == 0)
        {
            let obj = {
                food: input[i],
                calories: input[i+1]
            };
            objects.push(obj);
        }
    }

    let result = "";
    for (let i = 0; i < objects.length; i++){
        let obj = objects[i];
        if (i < objects.length - 1){
            result += `${obj.food}: ${obj.calories}, `
        } else{
            result += `${obj.food}: ${obj.calories}`
        }

    }
    console.log(`{ ${result} }`);
}

function CoffeeMachine(input){
    let allMoney = 0;
    for (let element of input){
        let finalPrice = 0;
        let elements = element.split(", ");
        let moneyInput = elements[0];
        let orderedProduct = elements[1];

        if (orderedProduct == "coffee")
        {
            if (elements[2] == "caffeine")
            {
                finalPrice = 0.80;
            } else {
                finalPrice = 0.90;
            }
            if (elements[3] == "milk")
            {
                finalPrice += Math.ceil(1/10 * finalPrice)/10;
                if (elements[4] != 0)
                {
                    finalPrice += 0.10;
                }
            }
            else if(elements[3] != 0)
            {
                finalPrice += 0.10;
            }
        }
        else {
            finalPrice = 0.80;
            if (elements[2] == "milk"){
                finalPrice += Math.ceil(1/10 * finalPrice)/10;
                if (elements[3] != 0){
                    finalPrice += 0.10;
                }
            } else if(elements[2] != 0){
                finalPrice += 0.10;
            }
        }

        if (moneyInput < finalPrice){
            let needMore = (finalPrice - moneyInput).toFixed(2);
            console.log(`Not enough money for ${orderedProduct}. Need ${needMore}$ more.`);
        } else{
            console.log(`You ordered ${orderedProduct}. Price: ${finalPrice.toFixed(2)}$ Change: ${(moneyInput - finalPrice).toFixed(2)}$`);
            allMoney += finalPrice;
        }
    }

    console.log(`Income Report: ${allMoney.toFixed(2)}$`);
}

function DailyCaloriesIntake(input, activeFactor){
    let basicMetabolism = 0;
    let af = 0;
    if (input[0] == 'f'){
        basicMetabolism = 655 + 9.7 * input[1] + 1.85 * input[2] - 4.7 * input[3];
    } else {
        basicMetabolism = 66 + 13.8 * input[1] + 5 * input[2] - 6.8 * input[3];
    }

    if (activeFactor == 0){
        af = 1.2;
    } else if(activeFactor == 1 || activeFactor == 2){
        af = 1.375;
    } else if(activeFactor >= 3 || activeFactor <= 5){
        af = 1.55;
    } else if(activeFactor == 6 || activeFactor == 7){
        af == 1.725;
    } else{
        af = 1.90;
    }

    let result = af * basicMetabolism;
    console.log(Math.round(result));
}



