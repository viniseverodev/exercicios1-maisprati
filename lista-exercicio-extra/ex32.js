// 32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
// cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
// matriz lida e a modificada.

let matrizM = [
 [  5, -3,  8, 12, -7,  4,  9, -2,  6, 10, -1,  3,  7],
 [ -6, 14, -9,  2,  5, -11,  8,  4, -3,  7, 12, -1,  6],
 [ 10, -4,  6, -8,  3,  9, -2, 14,  5, -7, 11,  1, -6],
 [ -12,  7,  4, -5,  9, -3,  6,  2, -8, 11,  1, 10, -4],
 [  8,  5, -6, 14, -2,  9,  3, -7,  4, 11, -1,  6, -10],
 [ -9, 12,  7, -3,  4, -6, 10,  5, -2, 14,  1, -8,  9],
 [  6, -11,  9,  4, -7,  2, 14, -5,  8,  3, -1, 10, -6],
 [ -4,  8, 12, -9,  6,  3, -2, 14,  5, -7,  1, 10, -11],
 [  9,  6, -8, 14, -3,  5, 11, -4,  2, 10, -1,  7, -6],
 [ -10,  4,  6,  9, -7, 14, -3,  5,  2, -1, 11,  8, -6],
 [ 12, -5,  9,  3, -8,  6, 14, -4,  7,  2, -1, 10, -11],
 [ -6, 10,  4, -9,  8,  2, -5, 14,  3,  7, -1, 11,  6]
]

let matrizModificada = []

for(let i = 0; i < 12; i++) {
  maiorModulo = []

  for(let j = 0; j < 13; j++) {
    let valorAbsoluto = Math.abs(matrizM[i][j])
    if (valorAbsoluto > maiorModulo) {
      maiorModulo = valorAbsoluto
    }
  }

  let novaLinha = []
  for(let j = 0; j < matrizM[i].length; j++) {
    novaLinha.push((matrizM[i][j] / maiorModulo).toFixed(2))
  }

  matrizModificada.push(novaLinha)
}

console.table(matrizM)
console.table(matrizModificada)