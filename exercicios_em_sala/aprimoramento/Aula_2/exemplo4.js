// Exemplo 4: Verificar a estação do ano
//Neste exemplo, vamos determinar a estação do ano com base no mês:

let mes = 2;
let estacao;

if (mes === 12 || mes === 1 || mes === 2) {
  estacao = "Inverno";
} else if (mes >= 3 && mes <= 5) {
  estacao = "Primavera";
} else if (mes >= 6 && mes <= 8) {
  estacao = "Verão";
} else if (mes >= 9 && mes <= 11) {
  estacao = "Outono";
} else {
  estacao = "Mês inválido";
}

console.log("Estamos na estação: " + estacao);