function solve(){
    class SortedList{
        constructor(){
            this.collection = [];
            this.size = 0;
        }

        add(element){
            this.collection.push(element);
            this.collection.sort((a, b) => a - b);

            this.size++;
        }

        remove(index){
            if(index < this.collection.length && index >= 0){
                this.collection.splice(index, 1);
            }

            this.size--;
        }

        get(index){
            if(index < this.collection.length && index >= 0){
                return this.collection[index];
            }
        }
    }

}

solve();
