function sleepyTomCat(input) {
    let daysOff = Number(input[0]);

    let workingDays = (365 - daysOff)
    let minutesForPlayInWorkingDays = workingDays * 63
    let minutesForPlayInDaysOff = daysOff * 127
    let totalMinutesForPlay = minutesForPlayInDaysOff + minutesForPlayInWorkingDays

    let minutesOver = Math.abs(totalMinutesForPlay - 30000)
    let hours = Math.floor(minutesOver / 60);
    let minutes = minutesOver % 60;

    if (totalMinutesForPlay > 30000) {

        console.log('Tom will run away')
        console.log(`${hours} hours and ${minutes} minutes more for play`)
    } else {
        console.log('Tom sleeps well')
        console.log(`${hours} hours and ${minutes} minutes less for play`)
    }
}
sleepyTomCat(['113'])