 function suppliesForSchool(input) {
 let packOfPens = Number(input[0])
 let packOfMarkers = Number(input[1])
 let chemickal = Number(input[2])
 let percentDiscount = Number(input[3]) / 100

 let totalSum = (packOfPens * 5.80) + (packOfMarkers * 7.20) + (chemickal * 1.20)
 let discount = totalSum * percentDiscount

 let finalPrice = totalSum - discount

 console.log(finalPrice)
 }
