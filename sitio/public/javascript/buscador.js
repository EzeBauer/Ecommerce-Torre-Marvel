const $11 = (id) => document.getElementById(id);


$11("buttonHome").addEventListener("click", (e) => {
     e.preventDefault();
if($11("inputSearch").value!==""){
    $11("formHome").submit()
}else{
    $11("mensajebusqueda").innerHTML='<p class="text-danger">Por favor ingresa una palabra para la búsqueda<p>'
}
}) 



