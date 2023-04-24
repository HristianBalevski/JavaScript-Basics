function charSequence(input) {
    let word = input[0]

    for (let i = 0; i < word.length; i++) {
        let char = word[i]
        console.log(char)
    }
}
charSequence(['ice cream'])