function sortArray(inputArray, sortMethod){
    let ascendingComparator = function (a, b) {
        return a - b;
    };

    let descendingComparator = function (a, b) {
        return b - a;
    };

    let sortingStrategies = {
        'asc': ascendingComparator,
        'desc': descendingComparator
    };

    return inputArray.sort(sortingStrategies[sortMethod]);
}


function argumentInfo(){

}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });