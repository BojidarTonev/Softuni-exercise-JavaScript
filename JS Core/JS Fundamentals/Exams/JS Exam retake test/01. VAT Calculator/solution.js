function solve(priceWithVat, vatRate){
    let fraction = 1 + vatRate/100;
    let finalPrice = priceWithVat / fraction
    console.log(finalPrice.toFixed(2));
}

solve(220, 10);