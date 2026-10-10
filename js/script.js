// atualiza o ano do rodapé automaticamente
const ano = document.getElementById('ano');
ano.textContent = new Date().getFullYear();

// lightbox
const lightbox = document.getElementById('lightbox');
const fotoAmpliada = lightbox.querySelector('.lightbox-foto');
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