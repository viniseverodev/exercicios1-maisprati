// 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
// mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
// perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
// funcionário.

const prompt = require('prompt-sync') ()

let start = 0
let salariosM = 0
let salariosF = 0

while(start != 2) {

  console.log('== Cadastrando Funcionário == \n')
  const salario = Number(prompt('Qual é o valor do seu salário? '))
  let sexo = prompt('Qual é o seu sexo? (Masculino/Feminino): ')
  console.log('')

  sexo = sexo.toLowerCase()
  if(sexo === 'masculino') {
    salariosM = salariosM + salario
  } else if (sexo === 'feminino'){
    salariosF = salariosF + salario
  } else {
    console.log('Digite um sexo válido.')
  }

  start = Number(prompt('Para lançar mais funcionários digite "1" para sair digite "2": '))
  console.log('')
}

console.log(`Salário total homens: ${salariosM.toFixed(2)} reais.
Salário total mulheres: ${salariosF.toFixed(2)} reais.`)