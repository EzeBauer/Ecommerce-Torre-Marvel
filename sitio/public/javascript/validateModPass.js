window.addEventListener('load',()=>{
let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;
let formModificar = document.querySelector("form.formModificar")
let passwordMod = document.querySelector(".passMod1")
let passwordMod2 = document.querySelector(".passMod2")

console.log(formModificar)
console.log(passwordMod)
console.log(passwordMod2)


let success = () =>{
    document.querySelector('.error').classList.remove('text-danger')
    document.querySelector('.error').classList.add('text-success')
}

let danger = () =>{
    document.querySelector('.error').classList.remove('text-success')
    document.querySelector('.error').classList.add('text-danger')
}

let error= true
passwordMod.addEventListener('input', ()=>{
    if(!regExPass.test(passwordMod.value) ){
        error = true;
        document.querySelector('.error').innerHTML = "Debe tener como mínimo <strong>8</strong> caracteres 1 <strong>Número</strong> y 1 <strong>Mayúscula</strong>"
    }else{
        error = false;
        document.querySelector('.error').innerHTML = null
    }

})



passwordMod2.addEventListener('input', ()=>{
    
    if(!regExPass.test(passwordMod2.value) ){
        error = true;
        document.querySelector('.error').innerHTML = "Debe tener como mínimo <strong>8</strong> caracteres 1 <strong>Número</strong> y 1 <strong>Mayúscula</strong>"
    }else{
        error = false;
        document.querySelector('.error').innerHTML = null
    }

    if (passwordMod.value !== "" && passwordMod2.value !== "" && passwordMod.value !== passwordMod2.value) {
        error = true;
        danger()        
        document.querySelector('.error').innerHTML = 'las contraseñas no coinciden';
    } else {
        error = false;
        success()
        document.querySelector('.error').innerHTML = null
        document.querySelector('.error').innerHTML = 'Vas muy bien!';
    }

    if (passwordMod2.value == "") {
        error = true;
        danger()        
        document.querySelector('.error').innerHTML = 'Los campos no pueden estas vacíos';
    } 
})



formModificar.addEventListener('submit',(e)=>{
    console.log('hola desde el evento del form');
    e.preventDefault()
    if( passwordMod2.value == "" || passwordMod.value == ""){
        danger()
        document.querySelector('.error').innerHTML = "Los campos no pueden estar vacíos"
        error = true;
    }else{
        error = false;
        document.querySelector('.error').innerHTML = null
    }
    if (passwordMod.value !== "" && passwordMod2.value !== "" && passwordMod.value !== passwordMod2.value) {
        error = true;
        danger()        
        document.querySelector('.error').innerHTML = 'Los campos no pueden estar vacíos';
    } else {
        error = false;
        success()
        document.querySelector('.error').innerHTML = null
        document.querySelector('.error').innerHTML = 'Vas muy bien!';
    }

    if(!regExPass.test(passwordMod2.value) ){
        console.log('toy');
        error = true;
        danger()
        document.querySelector('.error').innerHTML = "Debe tener como mínimo <strong>8</strong> caracteres 1 <strong>Número</strong> y 1 <strong>Mayúscula</strong>"
    }else{
        error = false;
        document.querySelector('.error').innerHTML = null
    }

    if (!error) {
        formModificar.submit()
    }
})
})