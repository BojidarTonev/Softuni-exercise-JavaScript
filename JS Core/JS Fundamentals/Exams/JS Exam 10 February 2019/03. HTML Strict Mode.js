function solve(input){
    let finalString = '';
    let closingTag = /<\/[\w]+>/g;
    let openingTag = /<[\w]+>/g;

    for(let i = 0; i < input.length; i++){
            let openingMatches = input[i].match(openingTag);
            let closingMatches = input[i].match(closingTag);
            let openingArr = [];
            let closingArr = [];

            if(openingMatches){
                openingMatches = openingMatches.map(x => x.split(/[<>]/));
                for(let item of openingMatches){
                    item = item.filter(x => x);
                    for(let x of item){
                        openingArr.push(x);
                    }
                }
            }
            if(closingMatches){
                closingMatches = closingMatches.map(x => x.split(/[/<>]/).filter(x => x));
                for(let item of closingMatches){
                    item = item.filter(x => x);
                    for(let x of item){
                        closingArr.push(x);
                    }
                }
            }

            if(arraysEqual(openingArr, closingArr)){
                let result = input[i].split(openingTag).filter(x => x)[0];
                result = result.split(closingTag).filter(x => x).map(x => x.trim());
                for(let item of result){
                    finalString += item + ' ';
                }
            }
    }

    console.log(finalString.trim());

    function arraysEqual(_arr1, _arr2) {

        if (!Array.isArray(_arr1) || ! Array.isArray(_arr2) || _arr1.length !== _arr2.length)
            return false;

        var arr1 = _arr1.concat();
        var arr2 = _arr2.concat().reverse();

        for (var i = 0; i < arr1.length; i++) {

            if (arr1[i] !== arr2[i])
                return false;

        }

        return true;
    }
}

solve(['<div><p>This</p> is</div>',
    '<div><a>perfectly</a></div>',
    '<divs><p>valid</p></divs>',
    '<div><p>This</div></p>',
    '<div><p>is not</p><div>']
);