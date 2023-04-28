const botao = document.getElementById('switch-shadow');
const h1 = document.querySelector('h1');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');
const imagem = document.querySelector('.imagem img');

let estadoBotao = false;
botao.addEventListener('click', function () {

    if (estadoBotao) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = "white";
        h1.style.color = "#552583";
        h3.style.color = "#552583";
        h4.style.color = "#552583";
        imagem.src = './img/black.png';



    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = "black";
        h1.style.color = "#FDB927";
        h3.style.color = "#FDB927";
        h4.style.color = "#FDB927";
        imagem.src = './img/white.png';

    }
    estadoBotao = !estadoBotao;
});