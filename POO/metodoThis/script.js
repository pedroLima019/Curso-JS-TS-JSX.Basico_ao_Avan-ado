// Exercício: Crie um objeto chamado contaBancaria com as seguintes propriedades: titular, saldo e métodos depositar(valor) que aumenta o saldo, e sacar(valor) que diminui o saldo, mas não permite que o saldo fique negativo.

// Desafio: Modifique o método sacar para que ele não permita que o saldo fique negativo. Adicione também um método consultarSaldo() que apenas imprime o saldo atual.

const contaBancario = {
  titular: "Eduardo",
  saldo: 5000,
  depositar: function (valor) {
    this.saldo += valor;
  },
  sacar: function (valor){
    if(this.saldo >= valor){
      this.saldo -= valor;
    }
  },
  consultarSaldo: function(){
    return `O saldo atual é ${this.saldo}`;
  }
};

console.log(contaBancario.consultarSaldo());
console.log(contaBancario.depositar(1000));
console.log(contaBancario.consultarSaldo());