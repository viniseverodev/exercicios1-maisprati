// 42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
// strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
// propriedades que são arrays.

let dados = {
  numeros: [1,2,3,4,],
  nome: "Vinicius",
  cargo: "Dev",
  pessoa: ["Carlos", "João"]
}
let arrays = {}

for(let chave in dados) {
  if(Array.isArray(dados[chave])) {
    arrays[chave] = dados[chave]
  }

  }

console.log(arrays)