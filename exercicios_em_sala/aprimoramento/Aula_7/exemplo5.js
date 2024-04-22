let meuArray = [1, 2, 3];
console.log(meuArray); // [1, 2, 3]
console.log(meuArray.length); // 3
meuArray.unshift(0);
console.log(meuArray); // [0, 1, 2, 3]
meuArray.splice(2, 0, 2.5);
console.log(meuArray); // [0, 1, 2.5, 2, 3]

// Inserir no Final do Array:
meuArray.push(4);
console.log(meuArray); // [0, 1, 2.5, 2, 3, 4]
