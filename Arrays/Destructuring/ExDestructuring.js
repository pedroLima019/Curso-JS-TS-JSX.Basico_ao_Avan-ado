// Dado o seguinte objeto:

const person = {
  username: "Pedro Lima",
  email: "pedroLima@21.com",
  address: {
    city: "São Paulo",
    country: "Brasil",
  },
};

// Extraia as propriedades username e city utilizando destructuring
const {
  username,
  address: { city },
} = person;
console.log(username);
console.log(city);

// Renomeie a propriedade username para user durante a extração
const { username: user } = person;
console.log(user);

// Dado o seguinte array:
const rgb = [255, 200, 100];

// Extraia os valores da array rgb e atribua a variáveis red, green, e blue.
// const [first , second , three] = rgb
// console.log(rgb)

// Faça a mesma extração utilizando valores padrão para que , se algum valor não estiver presente no array , ele seja subtiuído por 0.

const [first, second, three , quarte = 0 ] = rgb;
console.log(first, second, three, quarte); // 255 200 100 0

