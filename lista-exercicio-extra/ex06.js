// 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// tentar descobrir qual foi o valor sorteado.

const prompt = require('prompt-sync') ()

const computador = Math.floor(Math.random() * 5) + 1

const response = Number(prompt('Escreva um número de 1 a 5: '))

if(response === computador) {
  console.log('Parabéns você acertou o número escolhido pelo computador que foi: ' + response )
} else {
  console.log('Você errou, o computador tinha escolhido o número: ' + computador) 
}