function truckDriver(input) {
    let season = input[0];
    let kilometers = Number(input[1]);

    let salary = 0
    let taxes = 0.10

    if (season == 'Spring' || season == 'Autumn') {
        if (kilometers <= 5000) {
            salary = kilometers * 0.75
        } else if (kilometers <= 10000) {
            salary = kilometers * 0.95
        } else {
            salary = kilometers * 1.45
        }
    } else if (season == 'Summer') {
        if (kilometers <= 5000) {
            salary = kilometers * 0.90
        } else if (kilometers <= 10000) {
            salary = kilometers * 1.10
        } else {
            salary = kilometers * 1.45
        }
    } else {
        if (kilometers <= 5000) {
            salary = kilometers * 1.05
        } else if (kilometers <= 10000) {
            salary = kilometers * 1.25
        } else {
            salary = kilometers * 1.45
        }

    }
    salary -= salary * taxes
    salary *= 4
    console.log(salary.toFixed(2))
}
truckDriver(['Summer', '3455'])
truckDriver(['Winter', '4350'])