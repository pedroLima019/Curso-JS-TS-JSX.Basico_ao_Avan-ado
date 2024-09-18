// Exercicio com spread
const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli"];

// Use o spread operator para combinar os arrays fruits  vegetables em um unico array chamado combined

const combined = [...fruits, ...vegetables];
console.log(combined);

// crie uma cópia desse objeto chamado updatePerson, mas com uma propriedade adicional chamada city com o valor "são paulo"

const person = { name: "John", age: 30, profession: "developer" };

const updatePerson = {
  ...person, city: "São paulo"
}

console.table(updatePerson)