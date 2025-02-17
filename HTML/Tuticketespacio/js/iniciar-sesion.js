const formulario = document.getElementById('formulario');

    // Añadimos un evento al formulario para escuchar cuando se envíe
    formulario.addEventListener('submit', function(event) {
         // Prevenimos el envío del formulario (para pruebas)
         event.preventDefault();
    
        // Obtenemos los valores de los campos
        const email = document.querySelector('.field-correoeletronico').value;
        const password = document.querySelector('.field-contraseña').value;

        if(email=='admin@gmail.com' && password=='admin'){
            // Mostramos una alerta
            Swal.fire({
                title: "Inicio Correcto!",
                text: "Credenciales válidas!",
                icon: "success"
              });
        }else{
            Swal.fire({
                title: "Inicio Incorrecto!",
                text: "Credenciales Inválidas!",
                icon: "error"
              });
        }
    });