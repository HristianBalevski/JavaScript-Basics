function onTimeForTheExam(input) {
    let examHour = Number(input[0])
    let examMinutes = Number(input[1])
    let arrivedHour = Number(input[2])
    let arrivedMinutes = Number(input[3])

    let examTotalMinutes = (examHour * 60) + examMinutes
    let arrivedTotalMinutes = (arrivedHour * 60) + arrivedMinutes

    let finalTime = Math.abs(examTotalMinutes - arrivedTotalMinutes)
    let hours = Math.floor(finalTime / 60)
    let minutes = finalTime % 60

    if (arrivedTotalMinutes > examTotalMinutes) {
        if (hours > 0) {
            if (minutes < 10) {
                console.log(`Late ${hours}:0${minutes} hours after the start`)
            } else {
                console.log(`Late ${hours}:${minutes} hours after the start`)
            }
        } else {
            console.log(`Late ${minutes} minutes after the start`)
        }
    } else {
        if (finalTime > 59) {
            if (minutes < 10) {
                console.log(`Early ${hours}:0${minutes} hours before the start`)
            } else {
                console.log(`Early ${hours}:${minutes} hours before the start`)
            }

        } else {
            if (finalTime > 30) {
                console.log(`Early ${minutes} minutes before the start`)
            } else {
                if (finalTime === 0) {
                    console.log('On Time')
                } else {
                    console.log(`On time ${minutes} minutes before the start`)
                }
            }
        }
    }
}
