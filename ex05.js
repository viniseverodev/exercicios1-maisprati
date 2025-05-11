const prompt = require('prompt-sync') ()

console.log('--CALCULANDO O IMC--')
const kg = prompt('Quantos KG você pesa? ')
const altura = prompt('Qual é a sua altura? ')

const soma = kg / (altura * altura)

if(soma < 18.5) {
  console.log('Abaixo do peso.')
} else if (soma < 24.9) {
  console.log('Peso normal.')
} else if (soma < 29.9) {
  console.log('Sobrepeso.')
} else if (soma < 34.9) {
  console.log('Obesidade grau 1.')
} else if (soma < 39.9) {
  console.log('Obesidade grau 2.')
} else {
  console.log('Obesidade grau 3 (mórbida).')
}