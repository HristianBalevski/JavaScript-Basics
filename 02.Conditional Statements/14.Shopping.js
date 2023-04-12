function shopping(input) {
let budget = Number(input[0])
let videoCards = Number(input[1])
let cpu = Number(input[2])
let ram = Number(input[3])

let cardsPrice = videoCards * 250
let cpuPrice = (cardsPrice * 0.35) * cpu
let ramPrice = (cardsPrice * 0.1) * ram
let totalPrice = cardsPrice + cpuPrice + ramPrice

if (videoCards > cpu) {
    totalPrice -= totalPrice * 0.15
}
if (budget >= totalPrice) {
    let moneyLeft = budget - totalPrice
    console.log(`You have ${moneyLeft.toFixed(2)} leva left!`)
}else {
    let neededMoney = totalPrice - budget
    console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva more!`)
}
}
