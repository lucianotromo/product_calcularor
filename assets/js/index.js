// const btn = document.getElementById("btn");

// btn.addEventListener("click", fuunction () {
//     const cantidad = document.getElementById("cantidad").value;
//     const color = document.getElementById("color").value;

//     const precioTot = document.getElementById("precioTotal")
//     precioTot.innerHTML = (cantidad + 500000).toLocaleString();

//     cont cantidadTot = document.getElementById("precioTotal");
//     cantidadTotal.innerHTML = cantidad;

//    const colorCirculo = document.getElementById("colorCircle");
//    colorCircule.style.backgroundColor = color;
// });



const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const cantidad = document.getElementById("cantidad").value; //valor input
  const color = document.getElementById("color").value;
  console.log("Variable color", color);

  const precioTot = document.getElementById("precioTotal");
  precioTot.innerHTML = (cantidad * 500000).toLocaleString();
  const cantidadTotal = document.getElementById("cantidadTotal"); //span
  cantidadTotal.innerHTML = cantidad;

  const colorCirculo = document.getElementById("colorCircle");
  colorCirculo.style.backgroundColor = color;
  console.log("Aca ya se reemplazo el color");
});
