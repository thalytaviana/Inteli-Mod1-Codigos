var listaDeTarefas = []
listaDeTarefas.unshift ("Ler um livro");
listaDeTarefas.unshift ("Fazer exercícios de matemática")
listaDeTarefas.unshift ("Estudar JavaScript");

console.log("Número total de tarefas:", listaDeTarefas.length )
console.log("Lista de tarefas:", listaDeTarefas)

listaDeTarefas.unshift("Fazer compras");

listaDeTarefas.splice(2, 0, "Reunião com equipe");

listaDeTarefas.push ("Pagar contas");

listaDeTarefas = listaDeTarefas.filter(item => item !== "Fazer exercícios de matemática");

listaDeTarefas.pop()

console.log("Número total de tarefas atualizada:", listaDeTarefas.length )
console.log("Lista de tarefas atualizado:", listaDeTarefas)
