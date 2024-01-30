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
              <span className="text-start font-bold text-xl "> POWER:</span> <br />{" "}
              <br />
              <div className="w-full flex justify-around flex-wrap-reverse">
                <p className="text-pretty font-medium leading-loose">

                  1. Miércoles 10: de 9/11h00 <br />
                  2. Jueves 11: de 9/11h00.  <br />
                  3. Viernes 12: de 9/11h00. <br />
                  4. Lunes 15: de 9/11h00.  <br />
                  5. Martes 16: de 9/11h00.  <br />
                  6. Miércoles 17: de 9/11h00. <br />
                  7. Lunes 22: de 9/11h00.  <br />
                  8. Martes 23: de 9/11h00.  <br />
                  9. Miércoles 24: de 9/11h00. <br />
                  10.Viernes 26: de 9/11h00. <br />
                  11. Lunes 29: de 9/11h00.  <br />
                  12.Miércoles 31: de 9/11h00.</p>
                <img className="w-80 h-80 my-auto rounded-lg shadow-md object-cover" src="https://cdn.pixabay.com/photo/2015/01/09/11/22/fitness-594143_640.jpg" alt="" />

              </div>
              <p className="text-sm font-medium mt-6 mb-12">Dirección: ESSENTIAL ATHLETIC CLUB, Av. Plan
                de San Luis 1472, col. Mezquitan </p>

              <span className="text-start text-xl mb-12">EJERCICIOS FUNCIONALES:</span>
              <div className="w-full flex justify-around flex-wrap ">
                <img className="w-80 h-80 rounded-lg shadow-md object-cover my-auto" src="https://cdn.pixabay.com/photo/2017/03/13/20/02/tyre-push-2140997_1280.jpg" alt="" />
                <p className="text-pretty font-medium leading-loose ">


                  1. Miércoles 10: de 10/11h00  <br />
                  2. Jueves 11: de 10/11h00  <br />
                  3. Lunes 15: de 10/11h00 <br />
                  4. Martes 16: de 10/11h00  <br />
                  5. Lunes 22: de 10/11h00  <br />
                  6. Martes 23: de 10/11h00  <br />
                  7. Lunes 29: de 10/11h00 </p>

              </div>
              <p className="text-sm font-medium mt-6 mb-12">Dirección: ESSENTIAL ATHLETIC CLUB, Av. Plan
                de San Luis 1472, col. Mezquitan </p>

              <span className="text-start text-xl  mt-6 mb-12">
                DEFENSA PERSONAL:{" "}
              </span>{" "}
              <div className="w-full flex justify-around flex-wrap-reverse">
                <p className="text-pretty my-auto  font-medium leading-loose">
                  1. Lunes 15: de 16/18h00  <br />
                  2. Lunes 22: de 16/18h00  <br />
                  3. Lunes 29: de 16/18h00 </p>
                <img className="w-80 h-80 rounded-lg shadow-md object-cover my-auto" src="https://cdn.pixabay.com/photo/2016/02/11/07/03/shorinji-1193157_640.jpg" alt="" />
              </div>
              <p className="text-sm font-medium mt-6 mb-12">Dirección: ESSENTIAL ATHLETIC CLUB, Av. Plan
                de San Luis 1472, col. Mezquitan </p>

              <br /> <br />

                <span className="text-start text-xl ">YOGA:</span> <br /> <br />
              <div className="w-full flex justify-around flex-wrap-reverse">
              <img className="w-80 h-80 rounded-lg shadow-md object-cover my-auto" src="https://cdn.pixabay.com/photo/2019/09/19/14/37/yoga-4489430_1280.jpg" alt="" />
                <p className="text-pretty my-auto  font-medium leading-loose">
                  1. Miércoles 10 : de 11/12h00 <br />
                  2. Jueves 11 : de 11/12h00 <br />
                  3. Viernes 12 : de 11/12h00 <br />
                  4. Lunes 15 : de 11/12h00 <br />
                  5. Miércoles 17 : de 11/12h00 <br />
                  6. Lunes 22 : de 11/12h00 <br />
                  7. Miércoles 24 : de 11/12h00 <br />
                  8. Viernes 26 : de 11/12h00 <br />
                  9. Lunes 29 : de 11/12h00 <br />
                  10. Miércoles 31 : de 11/12h00 </p>
                  </div>
                  <p className="text-sm font-medium mt-6 mb-12">Dirección: ESSENTIAL ATHLETIC CLUB, Av. Plan
                de San Luis 1472, col. Mezquitan </p>
                  
                  <p>
                  <span className="text-start text-xl ">PILATES & BARRE BAJA INTENSIDAD:</span> <br /> <br />
                  muy pronto...
                </p>
             
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

export default TallerDos;
