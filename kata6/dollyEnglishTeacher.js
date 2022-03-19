/* 
  O Teacher Dolly te passou algumas frases e pediu para você dizer se elas são um pangram.
  pangram é uma frase que contêm todas as letras do alfabeto pelo menos uma vez.
  por exemplo a frase: "The quick brown fox jumps over the lazy dog" é um pangram, pq usam as letras A - Z pelo menos uma vez(não é para diferenciar maiúscula de minúscula).

  dada uma string defina se é ou não um pangram, retornando true quando for e false quando não for.
*/

const isPangram = (ph) => new Set([...ph.toLowerCase().replace(/\W/gi, '')]).size === 26;

module.exports = isPangram;
