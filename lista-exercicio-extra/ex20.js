// 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
// no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// Matrícula:
// Nome:
// Salário bruto:
// Dedução INSS:
// Salário líquido:
// (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
// INSS).

const prompt = require('prompt-sync') ()

let start = 0
let funcionarios = []

while(start < 80) {
  console.log('\n== FOLHA DE PAGAMENTO == \n')
  let matricula = Number(prompt('Digite a matriculá: '))
  let nome = prompt('Digite o nome: ')
  let salarioBruto = Number(prompt('Digite o salário bruto: '))
  let deducaoINSS = salarioBruto * 0.12
  let salarioLiquido = salarioBruto - deducaoINSS

  funcionarios.push({ matricula, nome, salarioBruto, deducaoINSS, salarioLiquido })

  start++
}

for (let c of funcionarios) {
  console.log(`

Matrícula: ${c.matricula}
Nome: ${c.nome}
Salário Bruto: ${c.salarioBruto}
Dedução INSS: ${c.deducaoINSS}
Salário Líquido: ${c.salarioLiquido}

    `)
}