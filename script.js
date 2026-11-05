
// ===== ANO AUTOMÁTICO NO RODAPÉ =====

const ano = document.getElementById("ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}

// ===== ANIMAÇÃO AO ROLAR A PÁGINA =====

const elementos = document.querySelectorAll(
    ".cartao, .titulo, .apresentacao, .foto"
);

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
            observador.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.15
});

elementos.forEach((elemento) => {
    elemento.classList.add("revelar");
    observador.observe(elemento);
});

// ===== MENSAGEM NO CONSOLE =====

console.log("Portfólio do Pedro Henrique carregado!");

