// 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
// final, mostre quais são os números pares que foram digitados e em que posições eles
// estão armazenados.

const prompt = require('prompt-sync') ()

let numeros = []
let pares = []
let posicao = []

for(let i = 1; i < 11; i++) {

  const numero = parseInt(prompt('Digite um número inteiro: '))
  numeros.push(numero)

  if(numero % 2 === 0) {
    pares.push(numero)
    posicao.push(i - 1)
  }
}

console.log(`
Os números pares digitados foram os: ${pares.join(", ")}
Eles estão nas posições do array: ${posicao.join(", ")}`)