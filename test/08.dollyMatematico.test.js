const { expect } = require('chai');
const resolution = require('../kata6/dollyMatematico');

describe('Testes do kata6 dollyMatematico', () => {
  it('1 - verifica se retorna o número certo do digital root para cada caso', () => {
    expect(resolution(16)).to.equal(7);
    expect(resolution(942)).to.equal(6);
    expect(resolution(132189)).to.equal(6);
    expect(resolution(493193)).to.equal(2);
    expect(resolution(51654567486)).to.equal(3);
  });
});
