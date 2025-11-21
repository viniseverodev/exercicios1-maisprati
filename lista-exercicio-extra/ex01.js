const prompt = require('prompt-sync') ()

const quantidadeCigarros = prompt('Qual é a quantidade de cigarros que você fuma por dia? ')

const anosFumando = prompt('Por quantos anos você já fuma? ')

const totalCigarros = quantidadeCigarros * 365 * anosFumando
const tempoPerdido = totalCigarros * 10
const diasPerdidos = tempoPerdido / 1440

console.log(`O total de dias de vida perdido é de: ${diasPerdidos.toFixed(2)} dias perdidos.`)