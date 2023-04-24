function numbersWithStep3 (input) {
    let number = Number(input[0])
    let step = 3

    for (let num = 1; num <= number; num += step)
    console.log(num)
}
numbersWithStep3(['15'])