function sovle(input){
    let parts = {};
    let instructions = [];

    for(let item of input){
        let tokens = item.split(' ');
        if(tokens[0] == 'instructions'){
            instructions.push(tokens[1]);
        } else if (tokens[0] == 'repair'){
            if(instructions.indexOf(tokens[1]) == -1){
                console.log(`${tokens[1]} is not supported`);
            } else {
                let carModel = tokens[1];
                let indexOfOpen = item.indexOf('{');
                let indexOfClose = item.indexOf('}');

                let text = item.substring(indexOfOpen, indexOfClose + 1);
                let partsOfCar = JSON.parse(text);

                if(parts[carModel] != undefined){
                    if(Object.values(partsOfCar).indexOf('broken') != -1){
                        let brokenParts = getKeyByValue(partsOfCar, 'broken');
                        for(let brokenPart of brokenParts){
                            let repairParts = parts[carModel][brokenPart];
                            if(repairParts != undefined && repairParts.length > 0){
                                partsOfCar[brokenPart] = repairParts[0];
                                parts[carModel][brokenPart].splice(0, 1);
                                
                            }
                            
                        }
                        
                    }
                }
                
                console.log(`${carModel} client - ${JSON.stringify(partsOfCar)}`);

            }
        } else if(tokens[0] == 'addPart'){
            let model = tokens[1];
            let partType = tokens[2];
            let partId = tokens[3];
            
            if(parts[model] == undefined){
                parts[model] = {};
                
            }
            if(parts[model][partType] == undefined){
                parts[model][partType] = [];
            }
            
            parts[model][partType].push(partId);
        }
    }
    
    for(let key of Object.keys(parts).sort()){
        console.log(`${key} - ${JSON.stringify(parts[key])}`);
    }

    function getKeyByValue(object, value) {
        let result = [];
        for(let key of Object.keys(object)){
            if(object[key] == value){
                result.push(key);
            }
        }
        return result;
    }
}

sovle([
    'instructions bmw',    
    'addPart opel engine GV1399SSS',
    'addPart opel transmission SMF556SRG',
    'addPart bmw engine GV1399SSS',   
    'addPart bmw transmission SMF444ORG',
    'addPart opel transmission SMF444ORG',
    'instructions opel',
    'repair opel {"engine":"broken","transmission":"OP8766TRS"}',
      'repair bmw {"engine":"ENG999FPH","transmission":"broken","wheels":"broken"}'
  ]);