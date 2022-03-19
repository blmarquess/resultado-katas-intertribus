/*
  Você é um piloto de combate a incendio
  Você recebeu uma ligação do seu chefe Robert Dolly, sobre um incendio que precisa da sua ajuda!
  Seu modo de trabalho é usar a menor quantidade de DollyBombs possíveis (isso mesmo, você vai combater o incendio com Dolly).
  a string abaixo representa fogo: x e prédios: Y.
  As DollyBombs que você jogar não conseguem atravesar prédios, então cada foco de incendio tem que ser resolvido separadamente.
  a potencia da DollyBomb vai ser determinada por um paramêtro 'w'.
  Lembre-se, você tem que usar o mínimo de DollyBombs possíveis.

  Exemplos:
  "xxYxx" e w = 3 ---> 2 DollyBombs!
  "xxYxx" e w = 1 ---> 4 DollyBombs!
  "xxxxYxYx" e w = 5 ---> 3 DollyBombs!
  "xxxxxYxYx" e w = 2 ---> 5 DollyBombs! 
*/

{
  const dollyBombs = (fire, w) => fire.split('Y')
    .map(bomb => Math.ceil(bomb.length / w), 1).reduce((acc, crv) => acc + crv);
} 

const dollyBombs = (f, w) => f.split('Y').reduce((ac, cr) => (Math.ceil(cr.length / w, 1)) + ac, 0);

// const teste4 = 'xxYxxxxxxxYYxxxxxxxxYxxxxxxxYxYxxxYxxYxxYxxxYxxxxYxxxxYxxxxxYxxxY';
// console.log(dollyBombs(teste4, 2))

module.exports = dollyBombs;
