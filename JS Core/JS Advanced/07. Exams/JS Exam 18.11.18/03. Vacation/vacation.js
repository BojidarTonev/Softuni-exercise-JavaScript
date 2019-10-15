class Vacation {
    constructor(organizer, destination, budget){
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget){
        if(this.budget > budget){
            return `${name}'s money is not enough to go on vacation to ${this.destination}`;
        }

        if(!this.kids.hasOwnProperty(grade)){
            this.kids[grade] = [];
        }

        if(this.kids[grade].filter(k => k.split('-')[0] == name).length == 0){
            let kidStr = `${name}-${budget}`;
            this.kids[grade].push(kidStr);

            return this.kids[grade];
        } else {
            return `${name} is already in the list for the ${this.destination} vacation.`;
        }

    }

    removeChild(name, grade){
        let kid = this.kids[grade].find(x => x.split('-')[0] == name);
        if(kid === undefined){
            return `We couldn't find ${name} in ${grade}.`;
        }
        
        let kidIndex = this.kids[grade].indexOf(kid);
        this.kids[grade].splice(kidIndex, 1);
        
        return this.kids[grade];
    }

    toString(){
        let allkinds = 0;
        for(let grade of Object.keys(this.kids)){
            for(let kid of this.kids[grade]){
                allkinds++;
            }
        }

        if(allkinds == 0){
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`
        }

        let result = `${this.organizer} will take ${allkinds} children on trip to ${this.destination}\n`;
        for(let grade of Object.keys(this.kids)){
            result += `Grade: ${grade}\n`;
            let counter = 1;
            for(let kid of this.kids[grade]){
                result += `${counter}. ${kid}\n`;

                counter++;
            }
        }

        return result;
    }

    get numberOfChildren(){
        let allkinds = 0;
        for(let grade of Object.keys(this.kids)){
            for(let kid of this.kids[grade]){
                allkinds++;
            }
        }

        return allkinds;
    }
}

function solve(){
}


solve();
