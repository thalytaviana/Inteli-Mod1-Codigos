let meuArray = [1, 2, 3];
console.log(meuArray); // [1, 2, 3]
console.log(meuArray.length); // 3
meuArray.unshift(0);
console.log(meuArray); // [0, 1, 2, 3]

// Inserir no Meio do Array:
meuArray.splice(2, 0, 2.5);
console.log(meuArray); // [0, 1, 2.5, 2, 3]
// Neste exemplo, `splice` é usado para adicionar `2.5` no índice `2` do array.