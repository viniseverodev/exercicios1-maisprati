// 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
// um funcionário e ao final escreva o conteúdo do registro.

const prompt = require('prompt-sync') ()

const nomeFuncionario = prompt('Digite o nome do funcionário: ')
const cargoFuncionario = prompt('Digite o cargo desse funcionário: ')
const salarioFuncionario = Number(prompt('Digite o salário desse funcionário: '))

console.log(`
Nome do funcionário: ${nomeFuncionario}
Cargo do funcionário: ${cargoFuncionario}
Salário do funcionário: ${salarioFuncionario}
`)