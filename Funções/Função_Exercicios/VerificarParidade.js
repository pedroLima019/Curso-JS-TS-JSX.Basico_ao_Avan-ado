// Descrição: Escreva uma função que verifique se um número é par ou ímpar.
// Dica: Use o operador % para determinar a paridade.

function paridade(num){
  if( num % 2 == 0){
    return true
  }else{
    return false
  }
}

console.log(paridade(5))

