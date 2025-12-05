// 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
// podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
// sistema funciona assim:
// - até 10 h de atividade no mês: ganha 2 pontos por hora
// - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
// - acima de 20 h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
// Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

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