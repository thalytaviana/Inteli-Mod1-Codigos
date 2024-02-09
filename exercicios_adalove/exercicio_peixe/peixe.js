var config = {
    type: Phaser.AUTO,
    width:800,
    height:600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
var game = new Phaser.Game (config);

var peixinho;

function preload(){
    this.load.image ('mar', 'assets/fundo.png');
    this.load.image ('logo', 'assets/logo-inteli_branco.png');
    this.load.image ('peixe', 'assets/peixe_rosa.png');
    this.load.image ('abacaxi', 'assets/abacaxi_bob.png');
    this.load.image ('bob', 'assets/bob.png');
}

function create (){
    this.add.image (400,300, 'mar').setScale (1.5);
    this.add.image (400,400, 'abacaxi').setScale(2.0);
    this.add.image (400, 525, 'logo').setScale(0.5);
    this.add.image (650, 490, 'bob').setScale (0.5);

    peixinho = this.add.image (400,300, 'peixe');
    peixinho.setFlip (true,false);
}

function update() {

    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}