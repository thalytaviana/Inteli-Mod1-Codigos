class Funcionario { // cria a classe funcionários
    constructor(nome, idade, salariobase) { //cria os atributos nome, idade e salario base
        this.nome = nome;
        this.idade = idade;
        this.salariobase = salariobase;
    }

    calcularsalario() {
    }
}

class Professor extends Funcionario { // cria a classe professor que herda os atributos do funcionário
    constructor(nome, idade, salariobase, disciplina, horas) { // adiciona os atributos já existentes e cria o atributo disciplina e horas
        super(nome, idade, salariobase); // traz as informaçãos da classe herdada
        this.disciplina = disciplina;
        this.horas = horas;
    }

    calcularsalario() { // cria o método para calcular o salário do professor
        let salarioTotal = this.horas * this.salariobase;  // calculando o salário multiplicando as horas pelo salário base,
        return salarioTotal; // armazenando o resultado em uma nova variável
    }
}


let professor1 = new Professor("Vander", 57, 4000, "Matemática", 40); //define um novo objeto "Professor"
let professor2 = new Professor("Marisa", 46, 6000, "Português", 42);//define um novo objeto "Professor"

// mostra todas as informações no console.
console.log(`Informações do Professor 1:\nNome: ${professor1.nome}\nIdade: ${professor1.idade}\nDisciplina: ${professor1.disciplina}\nSalário Total: ${professor1.calcularsalario()}\n`);
console.log(`Informações do Professor 2:\nNome: ${professor2.nome}\nIdade: ${professor2.idade}\nDisciplina: ${professor2.disciplina}\nSalário Total: ${professor2.calcularsalario()}`);
