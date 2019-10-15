function solve() {
    let textAreaElement = document.querySelector('textarea');
    let buyButton = document.querySelectorAll('button')[3];

    let boughtItems = [];
    let sum = 0;

    let products = document.querySelectorAll('.product');
    for(let product of products){
        let name = product.children[1].textContent;
        let price = product.children[2].textContent.split(': ')[1];
        let button = product.children[3];

        button.addEventListener('click', () => {
            let result = `Added ${name} for ${price} to the cart.\n`;
            sum += +price;
            boughtItems.push(name);
            textAreaElement.textContent += result
        });
    }

    buyButton.addEventListener('click', () => {
        var filteredArray = boughtItems.filter(function(item, pos){
            return boughtItems.indexOf(item) == pos; 
          });

          let res = `You bought ${filteredArray.join(', ')} for ${sum.toFixed(2)}.\n`;
          textAreaElement.textContent += res;
    });

}