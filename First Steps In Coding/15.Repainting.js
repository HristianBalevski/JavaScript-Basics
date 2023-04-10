 function repainting(input) {
 let nylon = Number(input[0])
 let paint = Number(input[1])
 let paintThinner = Number(input[2])
 let hours = Number(input[3])

 let extraPaint = paint * 0.10
 let totalPaint = paint + extraPaint
 let totalNylon = nylon + 2

 let totalPrice = (totalNylon * 1.5) + (totalPaint * 14.5) + (paintThinner * 5) + 0.40
 let salaryForBuilders = totalPrice * 0.30
 let totalSalary = hours * salaryForBuilders

 totalExpenses = totalPrice + totalSalary
 console.log(totalExpenses)
 }
