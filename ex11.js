const prompt = require('prompt-sync') ()

let soma = 0

for(let i = 1; i < 6; i++) {
  const number = Number(prompt(`Digite o ${i}º número: `))
  soma += number
}

console.log(`A soma de todos os números é ${soma}`)