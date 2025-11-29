const prompt = require('prompt-sync') ()

const horasAtividades = Number(prompt('Quantas horas de atividade físico você teve no mês? '))

let pontos = 0 
let dinheiro = 0

if (horasAtividades <= 10) {
  pontos = horasAtividades * 2
} else if(horasAtividades <= 20) {
  pontos = (10 * 2) + ((horasAtividades - 10) * 5)
} else if(horasAtividades > 20) {
  pontos = (10 * 2) + (10 * 5) + ((horasAtividades - 20) * 10)
} else {
  console.log('Digite um número válido.')
}

dinheiro = pontos * 0.05

console.log(`Você acumulou ${pontos} pontos e teve um ganho de R$ ${dinheiro.toFixed(2)} reais.`)