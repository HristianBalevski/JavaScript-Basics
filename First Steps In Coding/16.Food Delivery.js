 function foodDelivery(input) {
 let chickenMenuQuantity = Number(input[0])
 let fishMenuQuantity = Number(input[1])
 let vegetarianMenuQuantity = Number(input[2])

 let totalPrice = (chickenMenuQuantity * 10.35) + (fishMenuQuantity * 12.40) + (vegetarianMenuQuantity * 8.15)
 let dessertPrice = totalPrice * 0.20
 let delivery = 2.50

 let finalPrice = totalPrice + dessertPrice + delivery
 console.log(finalPrice)
 }
