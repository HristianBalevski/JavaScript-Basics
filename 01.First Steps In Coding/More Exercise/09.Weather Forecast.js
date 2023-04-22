function weatherForecast(input) {
    let word = input[0]
    let forecast = ''

    switch (word) {
        case 'sunny': forecast = "It's warm outside!"; break;
        default: forecast = "It's cold outside!"

    }console.log(forecast)
}
