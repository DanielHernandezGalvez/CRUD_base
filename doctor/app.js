function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value) / 100; // Convertir a metros
    var imc = peso / (altura * altura);
    var resultado = "";

    if (!isNaN(imc)) {
        if (imc < 18.5) {
            resultado = "Bajo peso";
        } else if (imc < 24.9) {
            resultado = "Peso normal";
        } else if (imc < 29.9) {
            resultado = "Sobrepeso";
        } else if (imc < 34.9) {
            resultado = "Obesidad grado 1";
        } else if (imc < 39.9) {
            resultado = "Obesidad grado 2";
        } else {
            resultado = "Obesidad grado 3";
        }

        document.getElementById("resultado").innerHTML = "Tu IMC es: " + imc.toFixed(2) + " (" + resultado + ")";
    } else {
        document.getElementById("resultado").innerHTML = "Por favor, introduce valores válidos.";
    }
}

// Obtén el elemento span donde se mostrará el año actual
const yearSpan = document.getElementById('copyright-year');

// Obtiene el año actual
const currentYear = new Date().getFullYear();

// Asigna el año actual al contenido del elemento span
yearSpan.textContent = currentYear;







