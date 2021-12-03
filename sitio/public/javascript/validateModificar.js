let nombre = document.querySelector("#nombreProducto")
let imagen = document.querySelector("#imagenProducto")
let precio = document.querySelector("#precioProducto")
let desc = document.querySelector("#descuento")
let descripcion = document.querySelector("#descripcion")
console.log("hola mama")



// validaciones 
let error = false;
nombre.addEventListener("blur", () => {
  if (!nombre.value.trim()) {
    nombre.classList.add("is-invalid");
    document.querySelector(".errorName").innerHTML = "Debe colocar un nombre";
    error = true;
  } else if (nombre.value.length < 4) {
    nombre.classList.add("is-invalid");
    document.querySelector(".errorName").innerHTML = "Debe ser mayor a 4 letras";
    error = true
  } else {
    error = false
    nombre.classList.remove("is-invalid");
    nombre.classList.add("is-valid");
    document.querySelector(".errorName").innerHTML = null;
  }
});

precio.addEventListener("blur", () => {
  if (!precio.value.trim()) {
    error = true
    precio.classList.add("is-invalid");
    document.querySelector(".errorPrecio").innerHTML = "Pensas regalar este producto? Ponele Precio!";
  } else if (precio.value <= 100) {
    error = true
    precio.classList.add("is-invalid");
    document.querySelector(".errorPrecio").innerHTML = "Debes ingresar un precio mayor a 100";
  } else {
    error = false
    precio.classList.remove("is-invalid");
    precio.classList.add("is-valid");
    document.querySelector(".errorPrecio").innerHTML = "";
  }
});

desc.addEventListener("input", () => {
  if (desc.value > 50 && desc.value !== 0) {
    error = true
    desc.classList.add("is-invalid");
    document.querySelector(".errorDesc").innerHTML = "El descuento no puede ser mayor a 50%";
  } else {
    error = false
    desc.classList.remove("is-invalid");
    desc.classList.add("is-valid");
    document.querySelector(".errorDesc").innerHTML = "";
  }
});
descripcion.addEventListener("blur", () => {
  if (descripcion.value.length < 10) {
    error = true
    descripcion.classList.add("is-invalid");
    document.querySelector(".error-desc").innerHTML = "Por favor amplia tu descripcion";
  } else {
    error = false
    descripcion.classList.remove("is-invalid");
    descripcion.classList.add("is-valid");
    document.querySelector(".error-desc").innerHTML = "";
  }
});

let enviar = document.querySelector('.btnEnviar')
enviar.addEventListener('click', (e) => {

  let vacio = false;
  let msjGeneral = document.querySelector('.msjGeneral');
  let elementosForm = [...document.forms[0].elements];
  elementosForm.length = elementosForm.length - 1;
  console.log(elementosForm);
  elementosForm.forEach(e => {
    console.log(e + " " + e.classList.contains("is-invalid"));
    if (e.value == "" && e.id !== "descuento" && e.id !== "imagenProducto") {
      console.log("entro al si");
      vacio = true

    } else {
      console.log("entro al no");

      vacio = false
    }
   
  })
  if (imagen.value == "") {
    vacio = false
    document.querySelector(".errorImagen").innerHTML = "";
  }
  if (vacio) {
    msjGeneral.classList.add("is-invalid");
    msjGeneral.innerHTML = "Los campos marcados son requeridos"
  } else {
    msjGeneral.classList.remove("is-invalid");
    msjGeneral.classList.add("is-valid");
    msjGeneral.innerHTML = "";
  }

  console.log("vacio ", vacio)
  console.log("error ", error)
  if (error == true || vacio == true) {
    e.preventDefault()

  }
})



