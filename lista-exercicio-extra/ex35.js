// 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
// conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
// estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
// vetor pode ser preenchido quantas vezes forem necessárias.

const prompt = require('prompt-sync') ()

let par = []
let impar = []

for(let i = 0; i < 30; i++) {
  let result = Number(prompt(`Digite o número ${i}: `))

  if(result % 2 === 0) {
    par.push(result)

    if(par.length === 5) {
      console.log(par)
      par = []
    }

  } else {
    impar.push(result)

    if(impar.length === 5) {
      console.log(impar)
      impar = []
    }

  }
}

if(par.length > 0) console.log(par)
if(impar.length > 0) console.log(impar)
