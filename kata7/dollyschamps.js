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

function leftovers(array) {
  //Sua solução vai aqui!
  if(!array.length) {
    return 'Sobrou todos os números';
  }
  const x = array.join('').split('');
  const arrayOfAllNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  if(arrayOfAllNumbers.every((number) => x.includes(number))) {
    return 'Não sobrou nenhum número'
  }
  
  const result = arrayOfAllNumbers.filter((number) => !x.includes(number));

  return result.join('');
}

console.log(leftovers([12, 34, 56, 78, 90]));

module.exports = leftovers;
