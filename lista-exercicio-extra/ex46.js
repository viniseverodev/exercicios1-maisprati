// 46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
// com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
// de vendas por vendedor.

let vendas = [
  { vendedor: "Ana", valor: 500 },
  { vendedor: "João", valor: 1200 },
  { vendedor: "Ana", valor: 1000 },
  { vendedor: "Maria", valor: 800 },
  { vendedor: "João", valor: 1100 }
]

let somaVendas = {}

for(let venda of vendas) {
  let vendedor = venda.vendedor
  let valor = venda.valor

  if(somaVendas[vendedor] === undefined) {
    somaVendas[vendedor] = valor
  } else {
    somaVendas[vendedor] += valor
  }
}

console.log(somaVendas)

