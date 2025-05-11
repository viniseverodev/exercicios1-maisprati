const prompt = require('prompt-sync') ()

console.log('Valores:\nMenos de 12un - R$ 0,30 un.\n12un ou mais - R$ 0,25\n')
const apple = Number(prompt('Digite o número de maças que deseja comprar: '))

if(apple < 12) {
  const soma = apple * 0.30
  console.log(`Você está comprando ${apple} maças, totalizando: R$ ${soma}.`)
} else {
  const soma = apple * 0.25
  console.log(`Você está comprando ${apple} maças, totalizando: R$ ${soma}`)
}