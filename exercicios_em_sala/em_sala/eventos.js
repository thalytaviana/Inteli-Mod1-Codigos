class Evento {
    constructor(){
        this.fornecedores = [];
        this.valortotal = 0;
    }

    adiciona(fornecedor, orcamento){
        this.fornecedores.push(fornecedor);
        this.valortotal += orcamento;
    }

    getTotal (){
        return this.valortotal;
    }

}

var evento1 = new Evento();
evento1.adiciona("buffet", 1500);
evento1.adiciona("som", 600)
console.log(evento1.getTotal())