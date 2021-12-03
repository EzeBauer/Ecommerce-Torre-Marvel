
const $ = id => document.querySelector(id);



window.addEventListener('load', (e) => {
  console.log('registerValidator connected success');
 let enviar = document.querySelector('.btnEnviar')
  let error = false;

  let nombre = $("#nombreProducto")
  nombre.addEventListener("blur", () => {
    if (!nombre.value.trim()) {
      nombre.classList.add("is-invalid");
      $(".errorName").innerHTML = "El nombre es obligatorio";
      error = true
    } else if (nombre.value.length < 3) {
      nombre.classList.add("is-invalid");
      $(".errorName").innerHTML = "El nombre debe tener al menos 3 letras";
      error = true
    } else {
      nombre.classList.remove("is-invalid");
      nombre.classList.add("is-valid");
      $(".errorName").innerHTML = null;
      error = false
    }
  });

  let imagen = $("#imagenProducto");
  imagen.addEventListener("focus", () => {
    let ext = imagen.value.split(".")
    console.log(ext)
    if (imagen.value !== "" && ext[1] !== "jpg" || ext[1] !== "png" || ext[1] !== "img") {
      $(".errorImagen").innerHTML = "Las extensiones aceptadas son: .jpg, .png, .img"
      error = true
    } else {
      $(".errorImagen").innerHTML = ""
      error = false
    }

  });

  imagen.addEventListener("blur", () => {
    if (!imagen.value.trim()) {
      imagen.classList.add("is-invalid");
      $(".errorImagen").innerHTML = "Debes subir al menos una imagen";
    } else {
      imagen.classList.remove("is-invalid");
      imagen.classList.add("is-valid");
      $(".errorImagen").innerHTML = null;
    }
  });

  let precio = $("#precioProducto")
  precio.addEventListener("blur", () => {
    if (!precio.value.trim()) {
      error = true
      precio.classList.add("is-invalid");
      $(".errorPrecio").innerHTML = "Pensas regalar este producto? Ponele Precio!";
    } else if (precio.value <= 100) {
      error = true
      precio.classList.add("is-invalid");
      $(".errorPrecio").innerHTML = "Debes ingresar un precio mayor a 100";
    } else {
      precio.classList.remove("is-invalid");
      precio.classList.add("is-valid");
      $(".errorPrecio").innerHTML = "";
      error = false
    }
  });

  let desc = $("#descuento")
  desc.addEventListener("input", () => {
    if (desc.value > 50) {
      error = true
      desc.classList.add("is-invalid");
      $(".errorDesc").innerHTML = "El descuento no puede ser mayor a 50%";
    } else {
      error = false
      desc.classList.remove("is-invalid");
      desc.classList.add("is-valid");
      $(".errorDesc").innerHTML = "";
    }
  });
  let descripcion = $("#descripcion");
  descripcion.addEventListener("blur", () => {
    if (descripcion.value.length < 10) {
      error = true
      descripcion.classList.add("is-invalid");
      $(".errorDescripcion").innerHTML = "Por favor amplia tu descripcion";
    } else {
      descripcion.classList.remove("is-invalid");
      descripcion.classList.add("is-valid");
      $(".errorDescripcion").innerHTML = "";
      error = false
    }
  });
  

  enviar.addEventListener('click',(e) =>{
    let vacio = false;
    let msjGeneral = document.querySelector('.msjGeneral');
    let elementosForm = [...document.forms[0].elements];
    elementosForm.length = elementosForm.length - 1;
    console.log(elementosForm);
    elementosForm.forEach(e => {
      console.log(e.value);
      console.log(e);
      if(e.value == ""){
        vacio = true
        msjGeneral.classList.add("is-invalid");
        msjGeneral.innerHTML= "Todos los campos son requeridos"
      }else{
        msjGeneral.classList.remove("is-invalid");
        msjGeneral.classList.add("is-valid");
        msjGeneral.innerHTML = "";
        vacio = false
      }
      
  })
  console.log(vacio)
    if (error || vacio) {
      e.preventDefault()
      
    } 
  })

})