var altura = 1.88; // Altura em metros
var peso = 103;    // Peso em quilogramas

function verificarIMC(){
    var imc = peso / (altura * altura);
    imc = imc.toFixed(2); // Arredondar o resultado para duas casas decimais

    switch (true){
        case imc < 18.5:
            console.log("Você está abaixo do peso");
            break;
        case imc >= 18.5 && imc < 24.9:
            console.log("Você está no peso normal");
            break;
        case imc >= 25 && imc < 29.9:
            console.log("Você está no sobrepeso");
            break;
        case imc >= 30 && imc < 34.9:
            console.log("Você está na obesidade grau 1");
            break;
        case imc >= 35 && imc < 39.9:
            console.log("Você está na obesidade grau 2");
            break;
        default:
            console.log("Você está na obesidade grau 3");
    }
    return imc; // você pode retornar o valor do IMC se desejar
}

var imc = verificarIMC();
console.log ("IMC:", imc);
