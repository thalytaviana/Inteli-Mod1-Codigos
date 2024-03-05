var pmaca = 2.00;
var pbanana = 1.50;
var plaranja = 3.00;
var ppera = 2.50;

var quantimaca = 5;
var quantibanana = 12;
var quantilaranja = 6;
var quantipera = 3;

function promocao(){
    if (quantimaca>=10)
    pmaca = pmaca - 0.50
    console.log ("Você levará as maçãs por", pmaca.toFixed(2), "cada")

    if (quantibanana>=12)
    pbanana = pbanana - 0.50
    console.log ("Você levará as bananas por", pbanana.toFixed(2), "cada")

    if (quantilaranja<= 6)
    plaranja = plaranja + 1.00
    console.log ("Você levará as laranjas por", plaranja.toFixed(2), "cada")

    if (quantipera<5)
    ppera = ppera + 5.00
    console.log ("Você levará as pêras por", ppera.toFixed(2), "cada")
}

var verificarpromocao = promocao();
console.log (verificarpromocao);