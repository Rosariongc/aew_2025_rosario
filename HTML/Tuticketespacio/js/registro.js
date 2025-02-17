    // Obtener el formulario
    const formulario = document.getElementById('registro');

    // Capturar el evento de submit
    formulario.addEventListener('submit', function(event) {
        // Prevenir el envío predeterminado del formulario
        event.preventDefault();

        // Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value;
        const apellidos = document.getElementById('apellidos').value;
        const email = document.getElementById('email').value;
        const contraseña = document.getElementById('contraseña').value;
        const telefono = document.getElementById('telefono').value;
        const sexo = document.getElementById('sexo').value;

        // Validaciones personalizadas (si lo deseas)
        if (!nombre || !apellidos || !email || !contraseña || !telefono || !sexo) {
            Swal.fire("¡Ups, no rellenaste todos los campos requeridos!");
            return;
        }

        // Si todo está bien, puedes hacer algo aquí, como mostrar un mensaje de éxito
        Swal.fire({
            title: "¿Está seguro de querer registrarse?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Si",
            denyButtonText: `No, por favor`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire("Registro éxitoso", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Registro sin éxito", "", "info");
            }
          });
    });