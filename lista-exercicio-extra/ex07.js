const prompt = require('prompt-sync') ()

let tipoCarro = prompt('Qual é o tipo do carro alugado? (Popular ou Luxo): ')
const diasAluguel = Number(prompt('Quantos dias de aluguel? '))
const kmPercorrido = Number(prompt('Quantos KM foram percorridos? '))

let valorDias = 0
let valorKm = 0

tipoCarro = tipoCarro.toLowerCase()

if (tipoCarro === 'popular') {
  valorDias = 90 * diasAluguel
} else if ( tipoCarro === 'luxo') {
  valorDias = 150 * diasAluguel
} else {
  console.log('Você não digitou nenhum dos dois tipos de carros disponíveis')
  return
}

if (tipoCarro === 'popular' && kmPercorrido <= 100) {
  valorKm = kmPercorrido * 0.20
} else if(tipoCarro === 'popular' && kmPercorrido > 100) {
  valorKm = (100 * 0.20) + ((kmPercorrido - 100) * 0.10)
} else if(tipoCarro === 'luxo' && kmPercorrido <= 200) {
  valorKm = kmPercorrido * 0.30
} else if(tipoCarro === 'luxo' && kmPercorrido > 200) {
  valorKm = (200 * 0.30) + ((kmPercorrido - 200) * 0.25)
} else {
  console.log('Você não digitou nenhum dos dois tipos de carros disponíveis')
  return
}

const valorTotal = valorDias + valorKm

console.log(`Valor total a pagar: R$ ${valorDias.toFixed(2)}.`)