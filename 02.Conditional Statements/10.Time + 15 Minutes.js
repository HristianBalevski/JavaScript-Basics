function timePlus15Minutes(input) {
let hours = Number(input[0])
let minutes = Number(input[1]) + 15

if (minutes >= 60) {
    hours += 1
    }

if (hours >= 23 && minutes >= 60) {
    hours = 0
    minutes %= 60
} else {
    minutes %= 60
}
if (minutes < 10) {
    console.log(`${hours}:0${minutes}`)
}else {
    console.log(`${hours}:${minutes}`)
}
}
