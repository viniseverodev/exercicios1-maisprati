// 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
// carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
// cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
// (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
// mostre o preço a ser pago de acordo com os dados a seguir:
// Carros populares
// - Até 100 Km percorridos: R$ 0,20 por Km
// - Acima de 100 Km percorridos: R$ 0,10 por Km
// Carros de luxo
// - Até 200 Km percorridos: R$ 0,30 por Km
// - Acima de 200 Km percorridos: R$ 0,25 por Km

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