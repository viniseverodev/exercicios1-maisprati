// 47. Crie uma função que transforme um objeto de entrada aplicando uma função
// fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
// resultados.

let objeto = {
  nome: "Vinicius",
  idade: 24
}

let novoObj = {}

function modificaObj() {
 for(let chave in objeto) {
  if(typeof(objeto[chave]) === "string") {
    novoObj[chave] = objeto[chave].toLocaleUpperCase()
  } else if(typeof(objeto[chave] === "number")) {
    novoObj[chave] = objeto[chave] * 10
  } else {
    console.log('Formato inválido, só é aceito strings e números')
  }
 }
}

modificaObj()