var frutas = ["maçã", "banana", "laranja", "pêra", "uva"];

function adicionarFruta(nomeFruta){
    frutas.push (nomeFruta)
};

adicionarFruta('abacaxi')
console.log(frutas)


function removerFruta(nomeFruta) {
    let indice = frutas.indexOf(nomeFruta);
    if (indice !== -1) {
      frutas.splice(indice, 1);
      console.log(`Fruta "${nomeFruta}" removida do estoque.`);
    } else {
      console.log(`Fruta "${nomeFruta}" não encontrada no estoque.`);
    }
  }
  
  removerFruta('Pera');
  console.log(frutas); // ['Maçã', 'Banana', 'Morango', 'Abacaxi']
  
  

  function atualizarNomeFruta(nomeAtual, novoNome) {
    let indice = frutas.indexOf(nomeAtual);
    if (indice !== -1) {
      frutas[indice] = novoNome;
      console.log(`Fruta "${nomeAtual}" atualizada para "${novoNome}".`);
    } else {
      console.log(`Fruta "${nomeAtual}" não encontrada no estoque.`);
    }
  }
  
  atualizarNomeFruta('Banana', 'Banana Prata');
  console.log(frutas);


  function mostrarEstoque() {
    console.log('Frutas Disponíveis:');
    for (let fruta of frutas) {
      console.log(fruta);
    }
  }

  mostrarEstoque();
