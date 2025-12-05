// 16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
// (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
// depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.

let numeros = []
let original = []
let temp = null

for(let i = 0; i < 20; i++) {
  const numero = Math.floor(Math.random() * 100)
  numeros.push(numero)
}

original = [...numeros]

for(let x = 0; x < numeros.length; x++) {
  for(let y = 0; y < numeros.length; y++) {
    if(numeros[x] < numeros[y]) {
      temp = numeros[x]
      numeros[x] = numeros[y]
      numeros[y] = temp
    }
  }
}

console.log(`Array original: ${original.join(", ")}`)
console.log(`Array em ordem crescente: ${numeros.join(", ")}`)