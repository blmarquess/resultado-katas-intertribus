const { expect } = require('chai');
const resolution = require('../kata7/dollyschamps');

const array1 = [12, 34, 56, 78];
const array2 = [2015, 8, 26];
const array3 = [1, 234, 456, 7890];
const array4 = [];

describe('Testes do kata7 dollyschamps', () => {
  it('1 - verifica se caso o parametro seja um [], retorna "Sobrou todos os números"', () => {
    expect(resolution(array4)).to.equal("Sobrou todos os números");
  })
  it('2 - verifica se retorna os números certos para cada caso', () => {
    expect(resolution(array1)).to.equal("09");
    expect(resolution(array2)).to.equal("3479");
  });
  it('3 - verifica se retorna "Não sobrou nenhum número", caso o array contenha todos os números', () => {
    expect(resolution(array3)).to.equal("Não sobrou nenhum número");
  })
});
