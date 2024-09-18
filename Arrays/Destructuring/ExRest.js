// Exercicios com Rest Operator
const scores = [80, 85, 90, 95, 100];

// use destruturing e o rest operator para extrair o primeiro valor como topScore e o restante dos valores em um array chamado otherScores

const [topScore, ...otherScores] = scores;
console.log(topScore); // 80
console.log(otherScores); // [85, 90 , 95 , 100]

// Crie uma função multiply que aceita um número fixo ( primeiro argumento) e usa o rest operator para multiplar esse número por qualquer quantidade de números passados como argumentos. 

function multiply(fixed, ...numbers){
   return numbers.reduce((a , b) => a * b, fixed)
}

console.log(multiply(2, 3 , 4 ,5 )) // 120