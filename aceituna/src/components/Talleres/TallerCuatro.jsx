import React from "react";
import Navbar from "../Navbar";

const TallerCuatro = ({ isOpenTaller4, onCloseTallerCuatro }) => {
  if (!isOpenTaller4) return null;

  return (
    <>
      <div className="fixed inset-0 flex justify-center ">
        <div className="bg-[--gray] opacity-80 absolute inset-0"></div>
        <div
          className="bg-[--beige-clear]  monserrat 
                    text-[--brown]  z-10 overflow-y-auto w-full h-full"
        >
          <Navbar />

          <div className="font-bold  text-base px-6 py-6">
            <button
              className="mb-8 p-2 bg-[--brown] cursor-pointer
                            monserrat text-white rounded"
              onClick={onCloseTallerCuatro}
            >
              Volver
            </button>
            <div className="flex justify-center items-center  flex-col">
              <p className="p-6 text-6xl text-[--brown]">Aprender</p>

              <p className="text-pretty leading-loose">
                <span className="text-start text-xl "> PINTURA: </span> <br />{" "}
                <br />
                1. Viernes 12: PINTURA 16/19h00 en ACEITUNA, Rubens N. 5273,
                Zapopan. <br />
                2. Jueves 11: PINTURA 10/13h00 en ACEITUNA, Rubens N. 5273,
                Zapopan. <br />
                3. Jueves 18: PINTURA 10/13h00 en ACEITUNA, Rubens N. 5273,
                Zapopan.
                <br />
                4. Jueves 25: PINTURA 10/13h00 en ACEITUNA, Rubens N. 5273,
                Zapopan.
                <br />
                5. Viernes 26: PINTURA 16/19h00 en ACEITUNA, Rubens N. 5273,
                Zapopan.
                <br /> <br />
                <span className="text-start text-xl "> CATAS VINO: </span>{" "}
                <br /> <br />
                1. Miércoles 10: de 19/20h30 en Les Vins de Moliere 59A,  calle Gregorio Davila col. Americana   <br />
                2. Miércoles 17: de 19/20h30 en Les Vins de Moliere 59A,  calle Gregorio Davila col. Americana <br />
                3. Miércoles 24: de 19/20h30 en Les Vins de Moliere 59A,  calle Gregorio Davila col. Americana <br />
                4. Miércoles 31: de 19/20h30 en Les Vins de Moliere 59A,  calle Gregorio Davila col. Americana
                <br /> <br />
                <span className="text-start text-xl ">
                  {" "}
                  ESTILO PERSONAL PARA DAMAS :
                </span>{" "}
                <br /> <br />
                1. Sabado 27: de 12/14h00 en ACEITUNA, Rubens N. 5273, Zapopan.
                <br /> <br />
                <span className="text-start text-xl ">
                  {" "}
                  ESTILO PERSONAL PARA CABALLEROS:{" "}
                </span>{" "}
                <br /> <br />
                1. Lunes 29: 11/13h00 en ACEITUNA, Rubens N. 5273, Zapopan.
                <br /> <br />
                <span className="text-start text-xl ">
                  COMO ACOMODAR MI CASA SEGUN FENG SHUI
                </span>{" "}
                <br /> <br />
                1. Viernes 12: de 11/13h00 en ACEITUNA, Rubens N. 5273,
                Zapopan. <br />
                2. Viernes 26: de 11/13h00 en ACEITUNA, Rubens N. 5273,
                Zapopan.
                <br /> <br />
                <span className="text-start text-xl ">
                  DEFENSA PERSONAL :
                </span>{" "}
                <br /> <br />
                1. Lunes 15: de 16/18h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan
                de San Luis 1472, col. Mezquitan <br />
                2. Lunes 22: de 16/18h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan
                de San Luis 1472, col. Mezquitan <br />
                3. Lunes 29: de 16/18h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan
                de San Luis 1472, col. Mezquitan
                <br /> <br />
                <span className="text-start text-xl ">
                  FINANZAS PERSONALES:
                </span>{" "}
                <br /> <br />
                1. Miércoles 10: como manejar sus targetas de credito de manera
                inteligente de16/17h30 en ACEITUNA, Rubens N. 5273, Zapopan.{" "}
                <br />
                2. Miércoles 17: como manejar sus targetas de credito de manera
                inteligente de16/17h30 en ACEITUNA, Rubens N. 5273, Zapopan.{" "}
                <br />
                3. Miércoles 24: como manejar sus targetas de credito de manera
                inteligente de16/17h30 en ACEITUNA, Rubens N. 5273, Zapopan.{" "}
                <br />
                4. Miércoles 31: como manejar sus targetas de credito de manera
                inteligente de16/17h30 en ACEITUNA, Rubens N. 5273, Zapopan.
                <br /> <br />
                <span className="text-start text-xl ">
                  HISTORIA:
                </span> <br /> <br />
                1. Miércoles 10: el conflicto israeli/palestino desde una
                perspectiva histórica de 11/13h00 en ACEITUNA, Rubens N. 5273,
                Zapopan. <br />
                2. Domingo 14: el conflicto israeli/palestino desde una
                perspectiva histórica de 10/12h00 en ACEITUNA, Rubens N. 5273,
                Zapopan. <br />
                3. Lunes 22: el conflicto israeli/palestino desde una
                perspectiva histórica de 11/13h00 en ACEITUNA, Rubens N. 5273,
                Zapopan. <br />
                4. Miércoles 31: el conflicto israeli/palestino desde una
                perspectiva histórica de 11/13h00 en ACEITUNA, Rubens N. 5273,
                Zapopan.
                <br /> <br />
                <span className="text-start text-xl ">
                  HISTORIA DEL ARTE:
                </span>{" "}
                <br /> <br />
                1. Lunes 15: ¿Cómo comprender el arte moderno? De 11/13h00 en
                ACEITUNA, Rubens N. 5273, Zapopan. <br />
                2. Miércoles 24: ¿Cómo comprender el arte moderno? De 11/13h00
                en ACEITUNA, Rubens N. 5273, Zapopan.
              </p>
              <div className="flex  ">
                <a
                  href="https://api.whatsapp.com/send?phone=523313022587&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20talleres%20APRENDER."
                  className="text-center bg-[--brown] text-white p-4 mt-16 mb-16"
                  target="_blank"
                >
                  Quiero Inscribirme
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TallerCuatro;
