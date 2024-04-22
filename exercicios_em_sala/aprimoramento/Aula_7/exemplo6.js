let meuArray = [1, 2, 3];
console.log(meuArray); // [1, 2, 3]
console.log(meuArray.length); // 3
meuArray.unshift(0);
console.log(meuArray); // [0, 1, 2, 3]
meuArray.splice(2, 0, 2.5);
console.log(meuArray); // [0, 1, 2.5, 2, 3]
meuArray.push(4);
console.log(meuArray); // [0, 1, 2.5, 2, 3, 4]

// Deletar do Array (Pela Posição):
delete meuArray[2];
console.log(meuArray); // [0, 1, empty, 2, 3, 4]
//Este método mantém o comprimento do array, mas o valor é substituído por `undefined`.
