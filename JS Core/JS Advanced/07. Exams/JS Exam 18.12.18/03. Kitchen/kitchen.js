class Kitchen{
    constructor(budget){
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(products){
        for(let product of products){
            let tokens = product.split(' ');
            let productName = tokens[0];
            let productQuantity = tokens[1];
            let productPrice = tokens[2];

            let price = productPrice * productQuantity;

            if(this.budget >= productPrice){
                if(this.productsInStock.hasOwnProperty(productName)){
                    this.productsInStock[productName] += productQuantity;
                } else {
                    this.productsInStock[productName] = productQuantity;
                }
                this.budget -= productPrice;

                let str = `Successfully loaded ${productQuantity} ${productName}`;
                this.actionsHistory.push(str);

            } else {
                let str = `There was not enough money to load ${productQuantity} ${productName}`;
                this.actionsHistory.push(str);
            }

        }

        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price){
        if(this.menu.hasOwnProperty(meal)){
            return `The ${meal} is already in our menu, try something different.`;
        } else {
            this.menu[meal] = {};
            this.menu[meal].name = meal;
            this.menu[meal].products = neededProducts;
            this.menu[meal].price = price;

            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        }
    }

    showTheMenu(){
        if(Object.keys(this.menu).length == 0){
            return `Our menu is not ready yet, please come later...`;
        } else {
            let result = ''
            for(let key in this.menu){
                if(this.menu.hasOwnProperty(key)){
                    result += `${this.menu[key].name} - $ ${this.menu[key].price}\n`;
                }
            }

            return result.trim();
        }
    }

    makeTheOrder(meal){
        if(!this.menu.hasOwnProperty(meal)){
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            let menuMeal = this.menu[meal];
            for(let product of menuMeal.products){
                let productName = product.split(' ')[0];
                let productQuantity = product.split(' ')[1];

                if(this.productsInStock.hasOwnProperty(productName)){
                    if(this.productsInStock[productName] < productQuantity){
                        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                    }
                } else {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                }
            }
            
            for(let product of menuMeal.products){
                let productName = product.split(' ')[0];
                let productQuantity = product.split(' ')[1];

                this.menu[productName] -= productQuantity;
            }

            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
        }
    }
}