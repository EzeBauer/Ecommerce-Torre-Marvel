let formEliminar = document.querySelector("form.formEliminar")
let pass = document.querySelector(".passEliminar")


let error = true;
pass.addEventListener('blur',()=>{
    if (pass.value == "") {
        error = true
        document.querySelector('.errorPassword').innerHTML = 'El campo no pueden estar vacíos';
    } else {
        error = false
        document.querySelector('.errorPassword').innerHTML = null;
    }
})

formEliminar.addEventListener('submit',(e)=>{
    e.preventDefault()
    if (pass.value == "") {
        error = true
        document.querySelector('.errorPassword').innerHTML = 'El campo no pueden estar vacíos';
    } else {
        error = false
        document.querySelector('.errorPassword').innerHTML = null;
    }
    if (!error) {
        formEliminar.submit()
    }
})