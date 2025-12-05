// 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
// h -1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
// multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

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