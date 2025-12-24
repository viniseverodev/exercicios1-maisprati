// 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
// contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
// e os vetores criados.

let matrizM = [  [ 1,  2,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]]
let SL = [0, 0, 0, 0, 0]
let SC = [0, 0, 0, 0, 0]
let valorTotal = 0

for(let i = 0; i < 5; i++) {

  for(let j = 0; j < 5; j++) {
    SL[i] += matrizM[i][j]
    SC[j] += matrizM[i][j]
    valorTotal += matrizM[i][j]
  }
}

console.log(`Soma das linhas: ${SL}`)
console.log(`Soma das colunas: ${SC}`)
console.log(`Soma total da matriz: ${valorTotal}`)
console.table(matrizM)