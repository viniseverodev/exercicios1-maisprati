const prompt = require('prompt-sync') ()

const distanciakM = prompt('Qual é a distância que você vai percorrer em kM? ')

if (distanciakM <= 200) {
  console.log(`O valor da passagem será de R$${distanciakM * 0.50} reais`)
} else {
  console.log(`O valor da passagem será de R$${distanciakM * 0.45} reais.`)
}