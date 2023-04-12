function godzillaVsKong(input) {
let budget = Number(input[0])
let people = Number(input[1])
let priceForClothes = Number(input[2])

let decor = budget * 0.1

if (people >= 150) {
    priceForClothes -= priceForClothes * 0.1
}
let totalMoney = decor + priceForClothes * people

if (totalMoney > budget) {
    let neededMoney = totalMoney - budget
    console.log("Not enough money!")
    console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`)
}else {
let moneyLeft = budget - totalMoney
console.log("Action!")
console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
}
}
