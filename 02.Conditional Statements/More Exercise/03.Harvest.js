function harvest(input) {
    let vineyardMeters = Number(input[0]);
    let grapeForOneMeter = Number(input[1]);
    let neededWine = Number(input[2]);
    let workesQuantity = Number(input[3])

    let harvestForWine = vineyardMeters * 0.4
    let totalGrapeForWine = harvestForWine * grapeForOneMeter
    let littersWine = totalGrapeForWine / 2.5

    if (littersWine >= neededWine) {
        let wineLeft = Math.ceil(littersWine - neededWine)
        let wineForWorker = Math.ceil(wineLeft / workesQuantity)

        console.log(`Good harvest this year! Total wine: ${Math.floor(littersWine)} liters.`)
        console.log(`${wineLeft} liters left -> ${wineForWorker} liters per person.`)
    } else {
        let needMoreWine = Math.floor(neededWine - littersWine)
        console.log(`It will be a tough winter! More ${needMoreWine} liters wine needed.`)
    }
}
harvest(['650', '2', '175', '3'])