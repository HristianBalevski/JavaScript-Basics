function vowelsSum(input) {
    let word = input[0]
    let sum = 0

    for (let num = 0; num < word.length; num++) {
        let current_letter = word[num]

        switch (current_letter) {
            case 'a': sum += 1; break;
            case 'e': sum += 2; break;
            case 'i': sum += 3; break;
            case 'o': sum += 4; break;
            case 'u': sum += 5
        }
    } console.log(sum)
}
vowelsSum(['bamboo'])