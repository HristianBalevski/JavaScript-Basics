function fishland(input) {
    let mackerelPrice = Number(input[0]);
    let sprinklePrice = Number(input[1]);
    let bonitoKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let musselsKg = Number(input[4]);

    let bonitoPrice = (mackerelPrice + (mackerelPrice * 0.6)) * bonitoKg
    let safridPrice = (sprinklePrice + (sprinklePrice * 0.8)) * safridKg
    let musselsPrice = musselsKg * 7.5

    let totalPrice = bonitoPrice + safridPrice + musselsPrice
    console.log(totalPrice.toFixed(2))

}
