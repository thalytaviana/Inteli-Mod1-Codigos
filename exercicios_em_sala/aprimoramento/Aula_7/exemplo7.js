let meuArray = [1, 2, 3];
console.log(meuArray); // [1, 2, 3]
console.log(meuArray.length); // 3
meuArray.unshift(0);
console.log(meuArray); // [0, 1, 2, 3]
meuArray.splice(2, 0, 2.5);
console.log(meuArray); // [0, 1, 2.5, 2, 3]
meuArray.push(4);
console.log(meuArray); // [0, 1, 2.5, 2, 3, 4]
delete meuArray[2];
console.log(meuArray); // [0, 1, empty, 2, 3, 4]

// Remover do Array (Pelo Valor):
meuArray = meuArray.filter(item => item !== 2);
console.log(meuArray); // [0, 1, 2.5, 3, 4]
//Neste exemplo, todos os elementos com o valor `2` são removidos.