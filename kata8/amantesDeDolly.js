/* 
  Você e sua digníssima vão escolher quantos litros de dolly vão servir no seu casamento.
  Porém, por conta de uma cartomante, eles só vão ser felizes de verdade se um escolher uma quantidade par e a outra pessoa ímpar (sim, isso faz sentido!!!!).
  
  escreva uma função que receberá a quantidade de cada um e exibirá a mensagem:
    um par e um impar ---> 'Vocês vão ser felizes para sempre'
    dois pares ou dois impares ---> 'Isso vai dar ruim, tem certeza que quer continuar?' 
*/

const ruim = 'Isso vai dar ruim, tem certeza que quer continuar?';
const baom = 'Vocês vão ser felizes para sempre';

const isPar = (n) => n % 2 === 0;

const trueLove = (...duo) => {
  const ar = duo.map(e => isPar(e));
  return ar[0] === ar[1] ? ruim : baom
};

module.exports = trueLove;
