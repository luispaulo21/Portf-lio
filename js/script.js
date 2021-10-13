function exibirRedesMobile() {
    const botaoExibirRedesMobile = document.querySelector('.redes__mobile button');

    const exibirRedes = (event) => {
        const redes = botaoExibirRedesMobile.previousElementSibling;
        redes.classList.toggle('ativo');
        event.currentTarget.classList.toggle('ativo');
    };

    botaoExibirRedesMobile.addEventListener('click', exibirRedes);
}

exibirRedesMobile();

function animacaoAoScroll() {
    const secoes = document.querySelectorAll('.anim');

    if(secoes.length) {
        const exibirSecao = () =>{
            const metadeDaTela = window.innerHeight * .5;

            secoes.forEach((secao) => {
                const caracteristicasDaSecao = secao.getBoundingClientRect().top;
                if(caracteristicasDaSecao < metadeDaTela) {
                    secao.classList.add('ativo');
                }
                // } else if(larguraDaTela < 767) {
                //     metadeDaTela = window.innerHeight * .1;
                else {
                    secao.classList.remove('ativo');
                }
            });
        }

        window.addEventListener('scroll', exibirSecao)
    }
}

animacaoAoScroll();