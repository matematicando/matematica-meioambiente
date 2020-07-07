MicroModal.init();

var arrPerguntas = [
    {pergunta: "<b>Notícia:</b> 'O Brasil ainda tem 122 barragens que oferecem risco. Desse total, 84 são da mineradora Vale, responsável pelo desastre que " +
    "completou um ano. <br><br>" +
    "Fonte:https://veja.abril.com.br/ciencia/brasil-tem-122-barragens-em-risco-alerta-consultoria-dinamarquesa/ <br><br>" +
    "<b>Questão:</b> Qual a porcentagem aproximada das barragens que são da mineradora Vale? <br><br>"
    , resposta: "<b> RESPOSTA:</b> Aproximadamente 69%."},


    {pergunta: "<b>Notícia:</b> 'Compostagem humana, um estudo mostrou que tecidos humanos se decompuseram de forma segura e completa. Esse processo economiza mais de 1,4 tonelada de carbono em comparação com a cremação ou o enterro tradicional.' <br><br>" + 
    "Fonte: https://www.bbc.com/portuguese/internacional-51538222 <br><br>" +
    "<b>Questão:</b> Se considerarmos essa economia, qual gráfico exemplifica a situação acima? <br><br>"+
    "<b>A)</b><br>"+
    "<img src='img/questao21.jpg'> <br><br>" +
    "<b>B)</b><br>"+
    "<img src='img/questao22.jpg'> <br><br>" +
    "<b>C)</b><br>"+
    "<img src='img/questao23.jpg'> <br><br>"
    , resposta: "<b> RESPOSTA:</b> <br> <b>A)</b><br>" +
    "<img src='img/questao21.jpg'> <br>"},


    {pergunta: "<b>Notícia:</b> 'Em 2017, foram registrados cerca de 7,5 mil km² desmatados. A área aumentou para 9,7 mil km² em 2018.' <br><br>" +
    "Fonte: https://ciclovivo.com.br/planeta/meio-ambiente/retrospectiva-de-2019-e-perspectivas-para-2020-na-area-ambiental/ <br><br>" +
    "<img src='img/questao3.jpg'> <br><br>" +
    "Fonte do gráfico: https://www.noticiasagricolas.com.br/videos/meio-ambiente/247105-numeros-de-desmatamento-do-inpe-omitem-reducao-no-desflorestamento-da-ultima-decada.html#.XnkWAohKjIU <br><br>"+
    "<b>Questão:</b> De acordo com o gráfico, essa afirmação é falsa? <br><br>"
    , resposta: "<b> RESPOSTA:</b> Sim, pois esse aumento ocorreu de 2018 para 2019."},
    
    
    {pergunta: "<b>Notícia:</b> 'Mais que um desastre ambiental, o rompimento de uma barragem da Vale, em Brumadinho (MG), foi uma tragédia humana que ocasionou 270 mortes – 13 vítimas seguem desaparecidas.' <br>" +  
    "Fonte: https://ciclovivo.com.br/planeta/meio-ambiente/retrospectiva-de-2019-e-perspectivas-para-2020-na-area-ambiental/ <br><br>" +
    "<b>Questão:</b> Qual a porcentagem de vítimas encontradas? <br><br>"
    , resposta: "<b> RESPOSTA:</b> Aproximadamente 95%."},
    
    
    {pergunta: "Avance 2 casas!", resposta: ""},
    
    {pergunta: "<b>Notícia:</b> <i>'2019: Recorde de concentração de gases do efeito estufa A Organização Mundial Meteorológica (OMM) divulgou que os níveis de dióxido de carbono, metano e óxido nitroso (os três principais gases captadores de calor) atingiram concentração recorde, acelerando ainda mais os efeitos das mudanças climáticas. Entre as consequências estão condições climáticas extremas, escassez hídrica e aumento do nível do mar.'</i> <br><br>" +
    "Nesse item, você(s) deverá(ão) fazer um gráfico. Siga o roteiro abaixo e monte um gráfico com título e legendas. <br>" +
    "<ul>" +
        "<li>Leia novamente essa afirmação para os participantes do jogo;</li>" +
        "<li>Peça ajuda do seu grupo e pergunte para os participantes, quem já ouviu/leu informações parecidas com o enunciado que acabou de ler;</li>" +
        "<li>Monte um gráfico com as respostas “sim” ou “não”</li>" +
        "<li>Faça uma breve analise do seu gráfico.</li>" +
    "</ul> <br><br>"
    , resposta: "<b>MOSTRE SUA RESPOSTA</b>"},
    
    
    {pergunta: "<b>Notícia:</b> 'Pelo menos 900 praias foram atingidas pelo derramamento de óleo que teve início em agosto. Praias do Nordeste, além do Espírito Santo e Rio de Janeiro foram atingidas pelo desastre ambiental que afetou a biodiversidade marinha, o turismo, a economia local, a saúde e o bem-estar da população.'<br><br>" +
    "<b>Faça</b> uma breve pesquisa na internet da quantidade de praias que o território brasileiro possui, calcule a porcentagem aproximada das praias atingidas e faça uma conclusão dos impactos para a natureza, comércio e turismo desses locais atingidos. <br><br>"
    , resposta: "<b> RESPOSTA:</b> São 2095 praias, sendo 43% da praias atingidas."},
    
    
    {pergunta: "“No total, junho de 2019 teve 2.903 alertas inseridos no Terra Brasilis, e 97% do desmatamento foi registrado em quatro estados” (veja no gráfico abaixo): <br><br>" +
    "<img src='img/questao8.png'> <br><br>" +
    "Fonte: https://correiodecarajas.com.br/desmatamento-na-amazonia-aumenta-88-em-junho/ <br><br>"+
    "<b>Questões:</b> De acordo com o gráfico, qual o número de alertas do Pará? É possível definir qual estado teve a menor taxa percentual? Por quê? <br><br>"
    , resposta: "<b> RESPOSTA:</b> São 1410 alertas e não é possível, pois o gráfico não informa o nome de todos os estados."},
    
    
    {pergunta: " <b>Notícia:</b> 'Cerca de 12 milhões de hectares de florestas tropicais desapareceram em 2018, o equivalente a 30 campos de futebol por minuto. Só no Brasil, foram desmatados 10,83%. <br><br>" +
    "Fonte:http://www.ihu.unisinos.br/78-noticias/588638-brasil-liderou-desmatamento-de-florestas-primarias-no-mundo-em-2018-mostra-relatorio <br><br>" +
    "<b>Questão:</b> Quanto equivale aqui no Brasil? <br><br>"
    , resposta: "<b> RESPOSTA:</b> Aproximadamente 1,3 milhões de hectares de florestas."},
    
    
    {pergunta: "Fique uma rodada sem jogar", resposta: ""},
    
    {pergunta: "Volte 1 casa!", resposta: ""},
    
    
    {pergunta: "<b> Notícia: </b> <br><br>" +
    "<img src='img/questao12.jpg'> <br><br>" +
    "De acordo com as informações, faça uma breve síntese desses dados e veja se os participantes do jogo concordam, se “sim”, prossiga no jogo. Caso contrário, discuta com os colegas (pontos de vista/ argumentos) antes de prosseguir no jogo. <br><br>"
    , resposta: "<b> RESPOSTA:</b> Discussão dos dados e análise/reflexão em grupo das informações."},
    
    
    {pergunta: "Avance 1 casa!", resposta: ""},
    
    
    {pergunta: "<b> Notícia: </b> <br><br>" +
    "<img src='img/questao14.jpg'> <br><br>" +
    "Fonte: https://aosfatos.org/noticias/o-saneamento-basico-no-brasil-em-6-graficos/ <br><br>" + 
    "<b>Faça</b> uma síntese das informações com seus colegas. <br><br>"
    , resposta: "<b>Exponha a discussão para todos </b>"},
    
    
    {pergunta: "<b>Notícia:</b> 'As regiões Norte e Nordeste, que têm as piores taxas de cobertura de saneamento básico, também apresentam as maiores taxas de internação por doenças evitáveis relacionadas à carência de saneamento básico. Enquanto a média nacional é de 65 internações por 100 mil habitantes, no Norte as taxas são 69% maior.' <br><br>" +
    "Fonte: https://aosfatos.org/noticias/o-saneamento-basico-no-brasil-em-6-graficos/ <br><br>" +
    "<b>Questão:</b> Qual a média de internações no Norte? <br><br>"
    , resposta: "<b> RESPOSTA:</b> Aproximadamente 110 internações."},
    
    
    {pergunta: "<b> Notícia: </b> <br><br>" +
    "<img src='img/questao16.jpg'> <br><br>" +
    "Fonte: https://aosfatos.org/noticias/o-saneamento-basico-no-brasil-em-6-graficos/ <br><br>" +
    "Discuta com seus colegas as informações do gráfico e responda: <br>" +
    "Será que a expectativa de vida do brasileiro pode auxiliar na interpretação das informações? <br><br>"
    , resposta: "<b> Exponha a discussão para todos</b>"},
    
    
    {pergunta: "Volte 2 casas!", resposta: ""},
    
    {pergunta: "Fique uma rodada sem jogar", resposta: ""},
    
    
    {pergunta: "Notícia: “Desmatamento na Amazônia aumenta 85,3% em 2019, aponta Inpe." +
    "Fonte: https://istoe.com.br/desmatamento-na-amazonia-aumenta-853-em-2019-aponta-inpe/ <br><br>" +
    "<b>Questão:</b> Por que cortam as árvores na Amazônia? <br><br>"
    , resposta: "<b> RESPOSTA:</b> O desmatamento acontece por muitas razões, como exploração madeireira ilegal, agricultura, desastres naturais, urbanização e mineração. Há diversas maneiras de remover florestas -- queimadas e o corte de árvores são dois métodos. Ainda que o desmatamento aconteça em todo mundo, atualmente, ele é uma questão especialmente crítica nas florestas tropicais da Amazônia, já que a única grande floresta ainda em pé no mundo."},
    
    
    {pergunta: "<b> Notícia: </b> <br><br>" +
    "<img src='img/questao20.jpg'> <br><br>" +
    "<b>Questão:</b> Qual região que apresenta os estados com maior concentração de abastecimento de água? E a menor? Quais conclusões? <br><br>"
    , resposta: "<b> Exponha a opinião do grupo/dupla para todos</b>"},
];

var showQuestion = function(numPergunta){
    document.getElementById('modalPergunta').innerHTML = "Pergunta " + (numPergunta + 1 );
    document.getElementById('txtPergunta').innerHTML = arrPerguntas[numPergunta].pergunta;
    document.getElementById('txtResposta').style.display = 'none';
    document.getElementById('txtResposta').innerHTML = arrPerguntas[numPergunta].resposta;
    document.getElementById('carta' + (numPergunta+1)).style.filter = 'grayscale(100%)';
    MicroModal.show('modal-1');
}

var mostrarReposta = function(){
    document.getElementById('txtResposta').style.display = 'block';
}

window.onload = function WindowLoad(event) {
    var txtCartas = '';

    for( var numCarta=0; numCarta<arrPerguntas.length; numCarta++ ){
        txtCartas += `<div class='cartas1' onclick='showQuestion(${numCarta})'>` +
        `<img id='carta${numCarta+1}' src='img/cartas/${numCarta+1}.png'>` +
        `</div>`;
    }

    document.getElementById('cartas').innerHTML = txtCartas;
}