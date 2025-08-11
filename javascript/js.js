    //lista de tarefas
const listaTarefas = []

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
                `<li class="tarefa">
                    <h1>${i.nome}</h1> 
                    <p>${i.conteudo}</p>
                    <section>
                        <button id="concluir" class="btn-tarefas btn-concluir"> concluir</button>
                        <button id="remover" class="btn-tarefas btn-remover"> remover</button>
                    </section>
                </li>`
            }

                //DELETANDO TAREFAS
            const botaoRemover = document.querySelectorAll('.btn-remover')
            botaoRemover.forEach((btn,indexBtn) =>{ //percorrendo todos os botões com a mesma class e retornando o intem e o index
                btn.addEventListener('click', () =>{ //evento de click em cada botão
                    
                    listaTarefas = listaTarefas.map((iten,indexIten) =>{ // pegando o iten e o index do iten da lista
                        if(indexBtn === indexIten) { //comparando index do botão clicado com a do item da lista se for igual ira excluir a tarefa
                            listaTarefas.splice(indexIten, 1) // excluindo o itenm
                            
                            this.exibirTarefas() //atuaçizando a funcção para mostrar a lista correta e deletar o item
                        }
                    })
                })
            })

                //CONCLUINDO TAREFAS
            const botaoConcluir = document.querySelectorAll('.btn-concluir') //selecionando o botão
            botaoConcluir.forEach((iten, indexBtn) =>{ //percorrendo todo os botoes com esta classe
                iten.addEventListener('click', (() =>{ //adicionando evento de click a todos eles

                    const tarefaConcluida = document.querySelectorAll('.tarefa') // selecionando o campo q mudara de cor
                   Array.from(tarefaConcluida).map((itn,idx) =>{ //percorrendo todos que tem a mesma classe
                        if(indexBtn === idx){ //comparando index do botão clicado com o index do item q mudara de cor
                            return itn.style.backgroundColor = '#7ff083'
                        }
                    })
                }))
            })
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