let inicialFrutas = ["maçã", "banana", "laranja", "uva", "morango"];
let terceiraFruta = inicialFrutas[2];
console.log ("A terceira fruta é:", terceiraFruta)

inicialFrutas[2] = "melancia";
console.log("Frutas após tirar a laranja madura:", inicialFrutas);

let outrasFrutas = ["pêra", "abacaxi"];

let nova_lista = inicialFrutas.concat(outrasFrutas);
console.log("A nova lista de frutas é:", nova_lista);

let posiçãoUva = nova_lista.indexOf("uva");
console.log("A posição da uva é:", posiçãoUva);

let existe = nova_lista.includes("pêra");
console.log("A pêra está na lista?", existe);

nova_lista.sort()
console.log("Lista em ordem alfabética:", nova_lista);

let copia_lista = nova_lista.slice();
console.log("Cópia da lista de frutas:", copia_lista);

copia_lista.length = 0;
console.log("Lista após limpeza:", copia_lista);
