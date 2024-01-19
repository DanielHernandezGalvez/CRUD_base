import React from "react";
import Navbar from "../Navbar";

const TallerUno = ({ isOpenTaller1, onCloseTallerUno }) => {
  if (!isOpenTaller1) return null;

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
              onClick={onCloseTallerUno}
            >
              Volver
            </button>
            <div className="flex justify-center items-center  flex-col">
            <p className="p-6 text-6xl text-[--brown]">Ver</p>

              <p className="text-pretty leading-loose">
                
                <span className="text-start text-xl ">CLUB DE CINE:</span> <br /> <br />
                1. Jueves 11: ciclo Hitchcock "vertigo 1958" 16/19h00 en ACEITUNA, Rubens N. 5273, Zapopan.  <br /> 
                2. Viernes 12: ciclo cine negro "Doble indemnity 1944" 18/21h00 en ACEITUNA, Rubens N. 5273, Zapopan. <br />
                3. Jueves 18: ciclo Hitchcock "vertigo 1958" 16/19h00 en ACEITUNA, Rubens N. 5273, Zapopan. <br />
                4. Domingo 21: ciclo cine negro "Doble indemnity 1944" 14/17h00 en ACEITUNA, Rubens N. 5273, Zapopan. <br />
                5. Jueves 25: ciclo Hitchcock "vertigo 1958" 16/19h00 en ACEITUNA, Rubens N. 5273, Zapopan. 
              </p>
              <div className="flex  ">
                <a
                  href="https://api.whatsapp.com/send?phone=523313022587&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20talleres%20VER."
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

export default TallerUno;
