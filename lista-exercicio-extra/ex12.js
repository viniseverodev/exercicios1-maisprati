// 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
// Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

let proximo = null
let anterior = 1
let atual = 1
let resposta = [1, 1]

for(let i = 0; i < 8; i++) {
  proximo = anterior + atual
  anterior = atual
  atual = proximo
  resposta.push(atual)
}

console.log(`Sequência Fibonacci ${resposta.join(", ")}`)