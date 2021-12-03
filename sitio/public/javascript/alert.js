document.querySelector(".deslogueado").addEventListener("click", (e) => {
  e.preventDefault();
  Swal.fire({
    icon: "info",
    title: "Debes estar logueado para poder realizar la compra",
    /* text: "Debes estar logueado para poder realizar la compra", */
    showConfirmButton: false,
    timer: 2000,
  });
});
