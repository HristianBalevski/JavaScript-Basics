function vacationBooksList (input) {
 let pagesQuantity = Number(input[0])
 let pagesPerHour = Number(input[1])
 let daysQuantity = Number(input[2])

 let totalHours = pagesQuantity / pagesPerHour
 let hoursPerDay = totalHours / daysQuantity

 console.log(hoursPerDay)
 }
