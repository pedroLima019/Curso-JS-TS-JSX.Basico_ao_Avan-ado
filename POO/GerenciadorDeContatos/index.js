import GerenciadorContatos from "./gerenciadorContatos.js";

const gerenciador = new GerenciadorContatos();

gerenciador.adicionarContato("Pedro", "123456", "pedro@example.com");

gerenciador.adicionarContato("Ana", "987654321", "ana@exemple.com");

console.log("Todos os contatos: \n");
console.log(gerenciador.listarContatos());

console.log("\nBuscar contato 'Pedro':\n");
console.log(gerenciador.buscarContato("Pedro"));

console.log("\nBuscar contato 'Carlos':\n");
console.log(gerenciador.buscarContato("Carlos"));