// 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
// a) da linha 4 de M;
// b) da coluna 2 de M;
// c) da diagonal principal;
// d) todos os elementos da matriz M.
// Escrever essas somas e a matriz.

let matrizM = [  [ 1,  2,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]]
let somaLinha = 0
let somaColuna = 0
let somaDiagonal = 0
let somaTotal = 0

for(let i = 0; i < 5; i++) {


  for(let j = 0; j < 5; j++) {
    if(i === 3) {
      somaLinha += matrizM[i][j]
    }

    if(j === 1) {
      somaColuna += matrizM[i][j]
    }

    if(i === j) {
      somaDiagonal += matrizM[i][j]
    }

    somaTotal += matrizM[i][j]
  }
}

console.log("Matriz: ")
console.table(matrizM)

console.log(`
Soma da linha 4: ${somaLinha}
Soma da coluna 2: ${somaColuna}
Soma da diagonal principal: ${somaDiagonal}
Soma total da matriz: ${somaTotal}
`)