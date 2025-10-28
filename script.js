document.addEventListener('DOMContentLoaded', function() {
    // ======== ACESSIBILIDADE ========
    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoAcessibilidade.addEventListener('click', function() {
        botaoAcessibilidade.classList.toggle('rotacao-botao');
        opcoesAcessibilidade.classList.toggle('apresenta-lista');

        const expanded = botaoAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoAcessibilidade.setAttribute('aria-expanded', !expanded);
    });

    const btnAumentarFonte = document.getElementById('aumentar-fonte');
    const btnDiminuirFonte = document.getElementById('diminuir-fonte');
    const btnContraste = document.getElementById('alterna-contraste');

    let tamanhoFonte = 1;

    btnAumentarFonte.addEventListener('click', function() {
        tamanhoFonte += 0.1;
        document.body.style.fontSize = `${tamanhoFonte}rem`;
    });

    btnDiminuirFonte.addEventListener('click', function() {
        tamanhoFonte = Math.max(0.6, tamanhoFonte - 0.1); // não deixa fonte sumir
        document.body.style.fontSize = `${tamanhoFonte}rem`;
    });

    btnContraste.addEventListener('click', function() {
        document.body.classList.toggle('alto-contraste');
    });

    // ======== SCROLL REVEAL ========
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().reveal('#inicio', { delay: 400, distance: '50px', origin: 'bottom', duration: 1000 });
        ScrollReveal().reveal('#galeria', { delay: 400, distance: '50px', origin: 'bottom', duration: 1000 });
        ScrollReveal().reveal('#contato', { delay: 400, distance: '50px', origin: 'bottom', duration: 1000 });
    }
});
