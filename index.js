const proxy = 'https://secret-ocean-49799.herokuapp.com'
const base = 'https://opentdb.com'

let jogo;

const perguntas = [
    {
        category: 'Tráfico de Animais Silvestres',
        correct_answer: '38 milhões',
        difficulty: 'easy',
        incorrect_answers: ['38 mil', '40 milhões', '28 milhões'],
        question: 'Quantos animais são retirados da fauna silvestre anualmente?',
        respondida: false
    },
    {
        category: 'Tráfico de Animais Silvestres',
        correct_answer: '1',
        difficulty: 'easy',
        incorrect_answers: ['2', '3', '4'],
        question: 'A cada 10 animais traficados quantos sobrevivem?',
        respondida: false
    },
    {
        category: 'Tráfico de Animais Silvestres',
        correct_answer: 'Aves',
        difficulty: 'easy',
        incorrect_answers: ['Peixes', 'Répteis', 'Mamíferos'],
        question: 'Qual é o principal classe de animais tráficados no Brasil?',
        respondida: false
    },
    {
        category: 'Tráfico de Animais Silvestres',
        correct_answer: 'Norte/Nordeste',
        difficulty: 'easy',
        incorrect_answers: ['Norte/Sudeste', 'Sul/Centro-Oeste', 'Sudeste/Nordeste'],
        question: 'Quais regiões do Brasil mais retiram animais da fauna silvestre?',
        respondida: false
    },
    {
        category: 'Tráfico de Animais Silvestres',
        correct_answer: 'Sul/Sudeste',
        difficulty: 'easy',
        incorrect_answers: ['Norte/Sudeste', 'Sul/Norte', 'Sul/Centro-Oeste'],
        question: 'Quais regiões do Brasil mais consomem do tráfico de animais silvestres?',
        respondida: false
    },
    {
        category: 'Tráfico de Animais Silvestres',
        correct_answer: 'Brasil',
        difficulty: 'easy',
        incorrect_answers: ['Colombia', 'Africa do Sul', 'Cuba'],
        question: 'Qual país mais contrabanda animais silvestres no mundo?',
        respondida: false
    },
    {
        category: 'Tráfico de Animais Silvestres',
        correct_answer: '2 bilhões de Dólares',
        difficulty: 'easy',
        incorrect_answers: ['20 milhões de Dólares', '1 bilhão de Dólares', '1 milhão de Dólares'],
        question: 'Quantos bilhões o Brasil gera devido ao tráfico?',
        respondida: false
    },
    {
        category: 'Tráfico de Animais Silvestres',
        correct_answer: '2ª',
        difficulty: 'easy',
        incorrect_answers: ['1ª', '3ª', '4ª'],
        question: 'O Tráfico de animais é a __ principal ameaça à fauna brasileira',
        respondida: false
    },
    {
        category: 'Tráfico de Animais Silvestres',
        correct_answer: '3ª',
        difficulty: 'easy',
        incorrect_answers: ['2º', '1º', '4º'],
        question: 'O Tráfico de animais é a __ maior atividade ilegal no mundo',
        respondida: false
    },
    {
        category: 'Tráfico de Animais Silvestres',
        correct_answer: '181',
        difficulty: 'easy',
        incorrect_answers: ['190', '183', '911'],
        question: 'Qual o número do disque-denúncias para crimes ambientais?',
        respondida: false
    },
    {
        category: 'Tráfico de Animais Silvestres',
        correct_answer: 'R$500',
        difficulty: 'medium',
        incorrect_answers: ['R$3000', 'R$5000', 'R$1000'],
        question: 'Se uma pessoa, que tenha, com posse ilegal de um animal silvestre for presa, qual o valor aproximado que receberá de multa?',
        respondida: false
    },
    {
        category: 'Tráfico de Animais Silvestres',
        correct_answer: 'Por volta de 200',
        difficulty: 'medium',
        incorrect_answers: ['Por volta de 100', 'Por volta de 500 ', 'Mais de mil'],
        question: '"As zoonoses são doenças ou infecções que naturalmente são transmitidas de animais para vertebrados humanos", segundo a OMS. Por volta de quantas doenças dessa categoria a organização reconhece?',
        respondida: false
    },
    {
        category: 'Tráfico de Animais Silvestres',
        correct_answer: 'Câncer',
        difficulty: 'medium',
        incorrect_answers: ['Raiva', 'Ebola', 'SARS'],
        question: 'Qual dessas é uma doença que NÃO foi gerada por uma zoonose?',
        respondida: false
    },
    {
        category: 'Tráfico de Animais Silvestres',
        correct_answer: 'em cativeiro, Estados Unidos, livres, resto do mundo.',
        difficulty: 'medium',
        incorrect_answers: ['em cativeiro, mundo, livres, continente africano.', 'livres, Savana, em cativeiro, mundo.', 'livres, resto do mundo, em cativeiro, continente africano.'],
        question: 'Existem mais tigres ___ no _____ do que _____ no ____.',
        respondida: false
    },
    {
        category: 'Tráfico de Animais Silvestres',
        correct_answer: 'Com a chegada dos portugueses em terras indígenas',
        difficulty: 'medium',
        incorrect_answers: ['Com a independência do Brasil, com a liberdade no mercado.', 'Na época dos navios negreiros.', 'Após o século XIX.'],
        question: 'Históricamente, o primeiro contato com o tráfico de animais no Brasil começou:',
        respondida: false
    },
    {
        category: 'Tráfico de Animais Silvestres',
        correct_answer: 'SARS-COV-2.',
        difficulty: 'medium',
        incorrect_answers: ['Peste Bulbônica', 'Peste Negra', ' Varíola'],
        question: 'As pandemias mundiais existem há muito tempo. A mais recente delas, que causou emergência sanitária em todo o planeta, foi a pandemia do ___, que está ligada intrinsecamente ao tráfico e consumo de animais silvestres',
        respondida: false
    },
    {
        category: 'Tráfico de Animais Silvestres',
        correct_answer: 'Após 1950.',
        difficulty: 'medium',
        incorrect_answers: ['Antes de 1950.', 'Antes de 1900.', 'Após os anos 2000.'],
        question: 'A declaração universal dos direitos dos animais foi criada em:',
        respondida: false
    },
    {
        category: 'Tráfico de Animais Silvestres',
        correct_answer: 'De 6 meses á 1 ano, somente.',
        difficulty: 'medium',
        incorrect_answers: ['De 1 á 5 anos, somente.', 'De 5 á 10 anos, somente.', '10 anos de reclusão.'],
        question: 'A pena para um traficante de animais pode ser:',
        respondida: false
    },
    {
        category: 'Tráfico de Animais Silvestres',
        correct_answer: 'O desejo de ter um animal exótico.',
        difficulty: 'medium',
        incorrect_answers: ['A ligação ao sentimento de que os animais exóticos trazem  representatividade de poder.', 'A influência de figuras públicas com animais exóticos como algo positivo.', 'A maneira como as redes sociais amplificam o acesso a esse comércio.'],
        question: 'Qual a alternativa INCORRETA com relação as principais causas para o aumento do tráfico de animais',
        respondida: false
    },
    {
        category: 'Tráfico de Animais Silvestres',
        correct_answer: '1163',
        difficulty: 'medium',
        incorrect_answers: ['2948', '4205', '534'],
        question: 'Segundo o ICMBIO, atualmente, no Brasil, existem ___ espécies ameaçadas de extinção',
        respondida: false
    },
]

const categorias = [
    {
        id: 0,
        name: 'Tráfico de Animais Silvestres'
    },
]

const elementos = {
    
    telaEscolhaDificuldade: document.querySelector('#escolha-dificuldade'),
    telaAlternativas: document.querySelector('#alternativas'),
    telaArmazenar: document.querySelector('#armazenar'),
    telaPergunta: document.querySelector('#pergunta'),
    telaJogo: document.querySelector('#jogo'),
    telaCategoria: document.querySelector('#tela-categoria'),
    selecaoCategoria: document.querySelector('#escolha-categoria'),
    telaOpcao: document.querySelector('#opcao'),
    telaFimJogo: document.querySelector('#fim-jogo'),
    progress: document.querySelector('#progress'),

    textPontuacao: document.querySelector('#pontuacao'),
    textPerguntas: document.querySelector('#perguntas-respondidas'),
    textDificuldade: document.querySelector('#dificuldade-selecionada'),
    textCategoria: document.querySelector('#categoria-selecionada'),
    textPontuacaoAtual: document.querySelector('#pontuacao-atual'),
    textAcertos: document.querySelector('#acertos'),
    botoes: {
        dificuldades: {
            easy: document.querySelector('#b-facil'),
            medium: document.querySelector('#b-medio'),
            hard: document.querySelector('#b-dificil'),
        },
        alternativas: {

        },
        botaoSubmit: document.querySelector('#b-submit'),
        botaoArmazenar: document.querySelector('#b-armazenar'),
        botaoSim: document.querySelector('#b-sim'),
        botaoNao: document.querySelector('#b-nao'),
        botaoNovoJogo: document.querySelector('#b-novo-jogo')
    },
}

elementos.botoes.botaoSim.addEventListener('click', () => {
    jogo.responderArmazenada()
    elementos.telaOpcao.classList.add('collapse')
    carregarTelaJogo()
    
})
elementos.botoes.botaoNao.addEventListener('click', () => {
    elementos.telaOpcao.classList.add('collapse')
    carregarPergunta()
})

elementos.botoes.botaoArmazenar.addEventListener('click', () => {
    if(jogo.perguntaArmazenada === undefined){
        jogo.armazenarPergunta() 
        carregarTelaOpcao()
    }
})

elementos.botoes.botaoNovoJogo.addEventListener('click', () => {
    novoJogo()
})

elementos.botoes.botaoSubmit.addEventListener('click', () => {

    jogo.definirCategoria(elementos.selecaoCategoria.options[elementos.selecaoCategoria.selectedIndex].value,elementos.selecaoCategoria.options[elementos.selecaoCategoria.selectedIndex].textContent)
    
    elementos.telaCategoria.classList.add('collapse')
    
    carregarPergunta()    
})

const novoJogo = () => {
    jogo = {
        perguntasRespondidas: 0,
        pontuacao: 0,
        dificuldade: undefined,
        categoria: undefined,
        categoriaPalavra: undefined,
        acertos: 0,
        chances: 3,
        perguntaArmazenada: undefined,
        pergunta: undefined,
        definirDificuldade: function (dificuldade) {
            this.dificuldade = dificuldade
        },
        definirCategoria: function (categoriaIndex,categoria) {
            this.categoria = categoriaIndex
            this.categoriaPalavra = categoria

        },
        armazenarPergunta: function () {
            this.perguntaArmazenada = this.pergunta
            
        },
        responderArmazenada: function () {
            this.pergunta = this.perguntaArmazenada
            this.perguntaArmazenada = undefined
            
        },
        respondi: function () {
            this.perguntasRespondidas++
        },
        computarAcerto: function () {
            if(this.pergunta === this.perguntaArmazenada) {
                if(this.dificuldade == 'easy'){
                    this.pontuacao += 3
                }else if(this.dificuldade == 'medium'){
                    this.pontuacao += 6
                }else if(this.dificuldade == 'hard'){
                    this.pontuacao += 8
                }
            } else {
                if(this.dificuldade == 'easy'){
                    this.pontuacao += 5
                }else if(this.dificuldade == 'medium'){
                    this.pontuacao += 8
                }else if(this.dificuldade == 'hard'){
                    this.pontuacao += 10
                }
            }
            this.acertos++
            console.log(`chances: ${this.chances}`);
        },
        computarErro: function () {
            if(this.dificuldade == 'easy'){
                this.pontuacao += -5
            }else if(this.dificuldade == 'medium'){
                this.pontuacao += -5
            }else if(this.dificuldade == 'hard'){
                this.pontuacao += -5 
            }
            this.chances--
            console.log(`chances: ${this.chances}`);
        },
    }
    elementos.telaEscolhaDificuldade.classList.remove('collapse')
    elementos.telaFimJogo.classList.add('collapse')
    for (const i in elementos.botoes.dificuldades) {
        elementos.botoes.dificuldades[i].addEventListener('click', () => {
            jogo.definirDificuldade(i)
            elementos.telaEscolhaDificuldade.classList.add('collapse')
            carregarCategorias()
        })
    }
}

const carregarCategorias = () => {
 
    const categoria = categorias

    elementos.selecaoCategoria.innerHTML = ""

                    
    for (const c of categoria) {
        elementos.selecaoCategoria.innerHTML += `<option value="${c.id}">${c.name}</option>`    
    }

    setTimeout(() => {elementos.telaCategoria.classList.remove('collapse')},1000)
}


const index = () => {

    let i = parseInt(Math.random() * ( perguntas.length - 0) + 0,0)

    //verifica se a questão escolhida aleatoriamente é da categoria escolhida pelo usuario e se ja ainda não foi respondida, caso não ele sorteia outra pergunta caso sim ele retorna a perguna

    if (perguntas[i].category != jogo.categoriaPalavra || perguntas[i].respondida == true || perguntas[i].difficulty != jogo.dificuldade) {
        console.log("entrou");
        return index()
        
    }else{
        return perguntas[i]
    }
}


const carregarPergunta = () => {
    if (jogo.chances != 0) {

        //verificar se há perguntas não respondidas

        let jaRespondida = 0

        for (let index = 0; index < perguntas.length; index++) {
            if (perguntas[index].category == jogo.categoriaPalavra && perguntas[index].difficulty == jogo.dificuldade) {
                if (perguntas[index].respondida == false) {
                    jaRespondida++
                }
            }
        }
        if (jaRespondida == 0) {
            console.log("sem perguntas");
            carregarTelaFimJogo()
            return
        }
        
        //
        const pergunta = index()

        jogo.pergunta = pergunta
        carregarTelaJogo()
        
    }else {
        console.log("acabou");
        carregarTelaFimJogo()
    }
    
    
}



const decodeHTMLEntities = (text) => {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  }

const verificarAcerto = (resposta) => {
    jogo.respondi()
    const buttonResposta = resposta.path[1].firstChild
    const buttonConfirm = resposta.target
    if(buttonResposta.textContent == jogo.pergunta.correct_answer){
        buttonResposta.classList.remove('btn-outline-light')
        buttonResposta.classList.add('btn-outline-success')
        buttonConfirm.classList.remove('btn-outline-light')
        buttonConfirm.classList.add('btn-outline-success')
        jogo.computarAcerto()
        jogo.pergunta.respondida = true
    }else{
        buttonResposta.classList.remove('btn-outline-light')
        buttonResposta.classList.add('btn-outline-danger')
        buttonConfirm.classList.remove('btn-outline-light')
        buttonConfirm.classList.add('btn-outline-danger')
        jogo.computarErro()
        jogo.pergunta.respondida = true
    }
    
}

const carregarTelaFimJogo = () => {

    for (const p of perguntas) {
        p.respondida = false
    }

    elementos.telaJogo.classList.add('collapse')
    elementos.telaOpcao.classList.add('collapse')
    elementos.telaAlternativas.classList.add('collapse')
    elementos.telaEscolhaDificuldade.classList.add('collapse')
    elementos.telaFimJogo.classList.remove('collapse')

    elementos.textPontuacao.textContent = jogo.pontuacao
    elementos.textPerguntas.textContent = jogo.perguntasRespondidas
    elementos.textDificuldade.textContent = jogo.dificuldade.toUpperCase()
    elementos.textCategoria.textContent = jogo.categoriaPalavra.toUpperCase()
    elementos.textAcertos.textContent = jogo.acertos


}

const carregarTelaOpcao = () => {
    elementos.telaJogo.classList.add('collapse')
    elementos.telaOpcao.classList.remove('collapse')
}

const carregarTelaJogo = () => {

    elementos.progress.classList.remove('bg-danger')
    elementos.progress.classList.remove('bg-warning')
    elementos.progress.classList.add('bg-success')

    elementos.textPontuacaoAtual.textContent = `Score: ${jogo.pontuacao}`
    elementos.telaJogo.classList.remove('collapse')
    elementos.telaAlternativas.classList.remove('collapse')
    elementos.botoes.botaoArmazenar.classList.remove('collapse')

    if(jogo.perguntaArmazenada !== undefined) {
        elementos.botoes.botaoArmazenar.classList.add('collapse')
    }

    elementos.telaPergunta.textContent = `${decodeHTMLEntities(jogo.pergunta.question)}`

    const perguntas = jogo.pergunta.incorrect_answers.concat(jogo.pergunta.correct_answer)

    perguntas.sort()

    elementos.telaAlternativas.innerHTML = ""

    for (let i = 0; i < perguntas.length; i++) {

        const button = document.createElement('button')
        const text = document.createTextNode(decodeHTMLEntities(perguntas[i]))
        const div = document.createElement('div')
        
        div.id = `div-alternativa-${i}`

        div.classList.add('d-flex')
        div.classList.add('justify-content-center')


        button.appendChild(text)
        button.classList.add('btn')
        button.classList.add('btn-outline-light')
        button.classList.add('m-2')
        button.classList.add('flex-fill')

        button.type = 'button'
        button.id = `alternativa-${i}`

        elementos.telaAlternativas.appendChild(div)
        
        document.querySelector(`#div-alternativa-${i}`).appendChild(button)

        elementos.botoes.botaoArmazenar.disabled = false
        
        elementos.botoes.alternativas[`botaoAlternativa${i}`] = document.querySelector(`#alternativa-${i}`)

        elementos.botoes.alternativas[`botaoAlternativa${i}`].addEventListener('click', (e) => {
 
            const bantigo = document.querySelector('#confirm')
            
            if (bantigo != null) {
                bantigo.parentNode.removeChild(bantigo)
                
            }
            
            const div = document.querySelector(`#div-alternativa-${i}`)
            const button = document.createElement('button')
            const text = document.createTextNode('confirm')
            
            button.appendChild(text)
            button.classList.add('btn')
            button.classList.add('btn-outline-success')
            button.classList.add('m-1')
            button.classList.add('flex-fill')
            button.type = 'button'
            button.id = `confirm`
            
            div.appendChild(button)

            button.addEventListener('click', (e) => {
                for (let i = 0; i < perguntas.length; i++) {
                    elementos.botoes.alternativas[`botaoAlternativa${i}`].disabled = true
                }
                elementos.botoes.botaoArmazenar.disabled = true
                button.disabled = true
                clearInterval(interval)
                verificarAcerto(e)
                
                if (elementos.botoes.botaoArmazenar.classList.contains('collapse')){
                    setTimeout(carregarTelaOpcao,2000)
                }else{ 
                    setTimeout(carregarPergunta,2000)      
                }                
            })
        })
    }

    let contagem = 0
    let total = 0

    if(jogo.dificuldade == 'easy'){
        contagem = 1500
    } else if(jogo.dificuldade == 'medium'){
        contagem = 3000
    } else if(jogo.dificuldade == 'hard'){
        contagem = 4000
    }

    total = contagem

    elementos.progress.setAttribute("style",`width: 100%;`)
    elementos.progress.setAttribute("aria-valuenow",`100`)

    const interval = setInterval(() => {
        
        if(!elementos.telaJogo.classList.contains('collapse')){
            --contagem
       
            const aux = contagem * 100 / total
         
            elementos.progress.setAttribute("style",`width: ${Math.round(aux)}%;`)
            elementos.progress.setAttribute("aria-valuenow",`${Math.round(aux)}`)
            
            if (aux <= 60){
                elementos.progress.classList.remove('bg-success')
                elementos.progress.classList.add('bg-warning')
            }
            if (aux <= 30){
                elementos.progress.classList.remove('bg-warning')
                elementos.progress.classList.add('bg-danger')
            }
    
            if (contagem == 0) {
                
                for (let i = 0; i < perguntas.length; i++) {
                    elementos.botoes.alternativas[`botaoAlternativa${i}`].classList.remove('btn-outline-light')
                    elementos.botoes.alternativas[`botaoAlternativa${i}`].classList.add('btn-outline-danger')
                    elementos.botoes.alternativas[`botaoAlternativa${i}`].disabled = true
                }
                elementos.botoes.botaoArmazenar.classList.add('bg-outline-danger')
                elementos.botoes.botaoArmazenar.disabled = true
                clearInterval(interval)
                
                setTimeout(() => {
                    jogo.computarErro()
                    carregarPergunta()
                },2000)
            }
        }else {
            clearInterval(interval)
        }
    }, 10);


}

novoJogo()
