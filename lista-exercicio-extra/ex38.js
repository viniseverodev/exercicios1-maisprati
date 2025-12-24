// 38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
// variável identificadora que calcule a operação conforme a informação contida nesta
// variável:
// 1- soma dos elementos;
// 2- produto dos elementos;
// 3- média dos elementos;
// 4- ordene os elementos em ordem crescente;
// 5- mostre o vetor.

const prompt = require('prompt-sync') ()

const vetor = [5, 9, 7, 4, 10, 2]
let valor = 0

function mensagem() {
  console.log(`
1 - Soma dos elementos
2 - Produto dos elementos
3 - média dos elementos
4 - Ordene os elementos em ordem crescente
5 - Mostre o vetor
6 - Sair
`)
}

do {
mensagem()

valor = Number(prompt('Digite a opção que deseja: '))
let soma = vetor.reduce((acc, cur) => acc + cur)
const ordemCrescente = [...vetor].sort((a, b) => a - b)

let produto = 1
for(let i = 0; i < vetor.length; i++) {
  produto = produto * vetor[i]
}

switch(valor) {
  case 1:
    console.log(`A soma dos elementos é: ${soma}`)
    break
  case 2:
    console.log(`Produto dos elementos: ${produto}`)
    break
  case 3:
    console.log(`A média dos elementos é: ${soma / vetor.length}`)
    break
  case 4:
    console.log(`Vetor ordenado em ordem crescente: ${ordemCrescente}`)
    break
    case 5:
      console.log(`Vetor original: ${vetor.join(', ')}`)
      break
    case 6:
      console.log('Saindo...')
      break
    default:
      console.log('Opção invalída, digite uma opção que seja válida.')
} 
} while(valor !== 6)