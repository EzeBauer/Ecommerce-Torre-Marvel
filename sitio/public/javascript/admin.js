console.log('admin conneted success')
const $ = (id) => document.querySelector(id);
const $1 = (id) =>document.getElementById(id);
const query =new URLSearchParams(location.search);


 $(".searchButton").addEventListener("click", (e) => {
    e.preventDefault();
     $("#table-products").innerHTML = "";
       $(
         ".productos"
       ).innerHTML = "";
    query.set("keywords", $1("input-search").value);
    history.replaceState({}, "", `${location.pathname}?${query}`);
     if (query.get("keywords")!==""){
       search(query.get("keywords")); //query.get nos toma la palbra ingresada por el buscador
  }else{
     $(
         ".productos"
       ).innerHTML ="<P><b>Ingresa una palabra para la busqueda</b></p>"
  }
    
      
 })

/* 
const borrar = async () => {
let borrar = document.querySelectorAll('.borrar')
 borrar.forEach(e => e.addEventListener("click",(event)=>{
    let formulario = document.querySelector('.eliminar')
    console.log(formulario);
    let respuesta = confirm("Seguro que lo queres borrar?");
    if (!respuesta) {
        event.preventDefault()
    return false;
    }else {
        alert("El producto ah sido completamente eliminado del inventario que poseemos actualmente");
    formulario.submit()
    
    }
    
}))
}
 */

const borrar = async () => {
  let formularios = document.querySelectorAll(".eliminar");

  formularios.forEach((e) =>
    e.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log("hola")
     Swal.fire({
       title: "Seguro que queres eliminar este producto?",
       text: "Ya no podras revertir este cambio!",
       icon: "warning",
       showCancelButton: true,
       confirmButtonColor: "#3085d6",
       cancelButtonColor: "#d33",
       confirmButtonText: "Si, quiero eliminarlo!",
       animation: false,
       customClass: {
         popup: "animated tada",
       },
     }).then((result) => {
       console.log(result);
       if (result.isConfirmed) {
         Swal.fire("Borrado!", "El producto a sido eliminado", "success");
         e.submit();
       }
     });
    })
  );
};

window.addEventListener("load",function(){
 listado()
  console.log("documento");
}) 
  


$('#table-products').innerHTML = null; //limpio el caja padre
$('.listado').addEventListener("click", () =>{
    listado()
     
})
$('.agregar').addEventListener("click", () =>{

})
$('.ropa').addEventListener("click", () =>{
    ropa()
})
$('.mercha').addEventListener("click", () =>{
    mercha()
})
$('.figuras').addEventListener("click", () =>{
    figuras()
})
$('.comics').addEventListener("click", () =>{
    comics()
})




const listado = async () => {
  $("#table-products").innerHTML="";
    try {
        let response = await fetch('/api/products');
        let result = await response.json();
        console.log(result);
        result.data.forEach(product => {
         addItem(product);
         $(".productos").innerHTML = `<p><b>Lista completa de productos: ${result.meta.cantidad}</b></p>`;
        });
       borrar()

    } catch (error) {
        console.log(error)
    }

}
/* loadProduct(list) */


const addItem = product => {
    console.log(product.id);
    let item = `
    <tr style="width:10px; height:10px">
        <th scope="row">${product.id} </th>
        <td scope="row" style="width:10px; height:10px"> <img src="/images/merchandising/${product.image}" class="img-fluid" alt="">  </td>
        <td>${product.title} </td>
        <td>${product.price} </td>
        <td>${product.category.name} </td>
        <td>
        <div style="margin:5px">
            <a class="btn btn-sm btn-success"
            href="/productos/modificar/${product.id} "><i class="fas fa-edit"></i></a>
        </div>
        <div style="margin:5px">
            <form id="eliminar" class="eliminar" action="/productos/borrar/${product.id}?_method=DELETE"
                method="POST">
                <button class="btn btn-sm btn-lg-sm btn-danger borrar" type="submit">
                <i class="fas fa-trash-alt"></i>
                </button>
            </form>
        </div>
        </td>
    </tr>
    `;
    return $('#table-products').innerHTML += item;
}

const addItemCategory = product => {
  let item = `
  <tr style="width:10px; height:15px">
      <th scope="row">${product.id} </th>
      <td scope="row" style="width:10px; height:10px"> <img src="/images/merchandising/${product.image}" class="img-fluid" alt="">  </td>
      <td>${product.title} </td>
      <td>${product.price} </td>
      <td></td>
      <td>
          <a class="btn btn-sm btn-success"
          href="/productos/modificar/${product.id}"><i class="fas fa-edit"></i></a>
      <div>
          <form id="eliminar" class="eliminar" action="/productos/borrar/${product.id}?_method=DELETE"
              method="POST">
              <button class="btn btn-sm  btn-danger borrar"
                  type='submit'><i class="fas fa-trash-alt"></i></button>
          </form>
      </div>
      </td>
  </tr>
  `;
  return $('#table-products').innerHTML += item;
}

async function search(keywords) {
    $("#table-products").innerHTML="";
   
      try {
        let response = await fetch("/api/products/search?keywords=" + keywords);
        let result = await response.json();
        console.log(result.data);

        if (result.meta.total > 0) {
          result.data.forEach((product) => {
            addItem(product);
            $(
              ".productos"
            ).innerHTML = `<p><b>Productos encontrados para la busqueda ${keywords}: ${result.meta.total}</b></p>`;
          });
        } else {
          $(
            ".productos"
          ).innerHTML = `<p><b>No hay resultados para la busqueda: ${keywords}</b></p>`;
        }
        borrar();
      } catch (error) {
        console.log(error);
      }
};

  async function ropa() {
    $("#table-products").innerHTML="";
   try {
     let response = await fetch("/api/products/categories/ropa")
     let result = await response.json();
     console.log(result);
    $(".productos").innerHTML = `<p><b>Productos encontrados para la categoria ROPA: ${result.meta.total}</b></p>`; 
  
     result.data.products.forEach(product => {
     
     addItemCategory(product);
    
     })
     
     borrar()
   } catch (error) {
     console.log(error);
   }
 }; 

 async function mercha() {
  $("#table-products").innerHTML="";
 try {
   let response = await fetch("/api/products/categories/mercha")
   let result = await response.json();
   console.log(result);
   $(".productos").innerHTML = `<p><b>Productos encontrados para la categoria MERCHANDISING: ${result.meta.total}</b></p>`;  
   result.data.products.forEach(product => {
   
   addItemCategory(product);
 
   })
   borrar()
 } catch (error) {
   console.log(error);
 }
}; 

async function figuras() {
  $("#table-products").innerHTML="";
 try {
   let response = await fetch("/api/products/categories/figuras")
   let result = await response.json();
   console.log(result);
   $(".productos").innerHTML = `<p><b>Productos encontrados para la categoria FIGURAS: ${result.meta.total}</b></p>`;  
   result.data.products.forEach(product => {
   
   addItemCategory(product);
  
   })
   borrar()
 } catch (error) {
   console.log(error);
 }
}; 

async function comics() {
  $("#table-products").innerHTML="";
 try {
   let response = await fetch("/api/products/categories/comics")
   let result = await response.json();
      console.log(result);
      $(".productos").innerHTML = `<p><b>Productos encontrados para la categoria COMICS: ${result.meta.total}</b></p>`;  
   result.data.products.forEach(product => {
   
   addItemCategory(product);
  
   })
   borrar()
 } catch (error) {
   console.log(error);
 }
}; 


   

      
