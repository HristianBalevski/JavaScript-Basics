function pipesInPool(input) {
    let poolCapacity = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let hours = Number(input[3]);

    let totalValueFromP1 = p1 * hours
    let totalValueFromP2 = p2 * hours

    let totalWater = totalValueFromP1 + totalValueFromP2
    let p1InPercengate = (totalValueFromP1 / totalWater) * 100
    let p2InPercentage = (totalValueFromP2 / totalWater) * 100
    let totalWaterInPercentage = (totalWater / poolCapacity) * 100

    if (totalWater <= poolCapacity) {
        console.log(`The pool is ${totalWaterInPercentage.toFixed(2)}% full. Pipe 1: ${p1InPercengate.toFixed(2)}%. Pipe 2: ${p2InPercentage.toFixed(2)}%.`)
    } else {
        let overflow = totalWater - poolCapacity
        console.log(`For ${hours} hours the pool overflows with ${overflow.toFixed(2)} liters.`)
    }
}
