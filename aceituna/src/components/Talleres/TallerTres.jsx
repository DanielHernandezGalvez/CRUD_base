import React from "react";
import Navbar from "../Navbar";

const TallerTres = ({ isOpenTaller3, onCloseTallerTres }) => {
  if (!isOpenTaller3) return null;

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
              onClick={onCloseTallerTres}
            >
              Volver
            </button>
            <div className="flex justify-center items-center  flex-col">
              <p className="p-6 text-6xl text-[--brown]">Conocer</p>

              <span className="text-start text-xl mb-12">DESAROLLO Y BIEN ESTAR PERSONAL:</span>
              <div className="w-full flex justify-around flex-wrap-reverse">
                <img className="w-80 h-80 rounded-lg shadow-md object-cover my-auto" src="https://cdn.pixabay.com/photo/2019/09/19/14/37/yoga-4489430_1280.jpg" alt="" />
                <p className="text-pretty my-auto  font-medium leading-loose">
                  1. sabado 13 : Como reconciliarme con mi cuerpo 11/13H00.
                  <br />
                  2. Martes 16 : ¿Por qué y para que contactar mi niño interior?
                  11/13h00   <br />
                  3. Jueves 18 : ¿Cómo desarollar mi inteligencia emocional?
                  16/18h00. <br />
                  4. Sabado 20 : Sindrome del nido vacio.
                  <br />
                  5. Martes 23 : ¿Cómo re inventar mi vida? 11/13h00.
                  <br />
                  6. Sabado 27 : ¿Cómo reconciliarme con mi cuerpo? 11/13h00.
               </p>
              </div>
              <p className="text-sm font-medium mt-6 mb-12">Dirección: ACEITUNA, Rubens N. 5273, Zapopan. </p>

              <span className="text-start text-xl mb-12">TERTULIAS DE FILOSOFIA:</span>
              <div className="w-full flex justify-around flex-wrap-reverse">
                <p className="text-pretty my-auto  font-medium leading-loose">
                  <span className="text-start text-xl ">
                  </span> <br /> <br />
                  a partir de febrero
                  </p>
                <img className="w-80 h-80 rounded-lg shadow-md object-cover my-auto" src="https://cdn.pixabay.com/photo/2018/04/17/10/21/literature-3327172_1280.jpg" alt="" />
              </div>
              <p className="text-sm font-medium mt-6 mb-12">Dirección: ACEITUNA, Rubens N. 5273, Zapopan. </p>

              <div className="flex  ">
                <a
                  href="https://api.whatsapp.com/send?phone=523313022587&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20talleres%20SENTIR."
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

export default TallerTres;
