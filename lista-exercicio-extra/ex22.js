// 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um   número não determinado de pessoas e retorne a média de salário da população, a média do número de filhos, o maior salário e o percentual de pessoas com salário até R$350,00.

const prompt = require('prompt-sync') ()

let verifica = ''
let salarios = []
let filhos = []

function media(s, f) {

let somaSalarios = 0
let somaFilhos = 0
let mediaSalarios = 0
let mediaFilhos = 0 

const quantidadePessoas = s.length
const maiorSalario = Math.max(...s)

  for(let valor of s) {     //Outra forma de fazer let soma = s.reduce((total, n) => total + n, 0)
    somaSalarios += valor
  }

  mediaSalarios = somaSalarios / quantidadePessoas

  for(let valor of f) {
    somaFilhos += valor
  }

  mediaFilhos = somaFilhos / quantidadePessoas

  let quantidade350 = 0

  for(let valor of s) {
    if(valor <= 350) {
      quantidade350++
    }
  }

  quantidade350 = (quantidade350 / quantidadePessoas) * 100

  console.log(`
  Média dos salários: ${mediaSalarios.toFixed(2)}
  Média do número de filhos: ${mediaFilhos.toFixed(2)}
  Maior salário: ${maiorSalario.toFixed(2)}
  Percentual de pessoas com salário menor que R$ 350,00: ${quantidade350.toFixed(2)}%
    `)
}

while(verifica != 'sair') {

  let salario =  Number(prompt('Digite seu salário: '))
  if(isNaN(salario)) {
    salario = Number(prompt('Você não digitou um número! Digite apenas números: '))
  }
  salarios.push(salario)
  
  let filho = Number(prompt('Quantos filhos você tem? '))
    if(isNaN(filho)) {
    filho = Number(prompt('Você não digitou um número! Digite apenas números: '))
  }
  filhos.push(filho)

  verifica = prompt('Digite "Continuar" para informar o próximo ou "Sair" para finalizar ')
  verifica = verifica.trim().toLowerCase()
}

media(salarios, filhos)