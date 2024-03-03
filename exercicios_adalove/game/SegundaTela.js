// Classe da cena segunda tela
class CenaSegundaTela extends Phaser.Scene {
    constructor() {
        super({ key: 'CenaSegundaTela' });
    }

    // Função para carregar recursos antes do jogo iniciar
    preload() {
        // Carrega as imagens e sprites necessários para a segunda tela do jogo
        this.load.image('parque', 'assets/parque.jpg');
        this.load.image('racao', 'assets/racao.png');
        this.load.image('cachorro2', 'assets/Max.png');
        this.load.image('bola', 'assets/bola.png');
        this.load.image('tijolos', 'assets/tijolos.png');
        this.load.spritesheet('cenoura', 'assets/cenoura.png', { frameWidth: 16, frameHeight: 32 });
    }

    // Função para criar elementos do jogo
    create() {
        // Adiciona a imagem de fundo da cena
        this.add.image(400, 300, 'parque').setScale(2);

        // Adiciona texto informando que o controle é feito pelas setas do teclado
        var controleTexto = this.add.text(larguraJogo / 2, 400, 'O controle dessa tela é feito pelas setas do teclado', { fontSize: '20px', fill: '#ffffff' });
        controleTexto.setOrigin(0.5);

        // Faz o texto desaparecer após 5 segundos
        this.time.delayedCall(5000, () => {
            controleTexto.destroy();
        });

        // Cria o placar na parte superior da tela
        placar = this.add.text(300, 50, 'Petiscos: 0', { fontSize: '25px', fill: '#ffffff' });

        // Adiciona a plataforma estática na metade do jogo
        plataforma = this.physics.add.staticImage(750 / 2, 600 / 2, 'tijolos');

        // Adiciona os sprites dos personagens e itens
        cachorro2 = this.physics.add.sprite(400, 200, 'cachorro2').setScale(0.5);
        cachorro2.body.allowGravity = false;

        racao = this.physics.add.sprite(400, 200, 'racao').setScale(0.5);
        bola = this.physics.add.sprite(100, 100, 'bola').setScale(0.5);
        
        // Configura as colisões entre os elementos
        this.physics.add.collider(cachorro2, plataforma);
        this.physics.add.collider(bola, plataforma);
        this.physics.add.collider(racao, plataforma);

        // Adiciona o inimigo cenoura
        inimigo = this.physics.add.sprite(700, 550, 'cenoura').setScale(2); 
        inimigo.body.allowGravity = false;

        // Cria a animação de salto para a cenoura
        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers('cenoura', {start: 0, end: 1}),
            frameRate: 10,
            repeat: -1
        });
        inimigo.anims.play('jump', true);

        // Define a trajetória da cenoura
        let velocidadeCenoura = 50;
        this.tweens.add({
            targets: inimigo,
            x: 100,
            duration: 2000,
            ease: 'Linear',
            yoyo: true,
            repeat: -1
        });

        // Define as propriedades de rebote para os elementos
        racao.setCollideWorldBounds(true);
        racao.setBounce(0.7);
        bola.setCollideWorldBounds(true);
        bola.setBounce(0.7);

        // Verifica a colisão entre o cachorro e a bola
        this.physics.add.collider(cachorro2, bola, function () {
            bola.setVisible(false);
            var posicaoBola = Phaser.Math.RND.between(50, 650);
            bola.setPosition(posicaoBola, 100);
            petiscos -= 1;
            cachorro2.setTint(0xff0000);
            placar.setText('Petiscos: ' + petiscos);
            bola.setVisible(true);
        });

        // Verifica a sobreposição do cachorro com a ração para incrementar a contagem de petiscos
        this.physics.add.overlap(cachorro2, racao, function () {
            racao.setVisible(false);
            var posicaoRacao = Phaser.Math.RND.between(10, 650);
            racao.setPosition(posicaoRacao, 100);
            petiscos += 1;
            placar.setText('Petiscos: ' + petiscos);
            cachorro2.clearTint();
            racao.setVisible(true);
        });

        // Verifica a colisão entre o cachorro e a cenoura, chamando a função gameOver
        this.physics.add.collider(cachorro2, inimigo, this.gameOver, null, this);
    }

    // Função chamada quando o jogo termina
    gameOver() {
        this.physics.pause();
        var gameOverText = this.add.text(375, 300, 'Game Over', { fontSize: '32px', fill: '#fff' });
        gameOverText.setOrigin(0.5);
        // Reiniciar o jogo após 5 segundos
        setTimeout(() => {
            this.scene.stop('CenaPrincipal');
            this.scene.start('CenaPrincipal');
        }, 5000);
    }

    // Função para atualizar o estado do jogo
    update() {
        // Movimentação do cachorro com o teclado
        const cursors = this.input.keyboard.createCursorKeys();
        if (cursors.left.isDown) {
            cachorro2.setVelocityX(-160);
        } else if (cursors.right.isDown) {
            cachorro2.setVelocityX(160);
        } else {
            cachorro2.setVelocityX(0);
        }
        if (cursors.up.isDown) {
            cachorro2.setVelocityY(-160);
        } else if (cursors.down.isDown) {
            cachorro2.setVelocityY(160);
        } else {
            cachorro2.setVelocityY(0);
        }
    }
}

// Declaração de variáveis
var cachorro2;
var racao;
var placar;
var petiscos = 0;
var bola;
var plataforma;
var inimigo;
