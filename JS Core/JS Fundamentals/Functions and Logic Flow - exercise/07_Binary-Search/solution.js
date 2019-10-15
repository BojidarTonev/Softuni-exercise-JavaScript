function binarySearch() {
    let arrayInput = document.querySelector('#arr').value.split(', ');
    let numberField = document.querySelector('#num');
    let found = false;

    let result = document.querySelector('#result');
    let middleIndex = Math.floor((arrayInput.length - 1) / 2);  
    
    if(numberField.value == arrayInput[middleIndex]){
        result.textContent = `Found ${numberField.value} at index ${middleIndex}`;
        found = true;
    }else if(numberField.value < arrayInput[middleIndex]){
        for(let i = 0; i < middleIndex; i++){
            if(arrayInput[i] == numberField.value){
                result.textContent = `Found ${numberField.value} at index ${i}`;
                found = true;
                break;
            }
        }
    }else if(numberField.value > arrayInput[middleIndex]){
        for(let i = middleIndex + 1; i < arrayInput.length; i++){
            if(arrayInput[i] == numberField.value){
                result.textContent = `Found ${numberField.value} at index ${i}`;
                found = true;
                break;
            }
        }
    }else {
        result.textContent = `${numberField.value} is not in the array`;
    }

    if(!found){
        result.textContent = `${numberField.value} is not in the array`;
    }
}