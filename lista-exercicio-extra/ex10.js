// 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.

const prompt = require('prompt-sync') ()

let verificar = 0
let contador = 0
let numero = 0
let somatorio = 0
let menorNumero = 0
let media = 0
let pares = 0

do {

numero = Number(prompt('Digite um número '))
console.log('')

verificar = Number(prompt('Digite "1" para digitar um próximo número ou "2" para sair. '))
console.log('')

contador++

somatorio += numero

if(contador === 1) {
  menorNumero = numero
} else if(numero < menorNumero) {
  menorNumero = numero
}

media = somatorio / contador

if(numero % 2 === 0) {pares++}

} while(verificar != 2)

console.log(`
  O somatório entre todos os valores é: ${somatorio}
  O menor valor digitado é: ${menorNumero}
  A média entre todos os valores é: ${media}
  A quantidade de números pares digitados foram: ${pares}`)