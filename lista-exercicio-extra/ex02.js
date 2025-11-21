const prompt = require('prompt-sync') ()

const velocidadeCarro = prompt("Qual é a velocidade do carro? ")

if (velocidadeCarro > 80) {
  calculo(velocidadeCarro)
} else {
  console.log("O carro está dentro do limite de velocidade.")
}

function calculo(velocidade) {
  const kmAtingidos = velocidade - 80
  const multa = kmAtingidos * 5

  return console.log(`Você passou o limite de velocidade permitido, sua multa é de R$${multa} reais.`)
}