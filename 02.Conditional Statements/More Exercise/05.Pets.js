function pets(input) {
    let days = Number(input[0]);
    let foodKg = Number(input[1]);
    let dogFood = Number(input[2]);
    let catFood = Number(input[3]);
    let turtleFood = Number(input[4]) / 1000;

    let neededFood = (dogFood + turtleFood + catFood) * days
    let foodLeft = Math.abs(foodKg - neededFood)

    if (neededFood <= foodKg) {
        console.log(`${Math.floor(foodLeft)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(foodLeft)} more kilos of food are needed.`)
    }
}
pets(['5', '10', '2.1', '0.8', '321'])
