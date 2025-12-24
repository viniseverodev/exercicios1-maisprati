// 40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
// resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
// cada), representando as apostas feitas. Compare os números das apostas com o
// resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
// corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
// e quadras, apenas por quinas.)

let vetor = [5, 2, 1, 9, 10]
let aposta = [5, 1, 3, 4, 9]
let contador = 0

for(let i = 0; i < vetor.length; i++){
  if(vetor[i] === aposta[i]) {
    contador++
  }
}

if(contador === 5) {
  console.log(`Você é o ganhador! Com ${contador} acertos.`)
} else {
  console.log(`Você fez apenas ${contador} acertos, não foi dessa vez.`)
}