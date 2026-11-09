// atualiza o ano do rodapé automaticamente
const ano = document.getElementById('ano');
ano.textContent = new Date().getFullYear();

// lightbox
const lightbox = document.getElementById('lightbox');

const fotoAmpliada = document.createElement('img');
fotoAmpliada.className = 'lightbox-foto';
lightbox.append(fotoAmpliada);
//const fotoAmpliada = lightbox.querySelector('.lightbox-foto');
const botoesFoto = document.querySelectorAll('.peca-botao');

botoesFoto.forEach(function (botao) {
    botao.addEventListener('click', function () {
        const foto = botao.querySelector('.peca-foto');
        fotoAmpliada.src = foto.src;
        fotoAmpliada.alt = foto.alt;
        lightbox.showModal();
    });
});

lightbox.addEventListener('click', function (evento) {
    if (evento.target === lightbox) {
        lightbox.close();
    }
});

// filtros da galeria
const botoesFiltro = document.querySelectorAll('.filtros button');
const pecas = document.querySelectorAll('.galeria .peca');

botoesFiltro.forEach(function (botao) {
    botao.addEventListener('click', function () {
        const filtro = botao.dataset.filtro;

        pecas.forEach(function (peca) {
            const deveMostrar =
                filtro === 'todos' || peca.dataset.categoria === filtro;

            peca.hidden = !deveMostrar;
        });

        botoesFiltro.forEach(function (outroBotao) {
            const estaSelecionado = outroBotao === botao;
            outroBotao.setAttribute('aria-pressed', String(estaSelecionado));
        });
    });
});