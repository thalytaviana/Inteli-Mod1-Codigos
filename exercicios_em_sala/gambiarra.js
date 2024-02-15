// Ordene o códigto de forma correta para o mesmo funcionar, não pode sobrar linhas de código...
// Comente o que ocorre em cada linha, é bom não usar ferramentas de IA...

var altura = 1.88; // Altura em metros
var peso = 103;    // Peso em quilogramas

var imc;
var resultado;

while (altura <= 0) {
    console.log("A altura não pode ser negativa ou zero.");
}
    imc = peso / (altura * altura);
    imc = imc.toFixed(2); // Arredondar o resultado para duas casas decimais

    if (imc >= 25 && imc < 29.9) {
        resultado = "Sobrepeso";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado = "Peso normal";
    } else if (imc >= 30 && imc < 34.9) {
        resultado = "Obesidade grau 1";
    } else if (imc < 18.5) {
        resultado = "Abaixo do peso";
    } else if (imc >= 35 && imc < 39.9) {
        resultado = "Obesidade grau 2";
    } else {
        resultado = "Obesidade grau 3";
    }

console.log("IMC:", imc);
console.log("Resultado:", resultado);
