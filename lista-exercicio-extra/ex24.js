// 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
// quantidade de elementos negativos da linha correspondente de M.

let matriz = [[]]
let vetor = []


for(let i = 0; i < 6; i++) {
  let contador = 0

  for(let j = 0; j < 8; j++) {
    if(matriz[i][j] < 0) {
      contador++
    }
  }
  vetor[i] = contador
}