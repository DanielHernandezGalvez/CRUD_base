import viteLogo from "/vite.svg";
import { Children, useState } from "react";
import "./App.css";
import Calendario from "./components/calendar/calendario";
import Navbar from "./components/Navbar";
import Taller from "./components/Taller";
import TallerLeft from "./components/TallerLeft";
import Carousel from "./components/Carousel";
import inscripcion from "./assets/images/inscription.png";
import leerMas from "./assets/images/leer-mas.png";
import comoFunciona from "./assets/images/imagenes-08.png";
import imagenes9 from "./assets/images/imagenes-09.png";
import imagenes10 from "./assets/images/imagenes-10.png";
import imagenes11 from "./assets/images/imagenes-11.png";
import imagenes12 from "./assets/images/imagenes-12.png";
import silver from "./assets/images/silver.png";
import gold from "./assets/images/gold.png";
import vip from "./assets/images/vip.png";
import fundador from "./assets/images/fundador.png";
import fundadora from "./assets/images/fundadora.png";

import terminos from "./assets/pdf/terminos-de-uso.pdf";
import privacidad from "./assets/pdf/aviso-de-privacidad.pdf";
import politicas from "./assets/pdf/politicas-de-cancelacion.pdf";
import Modal from "./components/Modal";
import Inscripciones from "./components/Inscripciones";
import TallerUno from "./components/Talleres/TallerUno";
import TallerDos from "./components/Talleres/TallerDos";
import TallerTres from "./components/Talleres/TallerTres";
import TallerCuatro from "./components/Talleres/TallerCuatro";
import Febrero from "./components/calendar/Febrero/Febrero";
import Footer from "./components/Footer";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  // const [modalImage, setModalImage] = useState("")
  const [isOpenInscription, setIsOpenInscription] = useState(false);
  const [isOpenTaller1, setIsOpenTaller1] = useState(false);
  const [isOpenTaller2, setIsOpenTaller2] = useState(false);
  const [isOpenTaller3, setIsOpenTaller3] = useState(false);
  const [isOpenTaller4, setIsOpenTaller4] = useState(false);


  const enviar = () => {
    // Enviar datos del formulario al servidor PHP
    fetch("/server/formulario.php", {
      method: "POST",
      body: JSON.stringify({
        nombre,
        correo,
      }),
    });
  };

  // seccion de talleres
  const handleOpenTallerUno = () => {
    setIsOpenTaller1(true);
    console.log("tallerUno");
  };
  const handleCloseTallerUno = () => {
    setIsOpenTaller1(false);
  };

  const handleOpenTallerDos = () => {
    setIsOpenTaller2(true);
    console.log("tallerDos");
  };
  const handleCloseTallerDos = () => {
    setIsOpenTaller2(false);
  };

  const handleOpenTallerTres = () => {
    setIsOpenTaller3(true);
    console.log("tallerTres");
  };
  const handleCloseTallerTres = () => {
    setIsOpenTaller3(false);
  };

  const handleOpenTallerCuatro = () => {
    setIsOpenTaller4(true);
    console.log("tallerTres");
  };
  const handleCloseTallerCuatro = () => {
    setIsOpenTaller4(false);
  };
  // seccion de talleres

  const handleOpenInscription = () => {
    setIsOpenInscription(true);
  };

  const handleCloseInscription = () => {
    setIsOpenInscription(false);
  };

  const openModal = (content) => {
    setModalContent(content);
    // setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const date = new Date();
  const month = date.getMonth() + 1;  // Ten en cuenta que los meses en JavaScript van de 0 a 11
  const year = date.getFullYear();
  const monthName = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ][month - 1];

  const today = new Date();


  // Verifica si es febrero de 2024
  // const esFebrero2024 = year === 2024 && month === 2;

  return (
    <>
      <Navbar />
      <a
        href="https://api.whatsapp.com/send?phone=523313022587&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20talleres%20."
        className="float"
        target="_blank"
      >
        <i className="fa fa-whatsapp my-float"></i>
      </a>
      <main className="bg-[--yellow]">
        <section className="hero">
          <div id="main-hero" className="w-50 bg-beige-1 text-center pt-12 pb-8 lg:px-16 relative top-60  lg:max-w-[85vw] sm:max-w-[95vw] mx-auto">
            <span className="bg-[--beige] px-16 py-2 lg:text-3xl sm:text-1xl text-[--gray] monserrat">
              ACEITUNA
            </span>
            <p className="text-[--brown] lg:text-xl   mt-10 px-4 principal">
              Somos una plataforma dedicada a elevar la experiencia de los
              adultos con base a actividades de diferentes intereses y así
              empoderar su vida y hacer una comunidad de personas afines a sus
              intereses.
            </p>
            <br />
            <p className="text-[--gray] lg:text-xl pb-5 px-4 principal">
              “Nunca es tarde para salir de su rutina, se puede vivir una
              segunda juventud, los hijos se van y estamos libres de ataduras lo
              cual nos permite vivir de nuevo experiencias enriquecedoras.”{" "}
              <br />
              Jean-Christophe Jaunait
            </p>
          </div>
        </section>
        {/* <section className="hero1"></section> */}

        <section className="w-full bg-[--beige-clear] p-10" id="aceituna">
          <div className="mx-auto pb-5">
            <h2 className="text-[--brown] text-4xl text-center">
              BENEFICIOS DE ESTAR EN ACEITUNA
            </h2>
            <div className="flex justify-center gap-10 flex-wrap mt-10" id="boxes">
              
              <div
                className="flex justify-center items-center text-3xl cursor-pointer"
                onClick={() =>
                  openModal(

                      "Con Aceituna, descubrirás que al participar en diversas actividades, ya sean físicas, artísticas, intelectuales, de bien estar, ampliarás tus horizontes y fortalecerás tu conocimiento. Cada experiencia es una oportunidad para aprender y empoderarte, mostrándote que el aprendizaje va más allá de las aulas, se encuentra en cada acción que emprendes.",
                    )
                }
              >
                Conocimiento
              </div>
              <div
                className="flex justify-center items-center text-3xl cursor-pointer"
                onClick={() =>
                  openModal(
                    "Unete a nuestras emocionantes actividades! Participar te brinda la oportunidad de formar parte de una vibrante comunidad, Aceituna; ampliar tu circulo social y establecer conexiones significativas. Descubre nuevas amistades, comparte experiencias y enriquece tu vida siendo parte activa de nuestro grupo. Te esperamos para crear juntos momentos inolvidables !"
                  )
                }
              >
                Comunidad
              </div>
              <div
                className="flex justify-center items-center text-3xl cursor-pointer"
                onClick={() =>
                  openModal(
                    "Formar parte de nuestra comunidad brinda la oportunidad de compartir actividades y vivencias enriquecedoras. Al colaborar y participar, creamos un tejido social que no solo fortalece el bien estar colectivo, sino que también contribuye a nuestro propio crecimiento personal. Al sumergirnos en experiencias compartidas, encontramos satisfacción y realización, construyendo un camino hacia un bien estar más completo y significativo."
                  )
                }
              >
                Bienestar
              </div>
            </div>
          </div>
          <Modal isOpen={modalOpen} onClose={closeModal}>
            {modalContent}
          </Modal>
        </section>

        <div>
          <section className="flex justify-center py-20">
            <div className="cursor-pointer" onClick={handleOpenInscription}>
              <img src={inscripcion} className="w-[500px]" alt="" />
            </div>
          </section>
          {isOpenInscription && (
            <Inscripciones
              isOpenInscription={isOpenInscription}
              onCloseInscription={handleCloseInscription}
            />
          )}
        </div>

        <section className="flex justify-between bg-[--beige-clear] flex-wrap">
          <div className="py-20 ps-10">
            <span className="bg-[--beige] text-[--brown] monserrat font-medium lg:text-4xl md:text-2xl   p-4">
              ¿Cómo funciona?
            </span>
            <p className="mt-10 mb-10 text-[--brown] lg:text-xl md:text-base">
              Tenemos varías formas por las cuales pueden contactarnos y te{" "}
              <br />
              apoyaremos desde la que sea de tu elección, conócelas <br /> más
              adelante...
            </p>
            <a className="mt-10 cursor-pointer" onClick={handleOpenInscription}>
              <img src={leerMas} className="w-[20vw] leer-mas " alt="" />
            </a>
          </div>
          <div className="">
            <img
              src={comoFunciona}
              className="lg:w-[40vw] lg:h-[60vh] sm:w-[80vw] sm:h-[40vh] object-cover"
              alt=""
            />
          </div>
        </section>

        <section id="talleres" className="bg-[--beige] pb-20">
          <h2 className="text-[--brown] lg:text-5xl  text-center pt-16">
            TALLERES QUE OFRECEMOS
          </h2>
          <p className="text-[--brown] monserrat text-center font-medium mb-10 lg:text-2xl ">
            Consulta el calendario de actividades
          </p>

          <button onClick={handleOpenTallerUno}>
            <Taller
              imageSrc={imagenes9}
              title="Ver"
              textItems={["Club de cine"]}
            />
          </button>
          {isOpenTaller1 && (
            <TallerUno
              isOpenTaller1={isOpenTaller1}
              onCloseTallerUno={handleCloseTallerUno}
            />
          )}

          <button onClick={handleOpenTallerDos}>
            <TallerLeft
              title="Sentir"
              imageSrc={imagenes10}
              textItems={[
                "Pilates & barre baja intensidad",
                "Power",
                "Ejercicios Funcionales",
                "Defensa personal",
                "Yoga",
              ]}
            />
          </button>
          {isOpenTaller2 && (
            <TallerDos
              isOpenTaller2={isOpenTaller2}
              onCloseTallerDos={handleCloseTallerDos}
            />
          )}

          <button onClick={handleOpenTallerTres}>
            <Taller
              imageSrc={imagenes11}
              title="Conocer"
              textItems={[
                "Tertulias de filosofia",
                "Desarrollo & bien estar personal",
              ]}
            />
          </button>
          {isOpenTaller3 && (
            <TallerTres
              isOpenTaller3={isOpenTaller3}
              onCloseTallerTres={handleCloseTallerTres}
            />
          )}

          <button onClick={handleOpenTallerCuatro}>
            <TallerLeft
              title="Aprender"
              imageSrc={imagenes12}
              textItems={[
                "Pintura",
                "Catas de vino",
                "Estilo personal para damas & caballeros",
                "Feng shui",
                "Defensa personal",
                "Finanzas personales",
                "Historia",
                "Historia del arte",
              ]}
            />
          </button>
          {isOpenTaller4 && (
            <TallerCuatro
              isOpenTaller4={isOpenTaller4}
              onCloseTallerCuatro={handleCloseTallerCuatro}
            />
          )}
        </section>

        <section className="pb-20">
          <h2
            className="text-4xl text-[--brown] text-center pt-16"
            id="suscripiones"
          >
            SUSCRIPCIONES
          </h2>
          <div className="lg:flex justify-center flex-wrap gap-20 mt-10">
            <div className="flex justify-content flex-col">
              <img src={silver} className="lg:w-[40vw] m-auto h-auto" alt="" />
              <a
                href="#contacto"
                className="text-center underline text-[--brown] my-6 pb-6 cursos-pointer"
              >
                Suscribirse
              </a>
            </div>
            <div className="flex justify-content flex-col">
              <img src={gold} className="lg:w-[40vw] m-auto  h-auto" alt="" />
              <a
                href="#contacto"
                className="text-center underline text-[--brown] my-6 pb-6 cursos-pointer"
              >
                Suscribirse
              </a>
            </div>
            <div className="flex justify-content flex-col">
              <img src={vip} className="lg:w-[40vw] m-auto  h-auto" alt="" />
              <a
                href="#contacto"
                className="text-center underline text-[--brown] my-6 pb-6 cursos-pointer"
              >
                Suscribirse
              </a>
            </div>
          </div>
        </section>

        <section className="bg-fundadores pb-16">
          <h2 className="text-4xl text-[--brown] text-center pt-16 pb-16">
            FUNDADORES
          </h2>
          <div className="lg:flex justify-around items-center h-full flex-wrap">
            <img src={fundador} className="lg:w-[30vw] m-auto my-12" alt="" />
            <img src={fundadora} className="lg:w-[30vw] m-auto my-12" alt="" />
          </div>
        </section>

        <span id="galeria"></span>
        <Carousel />

        <section className="bg-[--beige] pb-16" id="calendario">
          <h4 className="text-4xl text-[--brown] text-center pt-16 pb-16">
            CALENDARIO DE TALLERES
          </h4>
          <h3 className="text-3xl text-[--brown] text-center ">
            {monthName}/{year}

          </h3>

          <Calendario />
          {/* <Febrero /> */}
        </section>

   

        <div className="w-full h-16"></div>

       <Footer />

        <footer className="text-center flex flex-col monserrat text-base gap-y-3 text-[--brown] font-medium py-10">
          <a href={terminos} target="_blank">
            TÉRMINOS DE USO
          </a>
          <a href={privacidad} target="_blank">
            AVISO DE PRIVACIDAD
          </a>
          <a href={politicas} target="_blank">
            POLÍTICAS DE CANCELACIÓN
          </a>
        </footer>
      </main>
    </>
  );
}

export default App;
