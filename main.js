const contadorElemento = document.getElementById('contador');
const botonIncrementar = document.getElementById('incrementar')
const reset = document.getElementById("res")

// Recuperar el valor del contador desde el localStorage
let contador = localStorage.getItem('contador') || 0;

contadorElemento.textContent = contador;

botonIncrementar.addEventListener('click', () => {
  contador++;
  contadorElemento.textContent = contador;

  // Guardar el valor actualizado en el localStorage
  localStorage.setItem('contador', contador);
});

reset.addEventListener("click", () => {
  contador--;
  contadorElemento.textContent = contador 
})
