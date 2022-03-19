/* 
  Você esta vendo um vídeo no canal do Felipe Dollyschamps.
  Ao final do vídeo ele propõe um desafio:
  
  Dada uma lista de inteiros, me retorne os números que não estão presentes entre eles!(em formato string)

  Além disso caso o parâmetro tiver todos os números, me retorne uma string com o texto "Não sobrou nenhum número";

  E caso o array seja vazio retorne "Sobrou todos os números"

  Exemplo:
    [12, 34, 56, 78] ===> "09"
    [2015, 8, 26] ===> "3479"
*/

const numList = [...new Array(10).keys()].map(n => n.toString());

function leftovers(array) {
  if (array.length === 0) return "Sobrou todos os números";
  const st = array.join('').split('');
  const results = [];

  numList.join('').split('').forEach(n => {
    if (!st.includes(n)) results.push(n);
  });
  return results.length === 0 ? 'Não sobrou nenhum número' : results.join('');
}

module.exports = leftovers;
