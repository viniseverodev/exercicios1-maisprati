const prompt = require('prompt-sync') ()

console.log('Formador de triangulo\n')
const tamanho1 = Number(prompt('Diga um segmento de reta: '))
const tamanho2 = Number(prompt('Diga o segundo segmento de reta: '))
const tamanho3 = Number(prompt('Diga o terceiro segmento de reta: '))

if (tamanho1 < tamanho2 + tamanho3 && tamanho2 < tamanho1 + tamanho3 && tamanho3 < tamanho1 + tamanho2) {
  console.log('Triangulo criado')
} else {
  console.log('Não é possível criar um triangulo com esses valores.')
}