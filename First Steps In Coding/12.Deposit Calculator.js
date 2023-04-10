function depositCaclulator(input) {
let depositedSum = Number(input[0])
let timeOfDeposit = Number(input[1])
let annualInterestPercent = Number((input[2])) / 100

let sum = depositedSum + timeOfDeposit * ((depositedSum * annualInterestPercent) / 12)
console.log(sum)
}
