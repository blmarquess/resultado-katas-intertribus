const { expect } = require('chai');
const resolution = require('../kata8/captainDolly');

const tripulaçãoA = {'Sparrow': 'aye', 'Barbosa': 'aye', 'DavyJones': 'nay', 'Salazar': 'aye'};
const tripulaçãoB = {'Sparrow': 'aye', 'Barbosa': 'aye', 'DavyJones': 'aye', 'Salazar': 'aye'};

describe('Testes do kata8 captainDolly', () => {
  it('1 - verifica se retorna "Atire!", caso todos os piratas estejam prontos', () => {
    expect(resolution(tripulaçãoB)).to.equal('Atire!');
  });
  it('2 - verifica se retorna "Tragam-me polvora!", caso algum pirata não esteja pronto', () => {
    expect(resolution(tripulaçãoA)).to.equal('Tragam-me polvora!');
  });
});
