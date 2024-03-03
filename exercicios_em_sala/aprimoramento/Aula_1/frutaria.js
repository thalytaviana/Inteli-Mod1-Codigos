var vmaca = 2.00;
var vbanana = 1.50;
var vlaranja = 3.00;
var vpera = 2.50;

var qmaca = 10;
var qbanana = 12;
var qlaranja = 7;
var qpera = 4;

var precototal = (vmaca * qmaca + vbanana * qbanana + vlaranja * qlaranja + vpera * qpera)

console.log ("Frutas compradas:\n",
    "Maçãs:" + qmaca,
    "Bananas:" + qbanana,
    "Laranjas:" + qlaranja,
    "Pêras:" + qpera,
    "Preço total: R$", precototal.toFixed(2));


