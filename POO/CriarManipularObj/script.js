// Exercício: Crie um objeto que represente um carro com propriedades como marca, modelo, ano, cor e um método descreverCarro() que imprima uma mensagem descrevendo o carro. Depois, adicione uma nova propriedade dono ao objeto e modifique uma das propriedades existentes.

// Desafio: Adicione mais um método ao objeto que atualize a cor do carro. Quando você alterar a cor, o método deve atualizar a propriedade e também imprimir a nova cor.

const carro = {
  marcar: "volkswagem",
  modelo: "gol",
  ano: 2020,
  cor: "vermelho",
  dono: "Pedro",
  descricao: function () {
    return `O carro é da marca ${this.marcar}, modelo ${this.modelo}, ano ${this.ano} e cor ${this.cor}`;
  },
  newColor: function () {
    this.cor = "azul";
    return `A nova cor do carro é ${this.cor}`;
  },
};

console.log(carro.descricao());
console.log(carro.newColor());
