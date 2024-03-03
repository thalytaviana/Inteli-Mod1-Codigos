// Define as dimensões do jogo
const larguraJogo = 750;
const alturaJogo = 600;

// Classe da cena principal
class CenaPrincipal extends Phaser.Scene {
    constructor() {
        super({ key: 'CenaPrincipal' });
    }

    // Função para carregar recursos antes do jogo iniciar
    preload() {
        // Carrega as imagens necessárias para o jogo
        this.load.image('fundo', 'assets/fundoRosa.jpg');
        this.load.image('racao', 'assets/racao.png');
        this.load.image('cachorro', 'assets/Lulu.png');
    }

    // Função para criar elementos do jogo
    create() {
        // Adiciona uma imagem de fundo à cena
        this.add.image(400, 300, 'fundo');

        // Centraliza o placar na tela
        placar = this.add.text(larguraJogo / 2 - 50, 50, 'Petiscos: ' + petiscos, { fontSize: '25px', fill: '#ffffff' });

        // Adiciona o sprite do cachorro à cena e desabilita a gravidade
        cachorro = this.physics.add.sprite(400, 300, 'cachorro').setScale(0.5);
        cachorro.body.allowGravity = false;

        // Adiciona o sprite da ração à cena
        racao = this.physics.add.sprite(larguraJogo / 2, 0, 'racao').setScale(0.5); 

        // Define as colisões do sprite da ração com os limites do mundo e seu comportamento de rebote
        racao.setCollideWorldBounds(true);
        racao.setBounce(0.7);

        // Verifica a sobreposição do cachorro com a ração para incrementar a contagem de petiscos
        this.physics.add.overlap(cachorro, racao, function () {
            racao.setVisible(false);
            var posicaoRacao = Phaser.Math.RND.between(50, 650);
            racao.setPosition(posicaoRacao, 100);
            petiscos += 1;

            placar.setText('Petiscos: ' + petiscos);
            racao.setVisible(true);
        });
        
        // Adiciona texto informando que o controle é pelo mouse
        var controleTexto = this.add.text(larguraJogo / 2, alturaJogo/2, 'A forma de controle dessa tela é o MOUSE', { fontSize: '20px', fill: '#ffffff' });
        controleTexto.setOrigin(0.5);

        // Faz o texto desaparecer após 5 segundos
        this.time.delayedCall(5000, () => {
            controleTexto.destroy();
        });
    }


    // Função para atualizar o estado do cachorro e do jogo
    update() {
        // Atualiza a posição do cachorro de acordo com a posição do cursor do mouse
        cachorro.x = this.input.x;
        cachorro.y = this.input.y;

        // Inverte a direção do cachorro quando ele atinge os limites da tela
        if (cachorro.x < cachorro.width / 2) {
            cachorro.setFlipX(true);
        } else if (cachorro.x > larguraJogo - cachorro.width / 2) {
            cachorro.setFlipX(false);
        }

        // Transiciona para a próxima cena quando a contagem de petiscos atinge 20
        if (petiscos >= 20) {
            this.scene.transition({
                target: 'CenaSegundaTela',
                duration: 1000, // duração da transição em milissegundos
                moveBelow: true,
                onUpdate: this.transitionOut,
                data: { score: petiscos } 
            });
        }
    }
}

// Configuração da cena 
const config = {
    type: Phaser.AUTO,
    width: larguraJogo,
    height: alturaJogo,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 30 }, // define a gravidade do mundo
            debug: false // desabilita a visualização de debug
        }
    },
    // Definição das cenas do jogo
    scene: [CenaPrincipal, CenaSegundaTela ]
};

// Inicializa o jogo com as configurações fornecidas
const game = new Phaser.Game(config); // cria um objeto da classe game

// Declaração de variáveis
var cachorro;
var racao;
var placar;
var petiscos = 0;
