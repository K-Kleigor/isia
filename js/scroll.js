document.addEventListener('DOMContentLoaded', function() {
    const fadeSections = document.querySelectorAll('.fade-in-section');

    const checkVisibility = () => {
        // Altura da janela visível
        const viewportHeight = window.innerHeight;

        fadeSections.forEach(section => {
            // Posição do topo da seção em relação ao topo da viewport
            const sectionTop = section.getBoundingClientRect().top;

            // Define um ponto de gatilho (200px acima do fundo da tela)
            // A animação começa quando a seção atinge esta área
            const triggerPoint = viewportHeight - 200;

            // Verifica se a seção está visível na tela
            if (sectionTop < triggerPoint) {
                // Adiciona a classe que dispara a animação CSS
                section.classList.add('is-visible');
            } else {
                 // Opcional: Se quiser que a animação seja reiniciada ao rolar para cima
                 section.classList.remove('is-visible'); 
            }
        });
    };

    // 1. Ouve o evento de rolagem e verifica a visibilidade
    window.addEventListener('scroll', checkVisibility);

    // 2. Verifica a visibilidade imediatamente, caso algum elemento já esteja visível
    checkVisibility();

});
