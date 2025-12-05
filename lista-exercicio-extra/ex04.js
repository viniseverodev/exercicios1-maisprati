// 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// lado deve ser menor que a soma dos outros dois.

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