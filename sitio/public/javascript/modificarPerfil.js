window.addEventListener('load', () => {
    console.log("conectado");
    //botones
    let btnModificar = document.querySelector('#modificar')
    let btnEliminar = document.querySelector('#eliminar')
    let btnCambiarAvatar = document.querySelector('#cambiarAvatar')

    //formularios
    let modificarForm = document.querySelector('.formModificar')
    let eliminarForm = document.querySelector('.formEliminar')
    let cambiarAvatarForm = document.querySelector('.formCambiarAvatar')

    //borrar formularios
    let clearForm = () => {
        if (eliminarForm.classList.contains('d-flex')) {
            eliminarForm.classList.remove('d-flex')
            eliminarForm.classList.add('d-none')
        }

        if (cambiarAvatarForm.classList.contains('d-flex')) {
            cambiarAvatarForm.classList.remove('d-flex')
            cambiarAvatarForm.classList.add('d-none')

        }

        if (modificarForm.classList.contains('d-flex')) {
            modificarForm.classList.remove('d-flex')
            modificarForm.classList.add('d-none')

        }
    }


    //eventos
    btnModificar.addEventListener('click', () => {

        clearForm()

        modificarForm.classList.add('d-flex')
        modificarForm.classList.remove('d-none')

    })

    btnEliminar.addEventListener('click', () => {
        clearForm()

        eliminarForm.classList.add('d-flex')
        eliminarForm.classList.remove('d-none')

    })

    btnCambiarAvatar.addEventListener('click', () => {
        clearForm()

        cambiarAvatarForm.classList.add('d-flex')
        cambiarAvatarForm.classList.remove('d-none')
        let avatarPreview = document.querySelector('.contAvatarPreview')
        document.querySelector("#avatar").onchange = function (e) {
            // Creamos el objeto de la clase FileReader
            avatarPreview.innerHTML = null;
            let reader = new FileReader();

            // Leemos el archivo subido y se lo pasamos a nuestro fileReader
            console.log(e.target.files);
            reader.readAsDataURL(e.target.files[0]);

            // Le decimos que cuando este listo ejecute el código interno
            reader.onload = function () {

                let image = document.createElement('img');

                image.src = reader.result;
                image.classList = "avatarPreview"
                avatarPreview.append(image);
            };
        }


        //   validacion

        let enviar = document.querySelector('#guardarImg')

        enviar.addEventListener('click', (e) => {

            let inputFile = document.querySelector('#avatar')
            let error = false;

            let ext = inputFile.value.split(".")
            if (inputFile.value !== "" && ext[1] !== "jpg" || ext[1] !== "png" || ext[1] !== "img") {
                document.querySelector('.errorImagen').innerHTML = "Las extensiones aceptadas son: .jpg, .png, .img"
                error = true
            } else {
                document.querySelector('.errorImagen').innerHTML = ""
                error = false
            }


            if (!inputFile.value.trim()) {
                inputFile.classList.add("is-invalid");
                document.querySelector('.errorImagen').innerHTML = "Debes subir al menos una imagen";
                error = true
            } else {
                inputFile.classList.remove("is-invalid");
                inputFile.classList.add("is-valid");
                document.querySelector('.errorImagen').innerHTML = null;
                error = false
            }

            if (error) {
                e.preventDefault()

            }
        })
    })


})