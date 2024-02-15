var altura = 1.88; // Altura em metros
var peso = 103;    // Peso em quilogramas
var imc;
var resultado;

function verificarIMC(imc){
    imc = peso / (altura * altura);
    imc = imc.toFixed(2); // Arredondar o resultado para duas casas decimais

    switch (true){
        case imc >= 25 && imc < 29.9:
            console.log ("Sobrepeso");
            break;
        case imc >= 18.5 && imc < 24.9:
            console.log ("Peso normal");
            break;
        case imc >= 30 && imc < 34.9:
            console.log ("Obesidade grau 1");
            break;
        case imc < 18.5:
            console.log ("Abaixo do peso");
            break;
        case imc >= 35 && imc < 39.9:
            console.log ("Obesidade grau 2")
            break;
        default:
            console.log ("Obesidade grau 3");
    }
console.log("IMC:", imc);
}