function vegetablesMarket(input){
    let vegetablesPrice = Number(input[0]);
    let fruitsPrice = Number(input[1]);
    let vegTotalKilograms = Number(input[2]);
    let fruitsTotalKilogramgs = Number(input[3]);

    let euroPrice = 1.94;
    let priceInEuro = ((vegTotalKilograms * vegetablesPrice) + (fruitsTotalKilogramgs * fruitsPrice)) / euroPrice
    
    console.log(priceInEuro.toFixed(2))
}
