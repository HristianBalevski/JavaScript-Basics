function weatherForecast(input) {
    let degrees = Number(input[0]);
    let forecast = ''

    if (degrees >= 5 && degrees <= 11.9) {
        forecast = 'Cold'
    } else if (degrees >= 12 && degrees <= 14.9) {
        forecast = 'Cool'
    } else if (degrees >= 15 && degrees <= 20) {
        forecast = 'Mild'
    } else if (degrees >= 20.1 && degrees <= 25.9) {
        forecast = 'Warm'
    } else if (degrees >= 26 && degrees <= 35) {
        forecast = 'Hot'
    } else {
        forecast = 'unknown'
    } console.log(forecast)
}
