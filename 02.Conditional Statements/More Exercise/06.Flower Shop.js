function flowerShop(input) {
    let magnolias = Number(input[0]);
    let hyacinth = Number(input[1]);
    let roses = Number(input[2]);
    let cactus = Number(input[3]);
    let giftPrice = Number(input[4]);

    let magnoliasPrice = 3.25
    let hyacinthPrice = 4
    let rosesPrice = 3.50
    let cactusPrice = 8

    let revenue = (magnolias * magnoliasPrice) + (hyacinth * hyacinthPrice) + (roses * rosesPrice) + (cactus * cactusPrice);
    let taxes = revenue * 0.05;
    let profit = revenue - taxes;

    let totalMoney = Math.abs(profit - giftPrice)

    if (profit >= giftPrice) {
        console.log(`She is left with ${Math.floor(totalMoney)} leva.`)
    } else {
        console.log(`She will have to borrow ${Math.ceil(totalMoney)} leva.`)
    }

}
flowerShop(['15', '7', '5', '10', '100'])
