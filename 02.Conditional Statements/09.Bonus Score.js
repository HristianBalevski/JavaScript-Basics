function bonusScore(input) {
let startPoints = Number(input[0])
let bonus = 0

if (startPoints <= 100) {bonus += 5}
else if (startPoints > 100 && startPoints < 1000) {bonus += startPoints * 0.2}
else {bonus += startPoints * 0.1}

if (startPoints % 2 === 0) {
    bonus += 1
} else if (startPoints % 5 === 0) {
    bonus += 2
}
console.log(bonus)
console.log(startPoints + bonus)
}
