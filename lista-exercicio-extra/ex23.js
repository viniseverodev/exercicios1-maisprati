// 23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
// diagonal principal são iguais a 1 e os demais são nulos.

let matriz = [
  [],
  [],
  [],
  [],
  [],
  [],
  []
]

for(let i = 0; i < 7; i++) {
  for(let j = 0; j < 7; j++) {
    if(i === j) {
      matriz[i].push(1)
    } else {
      matriz[i].push(0)
    }
  }
}

console.table(matriz)