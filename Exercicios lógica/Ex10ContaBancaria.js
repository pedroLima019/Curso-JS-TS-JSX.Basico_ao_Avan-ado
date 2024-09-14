// Crie um objeto contaBancaria que tenha as propriedades saldo, depositar (que aumenta o saldo), e sacar (que diminui o saldo, caso tenha dinheiro suficiente).

const contaBancaria = {
  saldo: 0,
  depositar: function (valor) {
    this.saldo += valor;
  },
  sacar: function (valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente");
    }
  },
};

contaBancaria.depositar(100);
console.log(contaBancaria.saldo);

contaBancaria.sacar(50)
console.log(contaBancaria.saldo);
