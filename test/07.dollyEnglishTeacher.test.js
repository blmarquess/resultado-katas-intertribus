const { expect } = require('chai');
const resolution = require('../kata6/dollyEnglishTeacher');

describe('Testes do kata6 dollyEnglishTeacher', () => {
  it('1 - verifica se "The quick brown fox jumps over the lazy dog." é um Pangram', () => {
    expect(resolution('The quick brown fox jumps over the lazy dog.')).to.be.true;
  });
  it('2 - verifica se "This is not a pangram." é um Pangram', () => {
    expect(resolution('This is not a pangram.')).to.be.false;
  });
  it('3 - verifica se "DoLlY Is ThE BEst BuT IS not A PanGram." é um Pangram', () => {
    expect(resolution('DoLlY Is ThE BEst BuT IS not A PanGram.')).to.be.false;
  });
});
