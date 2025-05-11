const prompt = require('prompt-sync') ()

let fatorial = 1

const number = Number(prompt('Qual número você deseja calcular o fatorial? '))

for(let i = 1; i <= number; i++) {
  fatorial = fatorial * i
}

console.log(`O fatorial de ${number} é: ${fatorial}`)