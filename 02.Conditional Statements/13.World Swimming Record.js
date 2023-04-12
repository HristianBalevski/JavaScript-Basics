function worldSwimmingRecord(input) {
let worldRecord = Number(input[0])
let distance = Number(input[1])
let timeForOneMeter = Number(input[2])

let delay = Math.floor(distance / 15) * 12.5
let ivanTime = (distance * timeForOneMeter) + delay

if (ivanTime < worldRecord) {
    console.log(`Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`)
}else {
    let needed_time = ivanTime - worldRecord
    console.log(`No, he failed! He was ${needed_time.toFixed(2)} seconds slower.`)
}
}
