function numsDivisibleBy9(input) {
    let firstNum = Number(input[0])
    let secondNum = Number(input[1])

    let totalSum = 0
    let allNumbers = []

    for (let i = firstNum; i <= secondNum; i++) {
        if (i % 9 == 0) {
            totalSum += i
            allNumbers.push(i)
        }
    } console.log(`The sum: ${totalSum}`)
    console.log(allNumbers.join('\n'))

}
numsDivisibleBy9(['100', '200'])