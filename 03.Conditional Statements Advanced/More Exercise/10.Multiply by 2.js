function multiply(input) {
    let index = 0
    let currentNumber = Number(input[index])

    while (currentNumber >= 0) {
        let result = currentNumber * 2
        console.log(`Result: ${result.toFixed(2)}`)
        index++
        currentNumber = input[index]
    } console.log('Negative number!')

}
multiply(['-123'])