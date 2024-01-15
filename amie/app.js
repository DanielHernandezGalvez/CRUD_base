const developer = () => {
  console.log("DanielGálvezDev");
};

developer();

const banner = () => {
  img1 = document.getElementById("banner1")
  
}

document.addEventListener("DOMContentLoaded", function () {

  

  // Ruta de la carpeta del catálogo
  var catalogoPath = "./catalogo/";

  // Contenedor del carousel
  var carouselInner = document.getElementById("carousel-inner");

  // Contenedor de imágenes seleccionadas en el modal
  var selectedImagesContainer = document.getElementById("selected-images");

  // Array para almacenar la información de las imágenes seleccionadas
  var selectedImagesArray = [];

  // Función para actualizar el Local Storage con el array actualizado
  function updateLocalStorage() {
    localStorage.setItem("selectedImages", JSON.stringify(selectedImagesArray));
  }

  // Función para eliminar una imagen del modal
  function deleteImage(imageIndex) {
    // Eliminar la imagen del array
    selectedImagesArray = selectedImagesArray.filter(function (image) {
      return image.number !== imageIndex;
    });

    // Actualizar el Local Storage
    updateLocalStorage();

    // Actualizar el contenido del modal
    updateModalContent();
  }

  // Función para actualizar el contenido del modal
  function updateModalContent() {
    // Limpiar el contenido actual del modal
    selectedImagesContainer.innerHTML = "";

    // Crear elementos de imagen y botón para cada imagen almacenada
    selectedImagesArray.forEach(function (imageInfo) {
      var selectedImageElement = document.createElement("div");
      selectedImageElement.className = "selected-image";

      var imgElement = document.createElement("img");
      imgElement.src = imageInfo.path;
      imgElement.className = "d-block w-100 zoom-image";
      imgElement.alt = "Imagen " + imageInfo.number;

      // Agregar la imagen al contenedor de imágenes seleccionadas en el modal
      selectedImageElement.appendChild(imgElement);

      // Crear el botón de eliminar
      var deleteButton = document.createElement("button");
      deleteButton.innerHTML = "BORRAR";
      deleteButton.className = "btn btn-danger delete-button my-2";
      deleteButton.addEventListener("click", function () {
        deleteImage(imageInfo.number);
      });

      // Agregar el botón de eliminar al contenedor de imágenes seleccionadas en el modal
      selectedImageElement.appendChild(deleteButton);

      // Agregar el contenedor al modal
      selectedImagesContainer.appendChild(selectedImageElement);
    });
    //    // Activar medium-zoom en las imágenes
    //    mediumZoom('.zoomable');
  }

  // Iterar desde 1 hasta 29
  for (var i = 1; i <= 29; i++) {
    // Construir la ruta de la imagen
    // var rutaImagen = catalogoPath + i + ".png";
    var rutaImagen = catalogoPath + i + ".svg";

    // Crear el elemento del carousel
    var carouselItem = document.createElement("div");
    carouselItem.className = i === 1 ? "carousel-item active" : "carousel-item";

    // Crear la imagen dentro del elemento del carousel
    var imgElement = document.createElement("img");
    imgElement.src = rutaImagen;
    imgElement.className = "d-block w-100 clickable-image";
    imgElement.alt = "Imagen " + i;

    /****************************** */
    // Agregar un identificador único a cada imagen
    // imgElement.id = "zoomable-image-" + i;

    // var zoomImage = document.querySelector(".carousel-item.active");

    // // Aplicar el zoom a la imagen
    // if (zoomImage) {
    //   // Resto del código para el zoom...
    //   var zoomInButton = document.getElementById("zoom-in");
    //   var zoomOutButton = document.getElementById("zoom-out");

    //   var currentZoom = 100;

    //   zoomInButton.addEventListener("click", function () {
    //     currentZoom += 2;
    //     zoomImage.style.width = currentZoom + "%";
    //     console.log("mas");
    //   });

    //   zoomOutButton.addEventListener("click", function () {
    //     if(currentZoom > 100)
    //     currentZoom -= 2;
    //     zoomImage.style.width = currentZoom + "%";
    //     console.log("menos");
    //   });
    // }
    /****************************** */

    // Agregar la imagen al elemento del carousel
    carouselItem.appendChild(imgElement);

    // Crear el botón con un ícono de corazón
    var button = document.createElement("button");
    button.innerHTML = "Agregar a favoritos";
    button.className = "btn btn-primary favorito";

    // Agregar el índice como un atributo de datos al botón
    button.setAttribute("data-index", i);

    button.addEventListener("click", function (event) {
      // Obtener el número de la imagen desde el atributo de datos del botón
      var imageIndex = event.target.getAttribute("data-index");

      // Obtener la ruta de la imagen correspondiente
      var imagePath = catalogoPath + imageIndex + ".png";

      // Seleccionar la imagen específica por su identificador único

      // Crear el elemento de la imagen en el modal
      var selectedImageElement = document.createElement("div");
      selectedImageElement.className = "selected-image";

      var imgElement = document.createElement("img");
      imgElement.src = imagePath;
      imgElement.className = "d-block w-100 zoom-image";
      imgElement.alt = "Imagen " + imageIndex;

      // Agregar la imagen al contenedor de imágenes seleccionadas en el modal
      selectedImageElement.appendChild(imgElement);

      // Crear el botón de eliminar
      var deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Borrar";
      deleteButton.className = "btn btn-danger delete-button my-2";
      deleteButton.addEventListener("click", function () {
        deleteImage(imageIndex);
      });

      // Agregar el botón de eliminar al contenedor de imágenes seleccionadas en el modal
      selectedImageElement.appendChild(deleteButton);

      // Agregar el contenedor al modal
      selectedImagesContainer.appendChild(selectedImageElement);

      // Agregar la información de la imagen al array
      selectedImagesArray.push({
        number: imageIndex,
        path: imagePath,
      });

      // Actualizar el Local Storage
      updateLocalStorage();
    });

    // Agregar el botón al elemento del carousel
    carouselItem.appendChild(button);

    // Agregar el elemento del carousel al contenedor
    carouselInner.appendChild(carouselItem);
  }

  // Cargar las imágenes desde el Local Storage al abrir la página
  var storedImages = localStorage.getItem("selectedImages");
  if (storedImages) {
    selectedImagesArray = JSON.parse(storedImages);

    // Actualizar el contenido del modal
    updateModalContent();
  }
});
