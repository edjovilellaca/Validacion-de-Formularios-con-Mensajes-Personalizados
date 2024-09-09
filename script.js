const boton = document.getElementById('btnEnviar');

boton.addEventListener('click', function(event) {
    event.preventDefault();

    const correo = document.getElementById('correo');
    const contra = document.getElementById('contra');
    var err = false;
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!regexCorreo.test(correo.value.trim())) {
        err = true;
        alert('Por favor, ingresa un formato de correo válido.');
        return;
    }

    if (contra.value.trim().length < 8) {
        err = true;
        alert('La contraseña debe tener al menos 8 caracteres.');
        return;
    }

    if (!err) {
        alert('Formulario enviado correctamente.');
        correo.value = '';
        contra.value = '';
    }
});