class Vacationer {
    get fullName(){
        return this._fullName;
    }

    set fullName(input){
        if(input.length != 3){
            throw `Name must include first name, middle name and last name`;
        }
        let resultName = {};
        for(let item of input){
            if(!item.match(/^[A-Z]{1}[a-z]+$/)){
                throw `Invalid full name`;
            }
        }
        resultName.firstName = input[0];
        resultName.middleName = input[1];
        resultName.lastName = input[2];

        return this._fullName = resultName;
    }

    get creditCard(){
        return this._creditCard;
    }

    set creditCard(input){
        let card = {};  
        if(typeof input == 'undefined'){
            card.cardNumber = 1111;
            card.expirationDate = '';
            card.securityNumber = 111;
        } else {
            if(typeof input[0] == 'string' || typeof input[2] == 'string'){
                throw `Invalid credit card details`;
            }
            if(input.length != 3){
                throw `Missing credit card information`;
            }
            card.cardNumber = input[0];
            card.expirationDate = input[1];
            card.securityNumber = input[2];

        }

        return this._creditCard = card;
    }

    get idNumber(){
        return this.generateIDNumber();
    }

    constructor(names, creaditCardDetails){
        this.fullName = names;
        this.creditCard = creaditCardDetails;
        this.wishList = [];
        this.idNumber;
    }

    generateIDNumber(){
        let result = (231 * this.fullName.firstName.charCodeAt(0)) + (139 * this.fullName.middleName.length);
        if(isVowel(this.fullName.lastName[this.fullName.lastName.length - 1].toUpperCase())){
            result += '8';
        } else {
            result += '7';
        }

        return result;

        function isVowel(x) {

            var result;
        
            result = x == "A" || x == "E" || x == "I" || x == "O" || x == "U";
            return result;
        }
    }

    addCreditCardInfo(input){
        this.creditCard = input;
    }

    addDestinationToWishList(destination){
        if(this.wishList.indexOf(destination) != -1){
            throw `Destination already exists in wishlist`;
        }

        this.wishList.push(destination);
        this.wishList.sort((a, b) => a.length - b.length);
    }

    getVacationerInfo(){
        let result = `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}\n`;
        result += `ID Number: ${this.idNumber}\n`;
        result += `Wishlist:\n`;
        if(this.wishList.length == 0){
            result += `empty\n`;
        }   else {
            result += this.wishList.join(', ') + '\n';
        }
        result += `Credit Card:\n`;
        result += `Card Number: ${this.creditCard.cardNumber}\n`;
        result += `Expiration Date: ${this.creditCard.expirationDate}\n`;
        result += `Security Number: ${this.creditCard.securityNumber}\n`;

        return result;
    }
}
