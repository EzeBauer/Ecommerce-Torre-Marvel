console.log('hola mundo');

let contenedor= document.querySelector('.contenedor')
let spantotal= document.querySelector('.total')
let finalizarCompra= document.querySelector('.finalizarCompra')

let productos= localStorage.getItem('producto')
productos= JSON.parse(productos)
console.log("productos ", productos)
let orderId = productos[0][0].orderId
console.log("orderId ", orderId)
productos.forEach(producto => {
    console.log(producto);
});

var total= 0;
productos.forEach((producto) => {
  producto.forEach((item) => {
  
  total += item.total;
}); 
}); 
console.log(total);

 spantotal.innerHTML = `<p>$ ${total}</p>`


productos.forEach((producto) => {
  producto.forEach((item) => {
      
    contenedor.innerHTML += `
                         <article class="carrito-main-article">
                            <div class="carrito-main-producto">
                                <div class="carrito-main-producto-imagen"><img src="/images/merchandising/${item.imagen}" alt=""></div>
                                <div class="carrito-main-producto-descripcion">
                                    <div>
                                        <p>Entregado por Torre Marvel</p>
                                        
                                        <p id="nombrecito"><strong>${item.nombre}</strong> </p>
                                        <p>Cantidad ${item.cantidad}</p>
                                    </div>
                                   
                                </div>
                            </div>
                            <div class="carrito-main-article-precio">
                                <div class="carrito-main-article-precio-subrayado">
                                    <p>Precio unitario:</p>
                                    <Span class="precioUnitario">$ ${item.precio}</Span>
                                </div>
                                <div class="carrito-facturacion-cobro-subtotal">
                                    <p>Subtotal</p>
                                    <span class="subTotal">$ ${item.total}</span>
                                </div>
                            </div>
                        </article>



                      

    `;
  });
})


finalizarCompra.href = `/productos/finalizado/${orderId}`