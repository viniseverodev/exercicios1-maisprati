const prompt = require("prompt-sync")()

let input = ""

while (input != 4) {
  console.log(`  --CALCULADORA--
    1. Somar
    2. Subtrair
    3. Multiplicar
    4. Sair`)

  input = prompt("Escolha uma das opções: ")

  switch (input) {
    case "1":
      const soma1 = Number(prompt("Digite o primeiro número: "))
      const soma2 = Number(prompt("Digite o segundo número: "))
      console.log(`O resultado da soma é: ${soma1 + soma2}`)
      break
    case "2":
      const sub1 = Number(prompt("Digite o primeiro número: "))
      const sub2 = Number(prompt("Digite o segundo número: "))
      console.log(`O Resultado da subtração é: ${sub1 - sub2}`)
      break
    case "3":
      const mult1 = Number(prompt("Digite o primeiro número: "))
      const mult2 = Number(prompt("Digite o segundo número: "))
      console.log( `O resultado da multiplicação é: ${mult1 * mult2}`)
      break
    case "4":
      console.log("Saindo do programa..")
      break
    default:
      console.log("Digite um número do menu válido.")
  }
}
