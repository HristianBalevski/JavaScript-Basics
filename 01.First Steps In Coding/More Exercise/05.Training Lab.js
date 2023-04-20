function trainingLab(input){
    let w = Number(input[0]) * 100;
    let h = Number(input[1]) * 100;

    let rows = Math.floor(w / 120);
    let cols = Math.floor((h - 100) / 70);
    let result = (rows * cols) - 3;

    console.log(result)

}
