function solve(input){
    let result = '';
    let letters = input.split(' ');
    for(let letter of letters){
        let latinLetter = transformLetter(letter);
        result += latinLetter;
    }

    console.log(result);

    function transformLetter(letter){
        if(letter == '.-'){
            return 'a'
        } else if (letter == '-...'){
            return 'b'
        } else if (letter == '-.-.'){
            return 'c'
        } else if (letter == '-..'){
            return 'd'
        } else if (letter == '.'){
            return 'e'
        } else if (letter == '..-.'){
            return 'f'
        } else if (letter == '--.'){
            return 'g'
        } else if (letter == '....'){
            return 'h'
        } else if (letter == '..'){
            return 'i'
        } else if (letter == '.---'){
            return 'j'
        } else if (letter == '-.-'){
            return 'k'
        } else if (letter == '.-..'){
            return 'l'
        } else if (letter == '--'){
            return 'm'
        } else if (letter == '-.'){
            return 'n'
        } else if (letter == '---'){
            return 'o'
        } else if (letter == '.--.'){
            return 'p'
        } else if (letter == '--.-'){
            return 'q'
        } else if (letter == '.-.'){
            return 'r'
        } else if (letter == '...'){
            return 's'
        } else if (letter == '-'){
            return 't'
        } else if (letter == '..-'){
            return 'u'
        } else if (letter == '...-'){
            return 'v'
        } else if (letter == '.--'){
            return 'w'
        } else if (letter == '-..-'){
            return 'x'
        } else if (letter == '-.--'){
            return 'y'
        } else {
            return 'z'
        }
    }
}

solve('--. --- --- --. .-.. .');