const $ = id =>document.querySelector(id);
let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;



window.addEventListener('load', (e) => {
    console.log('registerValidator connected success');

    e.preventDefault()

let email = $("#inputEmail")
email.addEventListener("blur", () => {
    if (!email.value.trim()) {
        email.classList.add("is-invalid");
        $(".errorEmail").innerHTML = "No olvides dejarnos tu email";
      }
else if(!regExEmail.test(email.value)){
    email.classList.add('is-invalid')
    $('.errorEmail').innerHTML = "Debes ingresar un email válido"
} else {
   email.classList.remove("is-invalid");
   email.classList.add("is-valid");
    $(".errorEmail").innerHTML = "";
  }
});
let nombre = $("#nombre")
nombre.addEventListener("blur", () => {
  if (!nombre.value.trim()) {
  nombre.classList.add("is-invalid");
    $(".errorName").innerHTML = "El nombre es obligatorio";
  } else if(nombre.value.length<3){
     nombre.classList.add("is-invalid");
     $(".errorName").innerHTML = "El nombre debe tener al menos 3 letras";
   } else {
    nombre.classList.remove("is-invalid");
    nombre.classList.add("is-valid");
    $(".errorName").innerHTML = null;
  }
});
let apellido = $("#apellido");
apellido.addEventListener("blur", () => {
  if (!apellido.value.trim()) {
    apellido.classList.add("is-invalid");
    $(".errorApellido").innerHTML = "El apellido es obligatorio";
  } else if (apellido.value.length < 3) {
    apellido.classList.add("is-invalid");
    $(".errorApellido").innerHTML = "El apellido debe tener al menos 3 letras";
  } else {
    apellido.classList.remove("is-invalid");
    apellido.classList.add("is-valid");
    $(".errorApellido").innerHTML = null;
  }
});




let genero = $("#genero")
genero.addEventListener("blur", () => {
  if (!genero.value.trim()) {
  genero.classList.add("is-invalid");
    $(".errorGenero").innerHTML = "Queremos saber como te identificas";
  } else {
    genero.classList.remove("is-invalid");
    genero.classList.add("is-valid");
    $(".errorGenero").innerHTML = null;
  }
});
let telefono = $("#telefono");
telefono.addEventListener("blur", () => {
  if (!telefono.value.trim()) {
    telefono.classList.add("is-invalid");
    $(".errorTelefono").innerHTML = "Porfa pasanos tu telefono para comunicarnos rapidamente";
  } else {
    telefono.classList.remove("is-invalid");
    telefono.classList.add("is-valid");
    $(".errorTelefono").innerHTML = null;
  }
});
let pais = $("#pais");
pais.addEventListener("blur", () => {
  if (!pais.value.trim()) {
    pais.classList.add("is-invalid");
    $(".errorPais").innerHTML = "Contanos de donde sos";
  } else {
    pais.classList.remove("is-invalid");
    pais.classList.add("is-valid");
    $(".errorPais").innerHTML = null;
  }
});


 let mensaje = $("#inputPaswor");
 mensaje.addEventListener("input", () => {
    if (!mensaje.value.trim()) {
        mensaje.classList.add("is-invalid");
          $(".errorDescripcion").innerHTML = "Contanos algo porfa!!!!";
        }
  else if (mensaje.value.length<15) {
     mensaje.classList.add("is-invalid");
     $(".errorDescripcion").innerHTML = "Por favor contanos algo más";
   } else {
    mensaje.classList.remove("is-invalid");
    mensaje.classList.add("is-valid");
     $(".errorDescripcion").innerHTML = "";
   }
 });

let form= $('#formContacto')
form.addEventListener("submit", e =>{
    e.preventDefault()
    let error = false;
    let elementosForm = form.elements

    for (let i = 0; i < elementosForm.length - 1; i++) {
        
        if(!elementosForm[i].value){
            elementosForm[i].classList.add('is-invalid')
            document.querySelector('.error-empty').innerHTML = 'Los campos señalados son obligatorios';
            error = true
        }
     
    }
    if(!error){
       document.querySelector(".error-empty").innerHTML =
         "";
        form.submit()
    }
 

})




})
