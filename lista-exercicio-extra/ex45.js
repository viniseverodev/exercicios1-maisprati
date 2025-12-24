// 45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
// o número de vezes que a string aparece no array.

const array = ["maçã", "banana", "maçã", "uva", "banana", "maçã"]
let objeto = {}

for(chave of array) {
  if(objeto[chave] === undefined) {
    objeto[chave] = 1
  } else {
    objeto[chave]++
  }
}

console.log(objeto)