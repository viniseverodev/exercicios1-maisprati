const prompt = require('prompt-sync') ()

const number = Number(prompt('Digite um número inteiro: '))

if (!Number.isInteger(number)) {
  console.log('Você não digitou um número inteiro!')
  return
}

if (number % 2== 0) {
  console.log(`O número ${number} é PAR!`)
} else {
  console.log(`O número ${number} é IMPAR!`)
}