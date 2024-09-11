// Exercício 1: Função de soma com parâmetros padrões
// Crie uma função que some dois números, mas, se nenhum valor for passado, deve usar o valor padrão de 1 para ambos os parâmetros.

function soma(a = 1 ,b = 1 ) {
  return a + b 
}

console.log(soma());
console.log(soma(5));
console.log(soma(10 , 30))
