document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario-contato');
    const campoNome = document.getElementById('nome');
    const campoEmail = document.getElementById('email');
    const campoDescricao = document.getElementById('descricao');
    const botaoEnviar = formulario.querySelector('button[type="submit"]');

    // Mensagens de erro
    const erroNome = document.getElementById('erro-nome');
    const erroEmail = document.getElementById('erro-email');
    const erroDescricao = document.getElementById('erro-descricao');

    // Função para validar os campos do formulário
    function validarFormulario() {
        const nomeValido = campoNome.value.trim() !== '';
        const emailValido = validarEmail(campoEmail.value);
        const descricaoValida = campoDescricao.value.trim() !== '';

        // Habilita ou desabilita o botão de envio com base na validade dos campos
        botaoEnviar.disabled = !(nomeValido && emailValido && descricaoValida);

        // Mostra ou esconde mensagens de erro
        erroNome.style.display = nomeValido ? 'none' : 'block';
        erroNome.textContent = nomeValido ? '' : 'O nome deve ser preenchido.';

        erroEmail.style.display = emailValido ? 'none' : 'block';
        erroEmail.textContent = emailValido ? '' : 'O e-mail deve ser válido.';

        erroDescricao.style.display = descricaoValida ? 'none' : 'block';
        erroDescricao.textContent = descricaoValida ? '' : 'A descrição deve ser preenchida.';
    }

    // Função para validar o formato do e-mail
    function validarEmail(email) {
        const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return padraoEmail.test(email);
    }

    // Adiciona ouvintes de eventos para os campos de entrada
    campoNome.addEventListener('input', validarFormulario);
    campoEmail.addEventListener('input', validarFormulario);
    campoDescricao.addEventListener('input', validarFormulario);

    // Evento de envio do formulário
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault(); // Impede o envio padrão do formulário
        alert('Enviado com sucesso!'); // Exibe o alerta de sucesso
        formulario.reset(); // Reseta os campos do formulário
        botaoEnviar.disabled = true; // Desabilita o botão de envio novamente
        validarFormulario(); // Reinicia a validação para esconder mensagens de erro
    });
});