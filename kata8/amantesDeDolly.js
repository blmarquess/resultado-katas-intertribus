/* 
  Você e sua digníssima vão escolher quantos litros de dolly vão servir no seu casamento.
  Porém, por conta de uma cartomante, eles só vão ser felizes de verdade se um escolher uma quantidade par e a outra pessoa ímpar (sim, isso faz sentido!!!!).
  
  escreva uma função que recebera a quantidade de cada um e exibirá a mensagem:
    um par e um impar ---> 'Vocês vão ser felizes para sempre'
    dois pares ou dois impares ---> 'Isso vai dar ruim, tem certeza que quer continuar?' 
*/

function trueLove(num1, num2) {
  return num1 % 2 !== num2 % 2 ? 'Vocês vão ser felizes para sempre' : 'Isso vai dar ruim, tem certeza que quer continuar?';
}

module.exports = trueLove;
