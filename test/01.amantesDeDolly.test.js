const { expect } = require('chai');
const resolution = require('../kata8/amantesDeDolly');

describe('Testes do kata8 amantesDeDolly', () => {
  it('1 - verifica se retorna "Vocês vão ser felizes para sempre" ao receber um número impar e outro par', () => {
    expect(resolution(1, 2)).to.equal('Vocês vão ser felizes para sempre');
  });
  it('2 - verifica se retorna "Isso vai dar ruim, tem certeza que quer continuar?", ao receber dois números pares', () => {
    expect(resolution(4, 2)).to.equal('Isso vai dar ruim, tem certeza que quer continuar?');
  });
  it('3 - verifica se retorna "Isso vai dar ruim, tem certeza que quer continuar?", ao receber dois números impares', () => {
    expect(resolution(5, 7)).to.equal('Isso vai dar ruim, tem certeza que quer continuar?');
  });
});
