const prompt = require('prompt-sync') ()

let soma = 0
let number = 0
let contador = 0

do {
  number = parseFloat(prompt('Digite um número decimal: '))

  if(number != 0) {
    soma += number
    contador += 1
  }
 } while(number !== 0)

if(contador > 0) {
  console.log(`A média dos números digitados é: ${soma / contador}`)
} else {
  console.log('Erro: Números inválidos foram digitados.')
}
