<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="./images/logo.png" type="image/x-icon" />
    <meta name="keywords" content="Agencia viajes Vancouver Canadá mexicanos" />
    <meta
      name="description"
      content="Agencia de viajes en vancouver con diferented tipos de tours"
    />
    <title>Explore Beyond</title>
    <link rel="stylesheet" href="./normalize.css" />
    <link rel="stylesheet" href="style.css" />
    <!-- Icon -->
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
    />
  </head>

  <body>
    <a href="https://api.whatsapp.com/send?phone=523313264168&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20tours."
    class="float" target="_blank">
    <i class="fa fa-whatsapp my-float"></i>
</a>
    <main>
      <section id="dos">
        <div class="div-logo">
          <img
            class="logo"
            src="./images/logo.png"
            alt="logo de Explore Beyond"
          />
        </div>

        <div class="heading pb">
          <h1 class="title">
            Descubre Vancouver <br /><span class="subtitle"
              >de forma diferente</span
            >
          </h1>
        </div>

        <div class="section-tours pb">
          <div class="tours">
            <div class="item pb">
              <img src="./images/city.svg" alt="city" />
              <p>City Tours</p>
            </div>
            <div class="item pb">
              <img src="./images/forest.svg" alt="forest" />
              <p>
                North Shore <br />
                Tours
              </p>
            </div>
            <div class="item pb">
              <img src="./images/house.svg" alt="house" />
              <p>
                Whistler <br />
                Tours
              </p>
            </div>
            <div class="item">
              <img src="./images/tours.svg" alt="tours" />
              <p>
                Tours <br />
                Customizados
              </p>
            </div>
            <div class="item">
              <img src="./images/car.svg" alt="car" />
              <p>
                Servicios <br />
                de transporte
              </p>
            </div>
            <div class="item">
              <img src="./images/teleferico.svg" alt="teleferico" />
              <p>Sea to <br />Sky Tours</p>
            </div>
          </div>

          <form action="form.php" method="post">
            <h2 class="form-title">
              Quieres más <br />
              <span>información?</span>
            </h2>
            <p>Cónoce más sobre Explore Beyond</p>
            <input type="text" name="nombre" placeholder="NOMBRE" required />
            <input type="email" name="correo" placeholder="CORREO" required />
            <div class="select-div">
              <label for="select">tour</label>
              <select name="tour" id="select">
                <option value="">Selecciona un tour</option>
                <option value="City_Tours">City Tours</option>
                <option value="North_Shore_Tours">North Shore Tours</option>
                <option value="Whistler_Tours">Whistler Tours</option>
                <option value="Tours_Customizados">Tours Customizados</option>
                <option value="Servicios_de_transporte">
                  Servicios de transporte
                </option>
                <option value="Sea_to_Sky_Tours">Sea to Sky Tours</option>
              </select>
            </div>
            <input type="submit" value="Enviar" />
            <p id="mensaje-exito" style="display: none">
              Enviado correctamente
            </p>
          </form>
        </div>

        <div class="contact">
          <div>
            <img src="./images/mail.svg" alt="mail" />
            <p class="icons-text">explorebeyond@gmail.com</p>
          </div>
          <div>
            <img src="./images/insta.svg" alt="insta" />
            <p class="icons-text">@explorebeyoudtours</p>
          </div>
          <div>
            <img src="./images/face.svg" alt="face" />
            <p class="icons-text">Explore Beyond Tours</p>
          </div>
        </div>
      </section>
    </main>

    <script>
      // Obtener el parámetro de la URL
      const urlParams = new URLSearchParams(window.location.search);
      const successParam = urlParams.get("success");

      // Si el parámetro de éxito está presente, mostrar el mensaje
      if (successParam === "correo_enviado") {
        document.getElementById("mensaje-exito").style.display = "block";
      }
    </script>
  </body>
</html>
