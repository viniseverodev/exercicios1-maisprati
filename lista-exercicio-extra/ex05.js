// 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt = require('prompt-sync') ()

console.log("Escolha uma opção:\n1 - Pedra\n2 - Papel\n3 - Tesoura")
const result = Number(prompt(""))

  const computador = Math.floor(Math.random() * 3) + 1

  if ((result === 1 && computador === 3) || (result === 2 && computador === 1) || (result === 3 && computador === 2)) {
    console.log('Jogador Venceu')
  } else if (result === computador) {
    console.log('Empata')
  } else {
    console.log('Computador venceu')
  }

