// 1) quantas rodada
// 2) quantos jogadors
// 3) objeto pra cada jogador
// 4) guardar os objetos numa lista
// 5) ordenar pelo numero no dado
// 6) exibir quem ganhou mais rodadas

const prompt = require('prompt-sync')()

function getMostFrequent(arr) {
  const hashmap = arr.reduce( (acc, val) => {
   acc[val] = (acc[val] || 0 ) + 1
   return acc
},{})
return Object.keys(hashmap).reduce((a, b) => hashmap[a] > hashmap[b] ? a : b)
}

function jogador(nome) {
  return {
    nome: nome,
    pontuacao: []
  }
}

const rodadasQtd = prompt("Quantas rodadas você quer jogar?\n");
const jogadoresQtd = prompt("Quantos jogadores vão participar?\n");
const jogadores = [];
const vencedores = [];

for(let i = 0; i < jogadoresQtd; i++){
  const nome = prompt("Qual o nome do jogador: " + i)
  jogadores[i] = jogador(nome);
}

console.log('\n')

for(let i = 0; i < rodadasQtd ; i++){
  const pontos = [];
  console.log(`${i + 1}º Rodada`);
  for(let j = 0; j < jogadoresQtd; j++) {
    const ponto = Math.floor(Math.random()*6 + 1);
    jogadores[j].pontuacao[i] = ponto;
    pontos.push({ ponto, nome: jogadores[j].nome, numeroJogador: j });
  };

  pontos.sort(function(a, b) {
    return b.ponto - a.ponto
  })

  vencedores.push(pontos[0].numeroJogador);

  for(let j = 0; j < jogadoresQtd; j++) {
    console.log(`${j+1}º Lugar: Jogador: ${pontos[j].numeroJogador}, ${pontos[j].nome}. Tirou: ${pontos[j].ponto}`)
  }

  console.log('\n')
}

const grandeVencedor = getMostFrequent(vencedores);

console.log(`O grande vencedor foi o jogador ${grandeVencedor}, ${jogadores[grandeVencedor].nome}!`);





// if (jogos[0].numero > jogos[1].numero) {
//     console.log(`-----------------------------------`)
//     console.log(`${jogos[0].nome} vence a rodada!!`);
//     console.log(`-----------------------------------`)
//     vencedor = jogos[0].nome
// }
// else if (jogos[0].numero == jogos[1].numero) {
//     console.log(`----------------------------
// // Collections.sort(pontuacao);
// Collections.reverse(pontuacao);

// console.log(sort);
// for (i = 0; i < qntJogadores; i++) {
// lista.sort((a, b) => b.numero - a.numero)
// Collections.sort(pontuacao);
// Collections.reverse(pontuacao);
// console.log(sort);

// const sorted = Jogadores.sort((a,b) => {
//     return a.pontuacao - b.pontuacao;
// console.log(sorted);
// }




// // 5 5 5 = 15
// // 6 6 1 = 13
// // 6 1 1 = 8

//  6 6 1 = 13
//  5 5 5 = 15
//  6 1 1 = 8

//  Qual o parametro de ordenação?
//   - Soma do total dos dados?
//  - Nome do jogador?

//  Qual o criterio pro vencedor?
//   - Vitória por rodada?
//   - Vitória na soma total de dados?
 
//  jogadoresQtd = 3
 
// jogadores = [
//     { name: 'junior', pontuacao: [] }
//     { name: 'alexandre', pontuacao: [] }
//     { name: 'juliana', pontuacao: [] }

// jogadores[0] === { name: 'junior', pontuacao: [] }
// jogadores[0].name === 'junior'
// jogadores[0].pontuacao === [} 
// jogadores[1] === { name: 'alexandre', pontuacao: [] }
// jogadores[1].name === 'alexandre'
// jogadores[1].pontuacao === []