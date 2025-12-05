// 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// R$ 0.45 para viagens mais longas.

const prompt = require('prompt-sync') ()

const distanciakM = prompt('Qual é a distância que você vai percorrer em kM? ')

if (distanciakM <= 200) {
  console.log(`O valor da passagem será de R$${distanciakM * 0.50} reais`)
} else {
  console.log(`O valor da passagem será de R$${distanciakM * 0.45} reais.`)
}