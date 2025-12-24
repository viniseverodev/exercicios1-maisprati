// 39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
// vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.

let vetorA = [
   12, -5,  0,  23,  7, -18,  0,  45, -2,  9,
   34,  0, -11,  6,  18, -7,  0,  2,  27, -30,
   5,  14,  0, -9,  41,  3, -1,  0,  8,  19,
  -22,  0,  16,  4, -6,  25,  0, -13,  11,  29,
   0, -4,  21,  17, -15,  0,  10,  33, -8,  1,
   26,  0, -19,  7,  13, -3,  0,  22,  15, -27,
   6,  0, -10,  38,  2, -16,  0,  9,  24, -21,
   0,  14,  5, -12,  31,  0, -17,  20,  8, -25,
   0,  18, -14,  3,  28,  0, -6,  11,  16, -9
];
let vetorB = []

for(let i = 0; i < vetorA.length; i++) {
  if(vetorA[i] > 0) {
    vetorB.push(vetorA[i])
  }
}

console.log(`Vetor original: ${vetorA.join(", ")} \nVetor compactado${vetorB.join(", ")}.`)
