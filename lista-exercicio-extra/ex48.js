// 48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
// inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
// item em estoque. Escreva uma função que combine os inventários em um único objeto.
// Se um item aparecer em ambas as lojas, some as quantidades.

let inventarioLojaA = [
  { item: "teclado", quantidade: 2, valor: 120 },
  { item: "webcam", quantidade: 1, valor: 250 },
  { item: "mouse", quantidade: 1, valor: 100 },
  { item: "cabo", quantidade: 4, valor: 50 }
]

let inventarioLojaB = [
  { item: "teclado", quantidade: 3, valor: 120 },
  { item: "suporte", quantidade: 2, valor: 185 },
  { item: "mousepad", quantidade: 5, valor: 82 },
  { item: "cabo", quantidade: 1, valor: 50 }
]

let inventarioTotal = {}

function compararEstoque() {
  for(let estoque of inventarioLojaA) {
    let item = estoque.item
    let quantidade = estoque.quantidade

    if(inventarioTotal[item] === undefined) {
      inventarioTotal[item] = quantidade
    } else {
      inventarioTotal[item] += quantidade
    }
  }

  for(let estoque of inventarioLojaB) {
    let item = estoque.item
    let quantidade = estoque.quantidade

    if(inventarioTotal[item] === undefined) {
      inventarioTotal[item] = quantidade
    } else {
      inventarioTotal[item] += quantidade
    }
  }
}
compararEstoque()
console.log(inventarioTotal)