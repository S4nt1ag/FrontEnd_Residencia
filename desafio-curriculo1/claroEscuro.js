const botao = document.getElementById('switch-shadow');
const h1 = document.querySelector('h1');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');
const footerLinks = document.querySelectorAll('footer a');
const imagem = document.querySelector('.imagem img');
const botoes = document.querySelectorAll('.btn');
const botao1 = document.getElementById('botao1');
const botao2 = document.getElementById('botao2');
const sobreMim = document.querySelector('.sobreMim');
const euTexto = document.querySelector('.euTexto');
const doisMilEQuatorze = document.querySelector('.doisMilEQuatorze');
const doisMilEDezeseis = document.querySelector('.doisMilEDezeseis');
const doisMilEVinteETres = document.querySelector('.doisMilEVinteETres');
const doisMilEVinteUm = document.querySelector('.doisMilEVinteUm');
const doisMilEVinteUmArg = document.querySelector('.doisMilEVinteUmArg');
const nameHeader = document.querySelector('.nameHeader');
const tituloHeader = document.querySelector('.tituloHeader');


let estadoBotao = false;
botao.addEventListener('click', function () {

    if (estadoBotao) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = "white";
        h1.style.color = "#552583";
        h3.style.color = "#552583";
        h4.style.color = "#552583";
        imagem.src = './img/black.png';
        footerLinks.forEach(link => link.style.color = "white");
        botoes.forEach(btn => {
            btn.style.backgroundColor = "#552583";
            btn.style.color = "white";

        });



    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = "black";
        h1.style.color = "#FDB927";
        h3.style.color = "#FDB927";
        h4.style.color = "#FDB927";
        imagem.src = './img/white.png';
        footerLinks.forEach(link => link.style.color = "black");
        botoes.forEach(btn => {
            btn.style.backgroundColor = "#FDB927";
            btn.style.color = "black";
            btn.style.boxShadow = "2px 2px 10px #552583";
        });

    }
    estadoBotao = !estadoBotao;
});

botao1.addEventListener('click', function () {
    h1.textContent = "Gabriel Santiago Neves";
    h3.textContent = "Formação";
    h4.textContent = "Experiência";
    sobreMim.textContent = "Residente TIC Serratec";
    euTexto.textContent = "Um desenvolvedor junior é um profissional em início de carreira na área de desenvolvimento de software. Geralmente, possui um conhecimento básico de linguagens de programação, tecnologias e ferramentas utilizadas na área.";
    doisMilEQuatorze.textContent = "2014 - Curso Técnico em Informática";
    doisMilEDezeseis.textContent = "2016 - Curso de Inglês";
    doisMilEVinteETres.textContent = "2023 - Residência Serratec | TIC Full Stack";
    doisMilEVinteUm.textContent = "2021 - 2023 Corpu's Line";
    doisMilEVinteUmArg.textContent = "Auxiliar Administrativo";
    nameHeader.textContent = "Gabriel Santiago Neves";
    tituloHeader.textContent = "Residente Tic Serratec"

});
botao2.addEventListener('click', function () {
    h1.textContent = "Gabriel Santiago Neves";
    h3.textContent = "Training";
    h4.textContent = "Experience";
    sobreMim.textContent = "Serratec TIC Resident";
    euTexto.textContent = "A junior developer is a professional at the beginning of his career in the area of software development. Generally, it has a basic knowledge of programming languages, technologies and tools used in the area.";
    doisMilEQuatorze.textContent = "2014 - Technical Course in Informatics";
    doisMilEDezeseis.textContent = "2016 - English Course";
    doisMilEVinteETres.textContent = "2023 - Serratec Residence | TIC Full Stack";
    doisMilEVinteUm.textContent = "2021 - 2023 Corpu's Line";
    doisMilEVinteUmArg.textContent = "Administrative Assistant";
    nameHeader.textContent = "Gabriel Santiago Neves";
    tituloHeader.textContent = "Serratec TIC Resident"

});