function evenPowersOfTwo(input) {
    let number = Number(input[0])

    for (let num = 0; num <= number; num++) {
        result = 2 ** num
        if (num % 2 == 0) {
            console.log(result)
        }

    }
}
evenPowersOfTwo(['6'])