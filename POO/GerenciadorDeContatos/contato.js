// contato
class Contato {
  constructor(nome, telefone, email) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
  }

  exibirDetalhes() {
    return `Nome: ${this.nome} \n Telefone: ${this.telefone} \n email: ${this.email}`;
  }
}

export default Contato;
