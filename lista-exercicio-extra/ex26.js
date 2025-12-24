// 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
// P[1..3,1..5].

let matrizA = [  [ 2,  4,  1,  3,  5 ],
  [ 6,  2,  0, -1,  4 ],
  [ 3,  5,  2,  1,  0 ]]
let matrizB = [  [ 1,  0,  3,  2, -1 ],
  [ 4, -2,  5,  1,  3 ],
  [ 2,  1,  4,  0,  6 ]]
let matrizP = []

for(let i = 0; i < 3; i++){
  matrizP[i] = [] // Cria a linha

  for(let j = 0; j < 5; j++) {
    matrizP[i][j] = matrizA[i][j] * matrizB[i][j]
  }
}