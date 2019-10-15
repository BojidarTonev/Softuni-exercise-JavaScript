    class Rat{
        constructor(name){
            this.name = name;
            this.insideArr = [];
        }

        unite(otherRat){
            if(otherRat instanceof Rat){
                this.insideArr.push(otherRat);
            }
        }

        getRats(){
            return this.insideArr;
        }

        toString(){
            let output = `${this.name}\n`
            for(let item of this.insideArr){
                output += `##${item.name}\n`
            }

            return output;
        }
    }





