const prompt = require('prompt-sync') ()

console.log('VERIFICANDO SE É UM TRIÂNGULO\n')

const valueA = Number(prompt('Digite um valor: '))
const valueB = Number(prompt('Digite outro valor: '))
const valueC = Number(prompt('Digite o último valor: '))

if(valueA + valueB > valueC && valueA + valueC > valueB && valueB + valueC > valueA) {
  if(valueA === valueB && valueB === valueC) {
    console.log('Você tem um triângulo Equilátero (Todos os lados são iguais).')
  } else if(valueA === valueB || valueA === valueC || valueB === valueC) {
    console.log('Você tem um triângulo Isósceles (Dois lados iguais e um diferente).')
  } else {
    console.log('Você tem um triângulo Escaleno (Todos os lados diferentes).')
  }
} else {
  console.log('Você não tem um triângulo válido.')
}
