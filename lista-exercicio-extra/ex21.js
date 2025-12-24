// 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

function pesoIdeal(alt, sexo) {
  sexo = sexo.toLowerCase()

  if(sexo === 'masculino') {
   return console.log(`O seu peso ideal é ${(72.7 * alt - 58).toFixed(2)}`)
  } else if(sexo === 'feminino') {
   return console.log(`O seu peso ideal é ${(62.1 * alt - 44.7).toFixed(2)}`)
  } else {
    console.log('Você digitou um sexo incorreto, saindo...')
  }
}

pesoIdeal(1.63, 'Feminino')