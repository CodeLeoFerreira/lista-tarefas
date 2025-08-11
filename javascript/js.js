    //lista de tarefas
const listaTarefas = [{nome:'tarefa 1',conteudo:'exemplo de um conteúdo de uma tarefa'}]

const tarefas = function(nomeTarefa, textoTarefa) {
    return {
        nomeTarefa,
        textoTarefa,
        
        exibirTarefas() {
            const listaEl = document.querySelector('.todo-list')
            listaEl.innerHTML = '' // 🔹 Limpa antes de renderizar

            //exibindo tarefas salvas
            for (i of listaTarefas) {
                document.querySelector('.todo-list').innerHTML +=
                `<li>
                    <h1>${i.nome}</h1> 
                    <p>${i.conteudo}</p>
                    <section>
                        <button id="concluir" class="btn-tarefas"> concluir</button>
                        <button id="remover" class="btn-tarefas"> remover</button>
                    </section>
                </li>`
            }
        },
        salvarTarefa() { //salvando as tarefas e exibindo
            if(nomeTarefa === '') { //caso o campo de nome da tarefa de erro seja vazia ira aparecer mensagem de erro
                const mensagemErro = document.getElementById('mensagemErro')
                mensagemErro.innerHTML = 'Digite o nome da tarefa'
                mensagemErro.style.opacity = '1'

                        //ira remover a mensagem de erro assim que o usuario digitar alguma coisa
                document.getElementById('nomeTarefa').addEventListener('input', () =>{ 
                    mensagemErro.innerHTML = ''
                })
            }else {
                listaTarefas.push({nome: nomeTarefa,conteudo: textoTarefa})
            }
        },
    }
}

    //selecionando botão de salvar tarefas
const botaoSalvarTarefa = document.getElementById('salvarTarefa')
botaoSalvarTarefa.addEventListener('click', () =>{ //instanciando nosso objeto e mandando os dados da tarefa para ele

        //selecionando os inputs
    const nomeTarefa = document.getElementById('nomeTarefa').value.trim()
    const textoTarefa = document.getElementById('textoTarefa').value.trim()

    //resanto valoes dos inputs para o usuario nao mandar varios valores iguais seguidos
    document.getElementById('nomeTarefa').value = ''
    document.getElementById('textoTarefa').value = ''

        //instanciando o objeto e passando os valores
    const tarefasUsuario = tarefas(nomeTarefa,textoTarefa)

        //chamando metodos do objeto
    tarefasUsuario.salvarTarefa() //salvando tarefas
    tarefasUsuario.exibirTarefas() // exibindo tarefas
    
})

    //impedindo o formulario de atualizar a pagina
const form = document.querySelector('.todo-form');

form.addEventListener('submit', (event) => {
event.preventDefault(); // 🚫 impede o recarregamento da página
});

window.onload = () =>{
    tarefas().exibirTarefas()
}