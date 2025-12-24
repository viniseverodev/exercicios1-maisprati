// 43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
// combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
// sobre as do obj1 em caso de conflitos.

let obj1 = {
  nome: "Ana",
  idade: 20
}
let obj2 = {
  nome: "Ana",
  idade: 25,
  cidade: "SP"
}

let obj3 = {}

for(chave in obj1) {
  obj3[chave] = obj1[chave]
}

for(chave in obj2) {
  obj3[chave] = obj2[chave]
}

console.log(obj3)