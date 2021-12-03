let spanCantidad = document.querySelector('span.badge');
let changuito = document.querySelector('#lista-carrito tbody');
let spanTotal = document.getElementById('total');
let cartHead = document.getElementById('cart-head');
let cartFooter = document.getElementById('cart-footer');
let cartEmpty = document.getElementById('cart-empty');
let btnCartEmpty = document.getElementById('btn-delete-cart');
let btnNextBuy = document.getElementById('btn-next-buy');

const urlBase = window.origin;



const mostrarCantidad = changuito => {

    var cantidad = 0;
    var total = 0;
    changuito.forEach(item => {
        cantidad += item.cantidad
        total += item.total
    });
    spanCantidad.innerHTML = cantidad
    spanTotal.innerHTML = `<span>$</span> <span class="float-end">${total}</span>`
    
    if(cantidad == 0){

        cartHead.style.display = 'none'
        cartFooter.style.display = 'none'
        cartEmpty.style.display = 'block'
        btnCartEmpty.classList.add('disabled');
        btnNextBuy.classList.add('disabled');
    }else{
       
        cartHead.style.display = "table-header-group"
        cartFooter.style.display = 'table-footer-group'
        cartEmpty.style.display = 'none'        
        btnCartEmpty.classList.remove('disabled');
        btnNextBuy.classList.remove('disabled');
    }

}

const mostrarProductos = carrito => {
    console.log(carrito)
    changuito.innerHTML = ""
    carrito.forEach(item => {
        let product = `
            <td class="col-2">
            <img class="w-100" src="/images/merchandising/${item.imagen}" id="imgProduct"> 
            </td>
            <td class="text-center col-3 align-middle">
            <a class="text-danger h5" onClick="quitarItem(event,${item.id},cantidad${item.id})"><i class="fas fa-minus-square"></i></a>
            <span id="cantidad${item.id}" class="h5">${item.cantidad}<span>
            <a class="text-success h5" onClick="agregarItem(event,${item.id})"><i class="fas fa-plus-square"></i></a>
            </td>
            <td class="align-middle">
            ${item.nombre}
            </td>
           
            <td class="align-middle">
            <span>$</span><span class="float-end">${item.precio}</span>
            </td>
            <td class="align-middle">
            <span>$</span><span class="float-end">${item.total}</span>
            </td>
            `;
        changuito.innerHTML += product
    });
    return false
}

const show = async () => {
    try {
        let response = await fetch(urlBase + '/api/carts/show')
        let result = await response.json();
        mostrarCantidad(result.data);
        mostrarProductos(result.data);
    } catch (error) {
        console.log(error)
    }
}
 

const agregarItemDescription = async (e) => {
    e.preventDefault()
    console.log("hola");
    let href = location.pathname
    console.log("href ",href);
    let id = href.split("/")
    console.log("id ",id);
    id = id[3]
    console.log("id final ",id);
   const productos = [];
    try {
        let response = await fetch(urlBase + '/api/carts/add/' + id)
        let result = await response.json();
        mostrarCantidad(result.data);
        mostrarProductos(result.data);
        productos.push(result.data);
        localStorage.setItem("producto", JSON.stringify(productos));

        let prueba= localStorage.getItem('producto')
        console.log(JSON.parse(prueba))
      

    } catch (error) {
        console.log(error)

    }
    console.log(productos);
    
    console.log('producto ' + id + ' agregado!!')
    
}
  

const agregarItem = async (e,id) => {
    e.preventDefault()
    console.log("hola");
   const productos = [];
    try {
        let response = await fetch(urlBase + '/api/carts/add/' + id)
        let result = await response.json();
        mostrarCantidad(result.data);
        mostrarProductos(result.data);
        productos.push(result.data);
        localStorage.setItem("producto", JSON.stringify(productos));

        let prueba= localStorage.getItem('producto')
        console.log(JSON.parse(prueba))
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Agregado al carrito',
            showConfirmButton: false,
            timer: 1500
          })

    } catch (error) {
        console.log(error)

    }
    console.log(productos);
    
    console.log('producto ' + id + ' agregado!!')
    
}
  

const quitarItem = async (e,id,cantidad) => {
  e.preventDefault();
  console.log(cantidad.innerText);

  try {
    let response = await fetch(urlBase + "/api/carts/remove/" + id);
    let result = await response.json();
    mostrarCantidad(result.data);
    mostrarProductos(result.data);
    localStorage.removeItem('producto')
    localStorage.setItem("producto", JSON.stringify(result.data));
      
    let prueba = localStorage.getItem("producto");
    console.log("producto borrado");
    console.log(JSON.parse(prueba));
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Eliminado del carrito',
        showConfirmButton: false,
        timer: 1500
      })
  } catch (error) {
    console.log(error);
  }
  console.log("producto " + id + " eliminado!!");
 
} 

const empty = async () => {
    Swal.fire({
        title: "Seguro que queres eliminar todos los productos?",
        text: "Ya no podras revertir este cambio!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, quiero eliminarlos!",
        animation: false,
        customClass: {
          popup: "animated tada",
        },
       
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Borrado!", "Se ha vaciado todo tu carrito", "success");
        fetch(urlBase + '/api/carts/empty')
        .then( response => response.json())
        .then(result => {
            mostrarCantidad(result.data);
            changuito.innerHTML = ""
            localStorage.removeItem('producto');

        }).catch(error => console.log(error))

} 
})}

show()