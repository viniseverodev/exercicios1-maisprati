const prompt = require('prompt-sync') ()

const age  = prompt('Qual é a sua idade? ')

if (age <= 12) {
  console.log('Você ainda é uma criança.')
} else if(age <= 17) {
  console.log('Você ainda é um adolescente.')
} else if(age < 60) {
  console.log('Você é um adulto.')
} else {
  console.log('Você já é um idoso.')
}