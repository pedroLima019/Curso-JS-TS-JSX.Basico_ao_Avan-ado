// // maneiras de criar objetos

// //literal
// const pessoa = {
//   nome: "Pedro",
//   idade: 23,
//   cidade: "São Paulo",
// };

// // como ascessar um valor de uma objeto
// console.log(pessoa.nome); // acessando nome

// // outra forma de acessar é a de colchete
// console.log(pessoa["idade"]); // acessando nome

// // outra maneira de criar um obj

// //construtor
// const pessoa2 = new Object();
// pessoa2.nome = "Lucas";
// pessoa2.idade = 25;

// console.log(pessoa2.nome);

// obj podem ter métodos
const pessoa3 = new Object();
pessoa3.nome = "João";
pessoa3.idade = 24;
pessoa3.saudar = function () {
  return `${this.nome} está falando bom dia !`;
};
pessoa3.pegarIdade = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa3) {
  console.log(pessoa3[chave]);
}

