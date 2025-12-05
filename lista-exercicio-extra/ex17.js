// 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
// dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
// os dados das pessoas menores de idade.

const prompt = require('prompt-sync') ()

let nomes = []
let idades = []
let nomeMenores = []
let idadeMenores = []

for(let i = 0; i < 9; i++) {
  const nome = prompt('Digite seu nome: ')
  nomes.push(nome)

  const idade = Number(prompt('Digite sua idade: '))
  idades.push(idade)

  if(idades[i] < 18) {
    nomeMenores.push(nomes[i])
    idadeMenores.push(idades[i])
  }
}

console.log('\n== NOME DOS MENORES DE IDADE ==\n')

for(let i = 0; i < nomeMenores.length; i++) {
  console.log(`Nome: ${nomeMenores[i]}, idade: ${idadeMenores[i]}`)
}