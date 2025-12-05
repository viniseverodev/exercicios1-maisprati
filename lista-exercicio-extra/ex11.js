// 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
// Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
// valores da sequência.

const prompt = require('prompt-sync') ()

const primeiroTermo = Number(prompt('Digite o valor do primeiro termo: '))
const razao = Number(prompt('Digite a razão do termo: '))
let termos = []


for(let n = 1; n < 11; n++) {
  const termo = primeiroTermo + (n - 1) * razao
  termos.push(termo)
}

const decimoTermo = primeiroTermo + (10 - 1) * razao

const soma = (primeiroTermo + decimoTermo) * 5

console.log(`Soma dos 10 termos ${soma}`)
console.log(`Termos: ${termos.join(", ")}`)