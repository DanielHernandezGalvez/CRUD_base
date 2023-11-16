function getYear() {
  const fechaActual = new Date();
  return fechaActual.getFullYear() + " ";
}

const yearSpan = document.getElementById("year");
yearSpan.textContent = getYear();
