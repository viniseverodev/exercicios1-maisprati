// 49. Você recebe um array de objetos representando transações financeiras. Cada
// transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
// onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
// essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.

let transacoesFinanceiras = [
  {id: 12, valor: 120.00, data: "23/12/2025", categoria: "Mercado"},
  {id: 295, valor: 200.00, data: "23/12/2025", categoria: "Casa"},
  {id: 412, valor: 176.00, data: "23/12/2025", categoria: "Mercado"},
  {id: 156, valor: 100.00, data: "23/12/2025", categoria: "Tecnologia"},
  {id: 151, valor: 58.00, data: "23/12/2025", categoria: "Tecnologia"}
]

let categoriaSubTotal = {}

function totalCategorias() {
  for(let chave of transacoesFinanceiras) {
    let categoria = chave.categoria
    let valor = chave.valor

    if(categoriaSubTotal[categoria] === undefined) {
      categoriaSubTotal[categoria] = { 
        transacoes: [],
        subtotal: 0
      }
    }

    categoriaSubTotal[categoria].transacoes.push(chave)

    categoriaSubTotal[categoria].subtotal += valor
  }
}

totalCategorias()
console.log(categoriaSubTotal)
