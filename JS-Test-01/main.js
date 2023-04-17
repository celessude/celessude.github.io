// Guarda columna activa
let columnaActiva=2;


// Selecciono columna
const columnas = document.querySelectorAll(".columna");
columnas[columnaActiva].classList.add("activa");

// Listen to clicks
columnas.forEach((columna, indice) =>{
                 columna.addEventListener("mouseover", function(){ //click //mouseover
    console.log(columna, indice);
    cambiarColumna(indice);
  })
  
})

// Cambio estado columnas
function cambiarColumna(indice) {
  columnas[columnaActiva].classList.remove("activa");
  columnas[indice].classList.add("activa");
  columnaActiva = indice;
}