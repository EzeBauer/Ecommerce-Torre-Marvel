let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;

console.log('CONECTADO');

let form = document.querySelector("form")
let nameUser = document.querySelector("#validationCustom01")
let firstName = document.querySelector("#validationCustom02")
let lastName = document.querySelector("#validationCustom05")
let email = document.querySelector("#validationCustom03")
let password = document.querySelector("#validationCustom04")
let buttom = document.querySelector(".btn-registrarse")


// API emails

const fetchEmail = async () => {
    try {
        let res = await fetch('/api/users/email')
        let data = await res.json()
        return data.email;
        
    } catch (error) {
        console.log(error);
    }
}

// validaciones 

nameUser.addEventListener('input', ()=>{
    if(nameUser.value.length < 2){
        nameUser.classList.add('is-invalid')
        document.querySelector('.error-nameUser').innerHTML = "Debes ingresar un nombre de usuario válido"
    }else{
       nameUser.classList.remove('is-invalid')
       nameUser.classList.add('is-valid')
        document.querySelector('.error-nameUser').innerHTML = null
    }
})

firstName.addEventListener('input', ()=>{
    if(firstName.value.length < 2){
        firstName.classList.add('is-invalid')
        document.querySelector('.error-firstName').innerHTML = "Debes ingresar un nombre de usuario válido"
    }else{
       firstName.classList.remove('is-invalid')
       firstName.classList.add('is-valid')
        document.querySelector('.error-firstName').innerHTML = null
    }
})
lastName.addEventListener('input', ()=>{
    if(lastName.value.length < 2){
        lastName.classList.add('is-invalid')
        document.querySelector('.error-lastName').innerHTML = "Debes ingresar un nombre de usuario válido"
    }else{
       lastName.classList.remove('is-invalid')
       lastName.classList.add('is-valid')
        document.querySelector('.error-lastName').innerHTML = null
    }
})

password.addEventListener('blur', ()=>{
    if(!regExPass.test(password.value) ){
        password.classList.add('is-invalid')
        console.log(password.value);
        document.querySelector('.error-password').innerHTML = "Debe tener entre <strong>8</strong> y <strong>12</strong> caracteres 1 <strong>Número</strong> y 1 <strong>Mayúscula</strong>"
    }else{
       password.classList.remove('is-invalid')
       password.classList.add('is-valid')
        document.querySelector('.error-password').innerHTML = null
    }
})

email.addEventListener('input',async ()=>{

    if(!regExEmail.test(email.value)){
        email.classList.add('is-invalid')
        document.querySelector('.error-email').innerHTML = "Debes ingresar un email válido"
    }else {
        let emails = await fetchEmail()
        let result;
         emails.forEach(element => {
            if(email.value === element){
                result = true
            }else{
                result=false
            }
         });
        console.log(result);
        if (result) {
            email.classList.add('is-invalid')
            document.querySelector('.error-email').innerHTML = "El email ya existe"
        }else{
            email.classList.remove('is-invalid')
            email.classList.add('is-valid')
            document.querySelector('.error-email').innerHTML = null
        }
    }
})



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
        form.submit()
    }
 

})
