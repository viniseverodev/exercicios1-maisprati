// 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
// repetição. Escrever cada um deles no formato HH.MM.SS.

const prompt = require('prompt-sync') ()

let contador = 0
let horas = []
let minutos = []
let segundos = []

while(contador < 5) {
  console.log('\n== DIGITE UM HORARIO ==\n')
  let hora = Number(prompt('Digite a hora: '))
  while(hora < 0 || hora > 23) {
    hora = Number(prompt('Digite a hora: '))
  }
  horas.push(hora)

  let minuto = Number(prompt('Digite o minuto: '))
  while(minuto < 0 || minuto > 59) {
    minuto = Number(prompt('Digite o minuto: '))
  }
  minutos.push(minuto)

  let segundo = Number(prompt('Digite o segundo: '))
  while(segundo < 0 || segundo > 59) {
    segundo = Number(prompt('Digite o segundo: '))
  }
  segundos.push(segundo)

  contador++
}

console.log('\n== HORÁRIOS DIGITADOS ==\n')

for(let i = 0; i < horas.length; i++) {
  console.log(`${horas[i]}:${minutos[i]}:${segundos[i]}\n`)
}