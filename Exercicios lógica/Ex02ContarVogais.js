// Exercício 2: Função para Contar Vogais
// Crie uma função chamada contarVogais que recebe uma string como parâmetro e retorna o número de vogais presentes na string. Considere as vogais a, e, i, o, u, tanto maiúsculas quanto minúsculas.

function contarVogais(frase) {
  let text = frase.toLowerCase();
  let vogais = "aeiou";
  let cont = 0;

  for (i = 0; i < text.length; i++) {
    if (vogais.includes(text[i])) {
      cont++;
    }
  }
  return cont;
}

let txt = "SALVE";
console.log(contarVogais(txt));
