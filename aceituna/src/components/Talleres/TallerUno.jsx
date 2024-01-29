import React from "react";
import Navbar from "../Navbar";
import peli1 from "../../assets/peliculas/vertigo.jpg"
import peli2 from "../../assets/peliculas/Double_Indemnity.jpg"

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

              <div className="flex justify-center flex-wrap gap-10 mb-10 mt-6">
                <img className="w-80 h-96 object-cover rounded-lg shadow-md" src={peli1} alt="" />
                <img className="w-80 h-96 object-cover rounded-lg shadow-md" src={peli2} alt="" />
                </div>

              <p className="text-pretty leading-loose font-medium">

                <span className="text-start font-bold text-xl ">CLUB DE CINE:</span> <br /> <br />
                1. Jueves 11: ciclo Hitchcock <b>"vertigo 1958"</b>  16/19h00   <br />
                2. Viernes 12: ciclo cine negro <b>"Doble indemnity 1944"</b> 18/21h00  <br />
                3. Jueves 18: ciclo Hitchcock <b>"vertigo 1958</b> " 16/19h00  <br />
                4. Domingo 21: ciclo cine negro <b>"Doble indemnity 1944"</b>  14/17h00  <br />
                5. Jueves 25: ciclo Hitchcock <b>"vertigo 1958"</b>  16/19h00
              </p>
              <p className="text-base font-medium mt-5">Dirección: ACEITUNA, Rubens N. 5273, Zapopan. </p>
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
