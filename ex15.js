let number1 = 0
let number2 = 1

let fibonacci = 0

console.log(number1)

for(let i = 1; i <= 9; i++) {
  fibonacci = number1 + number2
  console.log(fibonacci)
  number1 = number2
  number2 = fibonacci
}