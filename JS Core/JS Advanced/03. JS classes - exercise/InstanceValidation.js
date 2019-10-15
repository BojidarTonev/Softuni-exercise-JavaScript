function solve(){
    

    class InstanceValidation{
        constructor(clientId, email, firstName, lastName){
            this.clientId = clientId;
            this.email = email;
            this.firstName = firstName;
            this.lastName = lastName;

            let clientIdRegEx = /[\d]{6}/g;
            let emailRegex = /[\w]+@[\w]+/g;
            let namesLengthRegex = /[\w]{3,20}/g;
            let namesLatingRegex = /[a-zA-Z]*/g;

            if(typeof(this.clientId) != 'string' && !this.clientId.match(clientIdRegEx)){
                throw new TypeError('Client ID must be a 6-digit number');
            }
            if(!this.email.match(emailRegex)){
                throw new TypeError('Invalid e-mail');
            }
            if(!this.firstName.match(namesLatingRegex)){
                throw new TypeError('First name must contain only Latin characters');
            }
            if(!this.lastName.match(namesLatingRegex)){
                throw new TypeError('Last name must contain only Latin characters');
            }
            if(!this.firstName.match(namesLengthRegex)){
                throw new TypeError('First name must be between 3 and 20 characters long');
            }
            if(!this.lastName.match(namesLengthRegex)){
                throw new TypeError('Last name must be between 3 and 20 characters long');
            }
        }


    }

    let a = new InstanceValidation('123', 'ivan@ivan', 'ася', 'asq');

}

solve();