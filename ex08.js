const prompt = require('prompt-sync') () 

const valueOne = Number(prompt('Digite um valor: '))
const valueTwo = Number(prompt('Digite outro valor: '))

if(valueOne == valueTwo) {
  console.log('Você não pode digitar valores iguais.')
  return
}

if(valueOne > valueTwo) {
  console.log(`Valores em ordem crescente: ${valueTwo}, ${valueOne}.`)
} else {
  console.log(`Valores em ordem crescente: ${valueOne}, ${valueTwo}.`)
}


//Outra alternativa
// const soma = []

// soma.push(valueOne)
// soma.push(valueTwo)

// console.log(soma.sort((a, b) => a - b))