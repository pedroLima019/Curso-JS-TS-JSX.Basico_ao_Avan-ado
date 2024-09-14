import Contato from "./contato.js";

class GerenciadorContatos {
  constructor() {
    this.contato = [];
  }

  adicionarContato(nome , telefone , email){
      const contato = new Contato(nome, telefone, email)
      this.contato.push(contato)
  }

  listarContatos(){
     return this.contato.map(contato => contato.exibirDetalhes()).join("\n\n")
  }

  buscarContato(nome){
    const contato = this.contato.find(contato => contato.nome === nome)
    return contato ? contato.exibirDetalhes() : "contato não encontrado"
  }
}

export default GerenciadorContatos; 