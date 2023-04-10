 function suppliesForSchool(input) {
 let packsOfPens = Number(input[0])
 let packsOfMarkers = Number(input[1])
 let chemickal = Number(input[2])
 let percentDiscount = Number(input[3]) / 100

 let totalSum = (packsOfPens * 5.80) + (packsOfMarkers * 7.20) + (chemickal * 1.20)
 let discount = totalSum * percentDiscount

 let finalPrice = totalSum - discount

 console.log(finalPrice)
 }
