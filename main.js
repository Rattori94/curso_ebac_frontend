const form = document.getElementById('form-campos');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');
    const mensagemValida = 'O valor dos campos é válido.';
    const mensagemInvalida = 'O valor dos campos é inválido.';

    const containerMensagemValida = document.querySelector('.mensagemValida');
    const containerMensagemInvalida = document.querySelector('.mensagemInvalida');

    containerMensagemValida.style.display = 'none';
    containerMensagemInvalida.style.display = 'none';

    formValido = campoA.value && campoB.value && parseFloat(campoB.value) > parseFloat(campoA.value);

    if (formValido) {
        containerMensagemValida.innerHTML = mensagemValida;
        containerMensagemValida.style.display = 'block';
    campoA.value = '';
    campoB.value = '';
    } else {
        containerMensagemInvalida.innerHTML = mensagemInvalida;
        containerMensagemInvalida.style.display = 'block';
    campoA.value = '';
    campoB.value = '';
    }

});