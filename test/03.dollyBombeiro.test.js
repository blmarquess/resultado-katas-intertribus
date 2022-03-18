const { expect } = require('chai');
const resolution = require('../kata7/dollyBombeiro');

const teste1 = 'xxYxx';
const teste2 = 'xxxxYxYx';
const teste3 = 'xxxxxYxYx';
const teste4 = 'xxYxxxxxxxYYxxxxxxxxYxxxxxxxYxYxxxYxxYxxYxxxYxxxxYxxxxYxxxxxYxxxY';

describe('Testes do kata7 dollyBombeiro', () => {
  it('1 - verifica se retorna a quantidade certa de DollyBombs para cada caso', () => {
    expect(resolution(teste1, 3)).to.equal(2);
    expect(resolution(teste1, 1)).to.equal(4);
    expect(resolution(teste2, 5)).to.equal(3);
    expect(resolution(teste3, 2)).to.equal(5);
    expect(resolution(teste4, 2)).to.equal(29);
  });
});
