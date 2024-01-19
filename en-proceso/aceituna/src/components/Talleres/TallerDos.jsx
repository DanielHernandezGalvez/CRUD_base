import React from "react";
import Navbar from "../Navbar";

const TallerDos = ({ isOpenTaller2, onCloseTallerDos }) => {
  if (!isOpenTaller2) return null;

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
              onClick={onCloseTallerDos}
            >
              Volver
            </button>
            <div className="flex justify-center items-center  flex-col">
              <p className="p-6 text-6xl text-[--brown]">Sentir</p>

              <p className="text-pretty leading-loose">
                <span className="text-start text-xl "> POWER:</span> <br />{" "}
                <br />
                1. Miércoles 10: de 9/11h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan
                de San Luis 1472, col. Mezquitan <br />
                2. Jueves 11: de 9/11h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan de
                San Luis 1472, col. Mezquitan <br />
                3. Viernes 12: de 9/11h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan
                de San Luis 1472, col. Mezquitan <br />
                4. Lunes 15: de 9/11h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan de
                San Luis 1472, col. Mezquitan <br />
                5. Martes 16: de 9/11h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan de
                San Luis 1472, col. Mezquitan <br />
                6. Miércoles 17: de 9/11h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan
                de San Luis 1472, col. Mezquitan <br />
                7. Lunes 22: de 9/11h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan de
                San Luis 1472, col. Mezquitan <br />
                8. Martes 23: de 9/11h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan de
                San Luis 1472, col. Mezquitan <br />
                9. Miércoles 24: de 9/11h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan
                de San Luis 1472, col. Mezquitan <br />
                10. Viernes 26: de 9/11h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan
                de San Luis 1472, col. Mezquitan <br />
                11. Lunes 29: de 9/11h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan de
                San Luis 1472, col. Mezquitan <br />
                12. Miércoles 31: de 9/11h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan
                de San Luis 1472, col. Mezquitan <br /> <br />
                <span className="text-start text-xl ">
                  {" "}
                  EJERCICIOS FUNCIONALES:
                </span>{" "}
                <br></br>
                <br /> 1. Miércoles 10: de 10/11h00 en ESSENTIAL ATHLETIC CLUB,
                Av. Plan de San Luis 1472, col. Mezquitan <br />
                2. Jueves 11: de 10/11h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan
                de San Luis 1472, col. Mezquitan <br />
                3. Lunes 15: de 10/11h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan de
                San Luis 1472, col. Mezquitan <br />
                4. Martes 16: de 10/11h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan
                de San Luis 1472, col. Mezquitan <br />
                5. Lunes 22: de 10/11h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan de
                San Luis 1472, col. Mezquitan <br />
                6. Martes 23: de 10/11h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan
                de San Luis 1472, col. Mezquitan <br />
                7. Lunes 29: de 10/11h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan de
                San Luis 1472, col. Mezquitan
                <br /> <br />
                <span className="text-start text-xl ">
                  DEFENSA PERSONAL:{" "}
                </span>{" "}
                <br /> <br />
                1. Lunes 15: de 16/18h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan de
                San Luis 1472, col. Mezquitan <br />
                2. Lunes 22: de 16/18h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan de
                San Luis 1472, col. Mezquitan <br />
                3. Lunes 29: de 16/18h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan de
                San Luis 1472, col. Mezquitan
                <br /> <br />
                <span className="text-start text-xl ">YOGA:</span> <br /> <br />
                1. Miércoles 10: de 11/12h00 en ESSENTIAL ATHLETIC CLUB, Av.
                Plan de San Luis 1472, col. Mezquitan <br />
                2. Jueves 11: de 11/12h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan
                de San Luis 1472, col. Mezquitan <br />
                3. Viernes 12: de 11/12h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan
                de San Luis 1472, col. Mezquitan <br />
                4. Lunes 15: de 11/12h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan
                de San Luis 1472, col. Mezquitan <br />
                5. Miércoles 17: de 11/12h00 en ESSENTIAL ATHLETIC CLUB, Av.
                Plan de San Luis 1472, col. Mezquitan <br />
                6. Lunes 22: de 11/12h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan
                de San Luis 1472, col. Mezquitan <br />
                7. Miércoles 24: de 11/12h00 en ESSENTIAL ATHLETIC CLUB, Av.
                Plan de San Luis 1472, col. Mezquitan <br />
                8. Viernes 26: de 11/12h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan
                de San Luis 1472, col. Mezquitan <br />
                9. Lunes 29: de 11/12h00 en ESSENTIAL ATHLETIC CLUB, Av. Plan
                de San Luis 1472, col. Mezquitan <br />
                10. Miércoles 31: de 11/12h00 en ESSENTIAL ATHLETIC CLUB, Av.
                Plan de San Luis 1472, col. Mezquitan <br /> <br />
                <span className="text-start text-xl ">PILATES & BARRE BAJA INTENSIDAD:</span> <br /> <br />
                 Muy pronto...
              </p>
              <div className="flex  ">
                <a
                  href="https://api.whatsapp.com/send?phone=523313022587&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20talleres%20SENTIR."
                  className="text-center bg-[--brown] text-white p-4 mt-16 mb-16"
                  target="_blank"
                >
                  Quiero inscribirme
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TallerDos;
