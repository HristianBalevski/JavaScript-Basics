function sumSeconds(input) {
let firstPlayerTime = Number(input[0])
let secondPlayerTime = Number(input[1])
let thirdPlayerTime = Number(input[2])

let totalTime = firstPlayerTime + secondPlayerTime + thirdPlayerTime

let hours = Math.floor(totalTime / 60)
let minutes = totalTime % 60

if (minutes < 10) {
console.log(`${hours}:0${minutes}`)
} else {
console.log(`${hours}:${minutes}`)
}
} 
