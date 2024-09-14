// Faça uma função chamada reverterString que receba uma string como argumento e retorne a string invertida.

function reverterString(string) {
  return string.split("").reverse().join("");
}

console.log(reverterString("Salve meu truta"));
