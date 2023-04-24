function sumOfNumbers(input) {
    let numberAsString = input[0]
    let sum = 0

    for (let i = 0; i < numberAsString.length; i++) {
        let number = Number(numberAsString[i])
        sum += number
    } console.log(`The sum of the digits is:${sum}`)

}
sumOfNumbers(['564891'])