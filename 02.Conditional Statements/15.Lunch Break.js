function lunchBreak(input) {
let serialName = input[0]
let durationOfTheSerial = Number(input[1])
let breakDuration = Number(input[2])

let lunchTime = breakDuration * 1/8
let timeForRelax = breakDuration * 1/4
let timeLeft = (breakDuration - (lunchTime + timeForRelax)) - durationOfTheSerial

if (timeLeft >= 0) {
    console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(timeLeft)} minutes free time.`)
}else {
    timeLeft = Math.abs(timeLeft)
    console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(timeLeft)} more minutes.`)
}
}
