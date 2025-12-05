// 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
// mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
// que eles foram informados.

const prompt = require('prompt-sync') ()

let nomes = []

console.log('Digite 7 nomes!\n')

for(let i = 1; i < 8; i++) {

  const nome = prompt(`Digite o nome ${i}: `)
  nomes.push(nome)
}

console.log(`Lista de nomes digitados: ${nomes.reverse().join(", ")}`)