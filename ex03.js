const prompt = require('prompt-sync') ()

const note = prompt('Digite uma nota de 0 a 10: ')

if(isNaN(note) || note > 10 || note < 0) {
  console.log('Você não digitou uma nota entre 0 a 10.')
  return
}

if (note <= 5) {
  console.log('Você foi reprovado.')
} else if (note < 7) {
  console.log('Você está em recuperação.')
} else {
  console.log('Você está aprovado.')
}