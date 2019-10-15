function solve(){
    class Kitchen{
        constructor(budget){
            this.budget = budget;
            this.menu = [];
            this.productsInStock = [];
            this.auctionsHistory = [];

        }

        loadProducts(products){
            for(let item of products){
                let tokens = item.split(' ');
                let productName = tokens[0];
                let productQuantity = Number(tokens[1]);
                let productPrice = Number(tokens[2]);
                if(this.budget >= productPrice){
                    if(this.productsInStock.filter(x => x.name == productName).length == 0){
                        let product = {
                            name: productName,
                            quantity: productQuantity,
                            price: productPrice
                        };
        
                        this.productsInStock.push(product);

                    } else {
                        let product = this.productsInStock.find(x => x.name == productName);
                        product.quantity += productQuantity;
                    }

                    this.budget -= productPrice;
                    this.auctionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
                } else {
                    this.auctionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
                }
            }

            let result = this.auctionsHistory.join('\n');
            return result;
        }

        addToMenu(meal, neededProducts, price){
            if(this.menu.filter(x => x.name == meal).length == 0){
                let needProducts = [];
                for(let item of neededProducts){
                    let tokens = item.split(' ');
                    let productName = tokens[0];
                    let productQuantity = tokens[1];

                    let product = {
                        name: productName,
                        quantity: productQuantity
                    };

                    needProducts.push(product);
                }

                let meall = {
                    name: meal,
                    neededProducts: needProducts,
                    price: price,
                };
                this.menu.push(meall);
                return `Great idea! Now with the ${meal} we have ${this.menu.length} meals in the menu, other ideas?`;
            } else {
                return `The ${meal} is already in our menu, try something different.`;
            }
        }

        showTheMenu(){
            if(this.menu.length == 0){
                return 'Our menu is not ready yet, please come later...';
            } else {
                return this.menu.map(x => `${x.name} - $ ${x.price}`).join('\n') + '\n';
            }
        }

        makeTheOrder(meal){
            if(this.menu.filter(x => x.meal).length == 0){
                return `There is not ${meal} yet in our menu, do you want to order something else?`;
            } else {
                let meal = this.menu.find(x => x.name == meal);
                let weCanMakeIt = true;
                for(let item of meal.neededProducts){
                    let stockProduct = this.productsInStock.find(x => x.name == item.name);
                    if(stockProduct.quantity < item.quantity || typeof(stockProduct) == 'undefined'){
                        weCanMakeIt = false;
                        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;

                    } else {
                        stockProduct.quantity -= item.quantity;
                    }
                }

                if(weCanMakeIt){
                    this.budget += meal.price;
                    return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${meal.price}.`;

                }
            }
        }

        _addProduct(productName, productQuantity, productPrice){
            if(this.productsInStock.filter(x => x.name == productName).length == 0){
                let product = {
                    name: productName,
                    quantity: productQuantity,
                    price: productPrice
                };

                this.productsInStock.push(product);
            } else {
                let product = this.productsInStock.find(x => x.name == productName);
                product.quantity += productQuantity;
            }
            
            this.budget -= productQuantity * productPrice;
        }
    }

}

solve();