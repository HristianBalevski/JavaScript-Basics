function operartionBetweenNumbers(input) {
    let num1 = Number(input[0])
    let num2 = Number(input[1])
    let operator = input[2]

    if (operator === '+') {
        result = num1 + num2
        if (result % 2 === 0) {
            console.log(`${num1} + ${num2} = ${result} - even`)
        } else {
            `${num1} + ${num2} = ${result} - odd`
        }
    } else if (operator === '-') {
        result = num1 - num2
        if (result % 2 === 0) {
            console.log(`${num1} - ${num2} = ${result} - even`)
        } else {
            console.log(`${num1} - ${num2} = ${result} - odd`)
        }
    } else if (operator === '*') {
        result = num1 * num2
        if (result % 2 === 0) {
            console.log(`${num1} * ${num2} = ${result} - even`)
        } else {
            console.log(`${num1} * ${num2} = ${result} - odd`)
        }
    } else if (operator === '/') {
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`)
        } else {
            let result = num1 / num2
            console.log(`${num1} / ${num2} = ${result.toFixed(2)}`)
        }
    } else {
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`)
        } else {
            result = num1 % num2
            console.log(`${num1} % ${num2} = ${result}`)
        }
    }
}
