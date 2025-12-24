// 44. Escreva uma função que conte quantas propriedades do tipo string existem em um
// objeto e retorne esse número.

let objeto = {
  nome: "Vinicius",
  idade: 24,
  cargo: "DEV",
  foco: "Gerar resultado real!",
  salario: 2000
}

let quantidadeString = 0

for(let chave in objeto) {
  if((typeof(objeto[chave]) === "string")) {
    let contador = 0
    contador++
    quantidadeString += contador
  }
}

console.log(quantidadeString)