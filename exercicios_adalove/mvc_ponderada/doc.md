# <a name="c1"></a>Arquitetura MVC


- Nome do Projeto: Culturation
- Descrição: O projeto Culturation baseia-se em um sistema web criado para a integração dos alunos que participam do jogo "Cesim *Game*", com o propósito de facilitar uma cooperação mais sólida e uma comunicação transparente entre os membros do grupo.
- Arquitetura: MVC (Model-View-Controller)
- Ferramenta de Diagramação: draw.io

<div align="center">
  <sub>Figura 1 - Arquitetura MVC: Login </sub>
  <img src="./assets/MVC1.jpg" width="100%">
  <sup>Fonte: Elaborado pela autora (2024)</sup>
</div>

<div align="center">
  <sub>Figura 1 - Arquitetura MVC: Cadastro </sub>
  <img src="./assets/MVC2.jpg" width="100%">
  <sup>Fonte: Elaborado pela autora (2024)</sup>
</div>

<div align="center">
  <sub>Figura 1 - Arquitetura MVC: Tela Incial </sub>
  <img src="./assets/MVC3.jpg" width="100%">
  <sup>Fonte: Elaborado pela autora (2024)</sup>
</div>

<div align="center">
  <sub>Figura 1 - Arquitetura MVC: Perfil </sub>
  <img src="./assets/MVC4.jpg" width="100%">
  <sup>Fonte: Elaborado pela autora (2024)</sup>
</div>

<div align="center">
  <sub>Figura 1 - Arquitetura MVC: Autoavaliação</sub>
  <img src="./assets/MVC5.jpg" width="100%">
  <sup>Fonte: Elaborado pela autora (2024)</sup>
</div>


### Modelos (Models):

- Estudante: Esta é a entidade principal do projeto, pois armazena todos os dados dos alunos participantes do jogo. Os atributos incluem nome, idade, país, email, senha, gênero, grupo e faculdade. Os estudantes são os participantes ativos do jogo, que interagem com o sistema e entre si.
- Tutor: Esta é a entidade que representa os professores ou orientadores do projeto. Eles têm atributos semelhantes aos dos estudantes, como nome, país, email, senha e gênero, além do grupo orientado e faculdade. Os tutores são responsáveis por orientar e apoiar os estudantes em seus objetivos na simulação.
- A relação entre essas entidades é de que um tutor pode orientar um ou mais grupos. Isso significa que um grupo de estudantes pode estar associado a um tutor específico. Por exemplo, um tutor pode ser responsável por orientar um grupo de estudantes em um determinado momento.

### Controladores (Controllers):
- Os controladores do projeto são: procurar, clicar, rolar, digitar, comentar, deletar e editar.
1. Procurar: Este controlador é responsável por permitir que os usuários busquem informações dentro do sistema. Isso envolve a filtragem para encontrar dados específicos.
2. Clicar: Este controlador permite aos usuários interagir com elementos clicáveis dentro do sistema. Isso inclui botões, links e outros elementos de interface do usuário que respondem ao clique do usuário.
3. Rolar: O controlador de rolagem permite aos usuários percorrer o conteúdo em uma página ou aplicativo. Isso é essencial para visualizar informações que não cabem completamente na tela.
4. Digitar: Este controlador permite aos usuários inserir texto ou dados em campos de entrada. Isso é fundamental para realizar tarefas como preencher formulários, enviar mensagens ou realizar buscas.
5. Comentar: O controlador de comentários permite aos usuários adicionar comentários ou feedback em determinados conteúdos dentro do sistema.
6. Deletar: Este controlador permite aos usuários remover itens ou conteúdos do sistema. Isso pode incluir a exclusão de mensagens, arquivos ou outros dados.
7. Editar: O controlador de edição permite aos usuários modificar ou atualizar informações existentes no sistema. 
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Para buscar informações, o método `buscar` é utilizado, recebendo uma `consulta` que contém os termos de pesquisa e, opcionalmente, `filtros` para refinar os resultados. A saída desse método é uma lista de `resultados` que correspondem à consulta.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Ao clicar em elementos da interface, como botões ou links, o método `clicar` é acionado, utilizando o `elemento` como parâmetro de entrada. 
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Para rolar a página ou uma área específica, o método `rolar` é utilizado, recebendo a `direcao` da rolagem (para cima ou para baixo) e, opcionalmente, a `distancia` em pixels a ser rolada.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Quando é necessário inserir texto em campos de entrada, como formulários ou caixas de texto, o método `digitar` é chamado, utilizando o `elemento` como identificador do campo e o `texto` a ser digitado como entrada.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Para adicionar comentários a conteúdos específicos, o método `comentar` é utilizado, recebendo o `conteudo` do comentário e o `alvo` do comentário, que pode ser um post, uma mensagem, etc. A saída desse método é o `idComentario`, que identifica unicamente o comentário postado.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Quando é necessário excluir um item do sistema, o método `deletar` é acionado, utilizando o `item` a ser excluído como parâmetro de entrada. A saída é um indicador de `sucesso` ou falha na exclusão do item.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Por fim, para editar conteúdo existente, o método `editar` é utilizado, recebendo o `idConteudo` do conteúdo a ser editado e o `novoConteudo` que substituirá o original. A saída é o `conteudoAtualizado`, que reflete as alterações feitas.
- Explique como os controladores interagem com os modelos e views.

### Views (Views):
- Liste as views do seu projeto e sua função.

### Infraestrutura:

- Descreva os componentes de infraestrutura do seu projeto, como bancos de dados, APIs externas e outras dependências.
- Explique como a infraestrutura se integra à arquitetura MVC.


### Justifique as escolhas feitas e como elas impactam o projeto.
#### Implicações da Arquitetura:
Descreva as implicações da arquitetura em termos de escalabilidade, manutenção, testabilidade e outros aspectos importantes.