/* 
  Você estava vendo uma aula de Terence Dolly.
  e ele tava fazendo exercicios sobre Digital root, é a soma dos digitos de um determinado número!
  Quando viu, você teve a ideia de fazer um algoritimo para resolver esse problema!

  Então dado um número n retorne a soma de todos os digitos, se o resultado tem mais de 1 digito continue fazendo as somas até apenas um único número ser o resultado (não pode ser negativo).

  Exemplo:
    16 ---> 1 + 6 = 7
    942 ---> 9 + 4 + 2 = 15 ---> 1 + 5 = 6
    132189 ---> 1 + 3 + 2 + 1 + 8 + 9 = 24 ---> 2 + 4 = 6
    493193 ---> 4 + 9 + 3 + 1 + 9 + 3 = 29 ---> 2 + 9 = 11 ---> 1 + 1 = 2
*/

function digitalRoot(n) {
  //Sua solução aqui!
  const numberInArray = `${n}`.split('')
  
  const result = numberInArray.reduce((acc, number) => acc + Number(number), 0)
  
  if (result > 9 ) {
    return digitalRoot(result)
  }
  
 return result;
}

module.exports = digitalRoot;
