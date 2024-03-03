class Carro {
    // o constructor fabrica os objetos
    constructor(marca, modelo, ano, cor, preco){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.preco = preco;
    }

    descricao(){ // isso é um método que sem a função classe é somente uma função.
        console.log (`Este é um ${this.marca} ${this.modelo}, ano ${this.ano}, na cor ${this.cor}, e custa R$ ${this.preco}`);
    }
}

let carro1 = new Carro("Ford", "Ranger", 2024, "preto", 50000)
carro1.descricao();

class CarroNovo extends Carro {
    constructor(marca, modelo, ano, cor, preco, garantia){
        super(marca, modelo, ano, cor, preco);
        this.garantia = garantia;
    }

    ofertaEspecial(){
        console.log(`Aproveite nossa oferta especial para o novo ${this.marca}, ${this.modelo}! Por apenas R$ ${this.preco-500}, você leva o carro com ${this.garantia} anos de garantia!`)
    }
}

let carro2 = new CarroNovo("Ford", "Ranger", 2024, "preto", 50000, 4)
carro2.ofertaEspecial();
