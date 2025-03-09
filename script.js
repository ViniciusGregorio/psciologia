// Evento para exibir o quiz ao clicar no botão "Iniciar Teste"
document.getElementById('start-btn').addEventListener('click', function() {
    // Esconde a seção de introdução
    document.getElementById('intro').style.display = 'none';

    // Exibe o quiz
    document.getElementById('quiz').style.display = 'block';
});

// Evento para processar o formulário e mostrar o resultado
document.getElementById('burnout-test').addEventListener('submit', function(event) {
    event.preventDefault();

    let score = 0;
    const questions = document.querySelectorAll('input[type="radio"]:checked');
    questions.forEach(q => {
        score += parseInt(q.value);
    });

    let resultText = '';
    let stressLevel = '';
    let recommendations = '';
    let graph = '';

    if (score < 2) {
        resultText = 'Você está com um risco baixo de burnout.';
        stressLevel = 'Baixo';
        recommendations = 'Parabéns! Continue cuidando de sua saúde mental.';
    } else if (score < 4) {
        resultText = 'Seu risco de burnout é moderado. Considere fazer mudanças em sua rotina.';
        stressLevel = 'Moderado';
        recommendations = 'Sugestões: Pratique mindfulness, faça pausas regulares e busque apoio social.';
    } else {
        resultText = 'Seu risco de burnout é alto. É importante procurar ajuda.';
        stressLevel = 'Alto';
        recommendations = 'Sugestões: Busque apoio profissional, pratique técnicas de relaxamento, e considere reduzir a carga de trabalho.';
    }

    // Mostrar resultados
    document.getElementById('result-text').textContent = resultText;
    document.getElementById('stress-level').textContent = stressLevel;
    document.getElementById('recommendations').textContent = recommendations;
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';

    // Gerar gráfico simples (porcentagem)
    graph = `<div style="width: ${score * 20}% ; background-color: #4e73df; color: white; padding: 10px; text-align: center;">${score * 20}% de risco</div>`;
    document.getElementById('graph').innerHTML = graph;
});

// Evento para reiniciar o teste
document.getElementById('retest-btn').addEventListener('click', function() {
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.getElementById('intro').style.display = 'block';
});
