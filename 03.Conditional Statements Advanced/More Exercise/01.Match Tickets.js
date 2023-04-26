function matchTickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let people = Number(input[2]);

    let vip = 499.99
    let normal = 249.99
    let transport = 0
    let totalMoneyForTickets = 0


    if (category === 'VIP') {
        totalMoneyForTickets = people * vip
    } else {
        totalMoneyForTickets = people * normal
    }
    if (people == 1 || people <= 4) {
        transport = budget * 0.75
    }else if (people == 5 || people <= 9) {
        transport = budget * 0.60
    } else if (people == 10 || people <= 24) {
        transport = budget * 0.50
    } else if (people == 25 || people <= 49) {
        transport = budget * 0.40
    } else if (people >= 50) {
        transport = budget * 0.25
    }
    budget -= transport
    let availableMoney = Math.abs(budget - totalMoneyForTickets)
    if (budget >= totalMoneyForTickets) {
        console.log(`Yes! You have ${availableMoney.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${availableMoney.toFixed(2)} leva.`)
    }

}
matchTickets(['30000', 'VIP', '49'])