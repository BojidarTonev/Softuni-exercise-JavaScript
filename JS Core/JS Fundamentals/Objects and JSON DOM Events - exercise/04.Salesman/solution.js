function solve() {
    let log = document.querySelectorAll('textarea')[2];
    let storage = [];
    let profit = 0;

    let loadButton = document.querySelector('button');
    loadButton.addEventListener('click', () => {
      let loadProducts = JSON.parse(document.querySelector('textarea').value);
      for(let product of loadProducts){
        if(storage.filter(x => x.name == product.name).length == 0){
            storage.push(product);
            log.textContent += `Successfully added ${product.quantity} ${product.name}. Price: ${+product.price.toFixed(2)}\n`;
        } else {
            let element = storage.find(function(e){
              return e.name == product.name
            });

            let index = storage.indexOf(element);

            element.quantity += product.quantity;
            element.price = product.price;
            storage[index] = element;

            log.textContent += `Successfully added ${product.quantity} ${product.name}. Price: ${+product.price.toFixed(2)}\n`;
        }
      }
    });

    let buyButton = document.querySelectorAll('button')[1];
    buyButton.addEventListener('click', () => {
      let product = JSON.parse(document.querySelectorAll('textarea')[1].value);

      let neededQuantity = product.quantity;
      let stockProduct = storage.find(function(x){
        return x.name == product.name
      });

      if(stockProduct && stockProduct.quantity >= neededQuantity){
          stockProduct.quantity -= neededQuantity;
          let moneyMade = neededQuantity * stockProduct.price
          profit += +moneyMade;
          log.textContent += `${neededQuantity} ${stockProduct.name} sold for ${+moneyMade}.\n`;
      } else {
          log.textContent += `Cannot complete order.\n`;
      }});

    let endDayButton = document.querySelectorAll('button')[2];
    endDayButton.addEventListener('click', () => {
      log.textContent += `Profit: ${profit.toFixed(2)}\n`;
      loadButton.disabled = true;
      buyButton.disabled = true;
    });
    
}