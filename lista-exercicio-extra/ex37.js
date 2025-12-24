// 37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
// o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
// respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
// aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
// e mostre uma mensagem de “REPROVADO”, caso contrário.

const prompt = require('prompt-sync') ()
const gabarito = ['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E',
'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E'];
let acertos = 0

for (let i = 0; i < 50; i++) {

  let gabaritoAluno = prompt('Digite o gabarito da sua prova; Ex: A, B, B .. C (São 20 questão ao total): ')
  gabaritoAluno = gabaritoAluno.split(",").map(x => x.trim().toUpperCase()) // Remove espaços após a vírgula e coloca todas as letras em maiúsculas.

  if(gabaritoAluno.length !== 20) {
    console.log("Você deve digitar exatamente 20 respostas!")
    i--
    continue
  }

  acertos = 0

  for(let j = 0; j < gabaritoAluno.length; j++) {
    if(gabaritoAluno[j] === gabarito[j]) acertos++
  }

  if(acertos >= 12) {
    console.log(`O número de acertos foi ${acertos}, você foi aprovado!`)
  } else {
    console.log(`O número de acertos foi ${acertos}, você foi reprovado!`)
  }
}