const prompt = require('prompt-sync') ()

const number = parseInt(prompt('Digite um número para calcular a tabuada: '))

for(let i = 1; i < 11; i++) {
  console.log(`${i} x ${number} = ${i * number}`)
}