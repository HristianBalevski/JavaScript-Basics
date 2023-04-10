function basketballEquipment(input) {
let tax = Number(input[0])

let trainersPrice = tax - (tax * 0.40)
let equipmentPrice = trainersPrice - (trainersPrice * 0.20)
let ballPrice = equipmentPrice * 1/4
let accessoriesPrice = ballPrice * 1/5

let totalExpenses = trainersPrice + equipmentPrice + ballPrice + accessoriesPrice + tax

console.log(totalExpenses)
}
