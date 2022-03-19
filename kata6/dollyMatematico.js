/* 
  Você estava vendo uma aula de Terence Dolly.
  e ele tava fazendo exercícios sobre Digital root, que é a soma dos dígitos de um determinado número!
  Quando você viu, teve a ideia de fazer um algoritimo para resolver esse problema!

  Então dado um número n retorne a soma de todos os dígitos, se o resultado tem mais de 1 dígito continue fazendo as somas até apenas um único número ser o resultado (não pode ser negativo).

  Exemplo:
    16 ---> 1 + 6 = 7
    942 ---> 9 + 4 + 2 = 15 ---> 1 + 5 = 6
    132189 ---> 1 + 3 + 2 + 1 + 8 + 9 = 24 ---> 2 + 4 = 6
    493193 ---> 4 + 9 + 3 + 1 + 9 + 3 = 29 ---> 2 + 9 = 11 ---> 1 + 1 = 2
*/

{
  function digitalRoot(n) {
  const num = [...n.toString()];
  if(num.length === 1) return Number(num[0]);
  const arr = num.reduce((acc, crv) => Number(acc) + Number(crv));
  return digitalRoot(arr);
  }
}

function digitalRoot(n) {
  if(n <= 9) return n;
  const arr = [...n.toString()].reduce((acc, crv) => Number(acc) + Number(crv));
  return digitalRoot(arr);
}

// console.log(digitalRoot(132189));

module.exports = digitalRoot;
