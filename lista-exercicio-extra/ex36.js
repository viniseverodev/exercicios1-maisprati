// 36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
// um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
// do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
// número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
// o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
// mensagem "Parabéns, tu foi o GANHADOR".

const prompt = require('prompt-sync') ()
const gabarito = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let acertos = 0

for(let i = 0; i < 100; i++) {
  let numeroApostador = Number(prompt('Digite o número do seu cartão: '))
  let resposta = prompt('Digite 13 números; Ex: 1, 2, 3, .. 13: ')
  resposta = resposta.split(",").map(Number) // Transforma o vetor em números

  acertos = 0

  for(let j = 0; j < resposta.length; j++) {
    if(resposta[j] === gabarito[j]) acertos++
  }

  if(acertos === 13) {
    console.log(`Número do cartão do ganhador: ${numeroApostador}`)   
    console.log(`Quantidade de acertos do ganhador: ${acertos}`)
    console.log('Parabéns, tu foi o GANHADOR!')
  }
}
