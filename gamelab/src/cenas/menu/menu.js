// Importação de funções para carregamento das imagens do personagem. Carregamos elas no menu para utilizarmos depois em qualquer
// cena seguinte
import { carregarSpritesPersonagem, criarAnimacoesPersonagem } from "../../personagem/personagem.js";

// Classe de cena do Menu principal!
export default class Menu extends Phaser.Scene {

    // Botão de jogar
    botaoJogar;
    // Botão de seleciona nível
    botaoNivel;

    // Construtor da classe. Avisa ao Phaser que, para se referir a essa cena, utiliza-se a chave "Menu"
    constructor() {
        super({ key: "Menu" });
    };

    
    preload() {
        // Carregamento das imagens do menu
        this.load.image("fundo", "assets/Menu/menu.png");
        this.load.image("jogar", "assets/Menu/Buttons/Play.png");
        this.load.image("nivel", "assets/Menu/Buttons/Levels.png");

        // Carregamento das imagens do personagem
        carregarSpritesPersonagem(this);
    }


    create() {
        // Criação das animações do personagem
        criarAnimacoesPersonagem(this);

        // Criando o background do menu
        this.add.image(0,0, "fundo")
        .setOrigin(0)
        .setScale(2,1);

        // Criando o título que aparece no menu
        this.add.text(470, 145, 'Sapo e abacaxi',
        { fontFamily: 'Roboto', fontSize: '64px', fill: '#000000' })

        // Criando o botão de jogar
       this.botaoJogar = this.add.image(640, 360, "jogar")
       .setScale(3);

       // Criando o botão de selecionar nível
       this.botaoNivel = this.add.image(640, 460, "nivel")
       .setScale(3);

        // Dizendo para o Phaser que os botões não são apenas imagens, mas sim objetos com que se pode interagir
        this.botaoJogar.setInteractive();
        this.botaoNivel.setInteractive();

        // Configurar o que o botão de jogar deve fazer ao ser clicado
        this.botaoJogar.on("pointerup", this.apertouBotaoJogar, this);

        // Configurar o que o botão de selecionar nível deve fazer ao ser clicado
        this.botaoNivel.on("pointerup", this.apertouBotaoSelecionar, this)
    }

    
    // O que fazer quando o botão de jogar é apertado
    apertouBotaoJogar() {
        // Desabilitar interações com os botões
        this.botaoJogar.disableInteractive();
        this.botaoNivel.disableInteractive();

        // Iniciar o Nivel1 como próxima cena
        this.comecarProximaCena("Nivel1")
    }


    // O que fazer quando o botão de selecionar nível é apertado
    apertouBotaoSelecionar() {
        // Desabilitar interações com os botões
        this.botaoJogar.disableInteractive();
        this.botaoNivel.disableInteractive();

        // Iniciar o seletor de níveis como próxima cena
        this.comecarProximaCena("SelecionaNivel");
    }

    // Começa a próxima cena
    comecarProximaCena(cena) {
        this.scene.start(cena)
    }
}