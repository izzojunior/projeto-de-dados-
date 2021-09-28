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