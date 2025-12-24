// 50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
// deverá ser capaz de interagir com o usuário através do console do navegador e manter
// um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
// informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
// 1. Estrutura de Dados:
// ○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
// cidade, quartos totais e quartos disponiveis.
// ○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
// nomeCliente.
// 2. Funcionalidades:
// ○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
// ○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
// disponíveis em uma cidade específica.
// ○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
// deve diminuir o número de quartos disponiveis do hotel.
// ○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
// aumentar o número de quartos disponiveis no hotel correspondente.
// ○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
// cliente.
// 3. Regras de Negócio:
// ○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
// ○ As reservas devem ser identificadas por um ID único e associadas a um
// único hotel.

// 4. Desafios Adicionais (Opcionais):
// ○ Implementar uma função de check-in e check-out que atualize a
// disponibilidade de quartos.
// ○ Gerar relatórios de ocupação para um hotel.
// ○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
// avaliações dentro do objeto do hotel.

const prompt = require('prompt-sync') ()
let start = 10

let hotel = [
  {id: 1, nome: "Aguas Claras", cidade: "Santa Cruz Do Sul", totalQuartos: 10, quartosDisponiveis: 10},
  {id: 2, nome: "Hotel Cachoeira", cidade: "Cachoeira", totalQuartos: 5, quartosDisponiveis: 5},
  {id: 3, nome: "POA Hotel", cidade: "Porto Alegre", totalQuartos: 15, quartosDisponiveis: 15},
  {id: 4, nome: "FiveStar", cidade: "Florianopolis", totalQuartos: 7, quartosDisponiveis: 7},
]

let reservas = [
  { idReserva: 1, idHotel: 1, nomeCliente: "Vinicius Severo" }
]

function addHotel(nome, cidade, totalQuartos) {
  if(!nome || typeof nome !== "string" || nome.trim().length === 0) return
  if(!cidade || typeof cidade !== "string" || cidade.trim().length === 0) return
  if(typeof totalQuartos !== "number" || !Number.isInteger(totalQuartos) || totalQuartos < 1) return

  let lastID = hotel[hotel.length - 1].id
  let id = lastID + 1

  let newHotel = { id: id, nome: nome, cidade: cidade, totalQuartos: totalQuartos, quartosDisponiveis: totalQuartos }
  hotel.push(newHotel)
}

function findCity(cidade) {
  if(!cidade || typeof cidade !== "string" || cidade.trim().length === 0) {
    console.log("Cidade inválida..")
    return
  }

  cidade = cidade.trim().toUpperCase()
  let listaCidades = []

  for(let chave of hotel) {
    let cidadeH = chave.cidade.trim().toUpperCase()
    if(cidadeH === cidade) {
      listaCidades.push(chave)
    }
  }

  if(listaCidades.length === 0) {
    console.log(`Nenhum hotel encontrado na cidade ${cidade}`)
    return
  }

  console.log(`\nHotéis encontrados na cidade ${cidade}:\n`)

  for(let h of listaCidades) {
    console.log(`
ID: ${h.id}
Nome: ${h.nome}
Cidade: ${h.cidade}
Quartos disponíveis: ${h.quartosDisponiveis} / ${h.totalQuartos}
------------------
`)
  }
}

function makeReservation(idHotel, nomeCliente) {
  const hotelEscolhido = hotel.find((h) => h.id === idHotel)

  if(!hotelEscolhido) return
  if(!nomeCliente || typeof nomeCliente !== "string" || nomeCliente.trim().length === 0) return

  if(hotelEscolhido.quartosDisponiveis <= 0) {
    console.log("Não existe quartos disponíveis nesse hotel!")
    return
  }

  const idReserva = reservas.length === 0 ? 1 : reservas[reservas.length - 1].idReserva + 1
  const novaReserva= { idReserva, idHotel, nomeCliente }

  reservas.push(novaReserva)
  hotelEscolhido.quartosDisponiveis--
}

function cancelarReservation(idReserva) {
  const indexReserva = reservas.findIndex((r) => r.idReserva === idReserva)

  if(indexReserva === -1) {
    console.log("Reserva não encontrada.")
    return
  }

  const reservaCancelada = reservas[indexReserva]
  const reservaHotel = hotel.find((h) => h.id === reservaCancelada.idHotel)
  
  if(!reservaHotel) {
    console.log("Hotel da reserva não encontrado")
    return
  }

  reservaHotel.quartosDisponiveis++
  reservas.splice(indexReserva, 1)

  console.log("Reserva cancelada com sucesso!")
}

function listReservation() {
  if(reservas.length === 0) {
    console.log("Não há reservas cadastradas")
    return
  }

  for(let chave of reservas) {
    let idHotel = chave.idHotel
    let reservaHotel = hotel.find((h) => h.id === idHotel)

    console.log(`
    Reserva #${chave.idReserva}
    Cliente: ${chave.nomeCliente}
    Hotel: ${reservaHotel.nome}
    Cidade: ${reservaHotel.cidade}
    `)
  }
}

do {
  console.log(`
1 - Adicionar hotel
2 - Buscar hotel por cidade
3 - Fazer reserva
4 - Cancelar reserva
5 - Listar reservas
0 - Sair
`)

start = Number(prompt("Digite a opção que deseja: "))

switch(start) {
  case 1:
    console.log("Adicione um hotel\n")
    const nome = prompt("Digite o nome do hotel: ")
    const cidade = prompt("Digite a cidade que o hotel está localizado: ")
    const totalQuartos = Number(prompt("Digite a quantidade de quartos que esse hotel vai ter disponíveis: "))
    addHotel(nome, cidade, totalQuartos)
    break
  case 2:
    console.log("Procure um hotel pelo nome da cidade\n")
    const procurarCidade = prompt("Digite o nome da cidade: ")
    findCity(procurarCidade)
    break
  case 3:
    console.log("Faça uma reserva\n")
    const idHotel = Number(prompt("Digite o ID do hotel: "))
    const nomeCliente = prompt("Digite o seu nome: ")
    makeReservation(idHotel, nomeCliente)
    break
  case 4:
    console.log("Faça o cancelamento de uma reserva\n")
    const idReserva = Number(prompt("Digite o ID da reserva: "))
    cancelarReservation(idReserva)
    break
  case 5:
    console.log("Lista de reservas")
    listReservation()
    break
  case 0:
    console.log("Saindo do programa..")
    break
  default:
    console.log("Digite um número válido")
    break
}
} while(start !== 0)