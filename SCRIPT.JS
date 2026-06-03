// Banco de dados de perguntas (Mito ou Verdade)
const perguntas = [
    {
        texto: "A tecnologia no campo ajuda a economizar água e reduzir o uso de defensivos agrícolas.",
        resposta: true,
        explicacao: "Verdade! Drones e sensores ajudam a aplicar recursos apenas onde é realmente necessário."
    },
    {
        texto: "Para produzir mais alimentos, é obrigatoriamente necessário desmatar novas áreas de floresta.",
        resposta: false,
        explicacao: "Mito! Com técnicas como a rotação de culturas e integração lavoura-pecuária, conseguimos aumentar a produção reaproveitando o mesmo solo."
    },
    {
        texto: "A energia solar e o biogás gerado por resíduos animais são exemplos de sustentabilidade no agro.",
        resposta: true,
        explicacao: "Verdade! Muitas fazendas modernas já produzem sua própria energia limpa a partir de dejetos ou do sol."
    }
];

let indicePerguntaAtual = 0;

const perguntaTexto = document.getElementById("pergunta-texto");
const perguntaBox = document.getElementById("pergunta-box");
const resultadoBox = document.getElementById("resultado-box");
const resultadoTexto = document.getElementById("resultado-texto");

function carregarPergunta() {
    perguntaBox.classList.remove("escondido");
    resultadoBox.classList.add("escondido");
    perguntaTexto.textContent = perguntas[indicePerguntaAtual].texto;
}

function verificarResposta(respostaUsuario) {
    const perguntaAtual = perguntas[indicePerguntaAtual];
    perguntaBox.classList.add("escondido");
    resultadoBox.classList.remove("escondido");

    if (respostaUsuario === perguntaAtual.resposta) {
        resultadoTexto.innerHTML = `<span style="color: #2e7d32; font-weight: bold;">Acertou!</span><br><br>${perguntaAtual.explicacao}`;
    } else {
        resultadoTexto.innerHTML = `<span style="color: #d32f2f; font-weight: bold;">Oops! Não é bem assim...</span><br><br>${perguntaAtual.explicacao}`;
    }
}

function proximaPergunta() {
    indicePerguntaAtual++;
    if (indicePerguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        // Fim do quiz, reinicia o ciclo
        indicePerguntaAtual = 0;
        resultadoBox.classList.add("escondido");
        perguntaBox.classList.remove("escondido");
        alert("Parabéns por concluir o desafio Agrinho! Vamos recomeçar?");
        carregarPergunta();
    }
}

// Inicializa a primeira pergunta ao carregar a página
window.onload = carregarPergunta;