// 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
// elementos da diagonal principal com a média dos elementos da diagonal secundária.

let matriz = [
  [2, 4, 6],
  [8, 10, 12],
  [14, 16, 18]
]
let diagonalP = []
let diagonalS = 0

for(let i = 0; i < 3; i++) {

  for(let j = 0; j < 3; j++) {
    if(i + j === 2) {
      diagonalS += matriz[i][j]
    }
  }
}

const media = diagonalS / 3

for(let i = 0; i < 3; i++) {
  diagonalP.push(matriz[i][i] * media)
}