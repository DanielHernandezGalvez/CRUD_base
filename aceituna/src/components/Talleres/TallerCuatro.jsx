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


              <span className="text-start text-xl mb-12">PINTURA:</span>
              <div className="w-full flex justify-around flex-wrap-reverse">
                <img className="w-80 h-80 rounded-lg shadow-md object-cover my-auto" src="https://cdn.pixabay.com/photo/2013/03/23/23/10/brush-96240_1280.jpg" alt="" />
                <p className="text-pretty my-auto  font-medium leading-loose">
                1. Viernes 12: PINTURA 16/19h00. <br />
                2. Jueves 11: PINTURA 10/13h00. <br />
                3. Jueves 18: PINTURA 10/13h00.
                <br />
                4. Jueves 25: PINTURA 10/13h00.
                <br />
                5. Viernes 26: PINTURA 16/19h00.
                </p>
              </div>
              <p className="text-sm font-medium mt-6 mb-12">Dirección: ACEITUNA, Rubens N. 5273, Zapopan. </p>



              <span className="text-start text-xl mb-12">CATAS VINO:</span>
              <div className="w-full flex justify-around flex-wrap-reverse">
                <p className="text-pretty my-auto  font-medium leading-loose">
                1. Miércoles 10: de 19/20h30    <br />
                2. Miércoles 17: de 19/20h30<br />
                3. Miércoles 24: de 19/20h30 <br />
                4. Miércoles 31: de 19/20h30
                </p>
                <img className="w-80 h-80 rounded-lg shadow-md object-cover my-auto"
                 src="https://cdn.pixabay.com/photo/2017/01/04/13/57/wine-1952051_640.jpg" alt="" />
              </div>
              <p className="text-sm font-medium mt-6 mb-12">Dirección: Les Vins de Moliere 59A,  calle Gregorio Davila col. Americana. </p>


              <span className="text-start text-xl mb-12">ESTILO PERSONAL PARA DAMAS:</span>
              <div className="w-full flex justify-around flex-wrap-reverse">
                <img className="w-80 h-80 rounded-lg shadow-md object-cover my-auto" 
                src="https://cdn.pixabay.com/photo/2016/06/11/12/15/females-1450050_640.jpg" alt="" />
                <p className="text-pretty my-auto  font-medium leading-loose">
                1. Sabado 27: de 12/14h00
                </p>
              </div>
              <p className="text-sm font-medium mt-6 mb-12">Dirección: ACEITUNA, Rubens N. 5273, Zapopan. </p>

              <span className="text-start text-xl mb-12"> ESTILO PERSONAL PARA CABALLEROS:</span>
              <div className="w-full flex justify-around flex-wrap-reverse">
                <p className="text-pretty my-auto  font-medium leading-loose">
                1. Lunes 29: 11/13h00
                </p>
                <img className="w-80 h-80 rounded-lg shadow-md object-cover my-auto" 
                src="https://cdn.pixabay.com/photo/2015/02/19/12/59/man-642063_640.jpg" alt="" />
              </div>
              <p className="text-sm font-medium mt-6 mb-12">Dirección: ACEITUNA, Rubens N. 5273, Zapopan. </p>

              <span className="text-start text-xl mb-12"> COMO ACOMODAR MI CASA SEGUN FENG SHUI:</span>
              <div className="w-full flex justify-around flex-wrap-reverse">
                <img className="w-80 h-80 rounded-lg shadow-md object-cover my-auto" 
                src="https://cdn.pixabay.com/photo/2015/01/25/18/01/buddha-611566_640.jpg" alt="" />
                <p className="text-pretty my-auto  font-medium leading-loose">
                1. Viernes 12: de 11/13h00 en ACEITUNA, Rubens N. 5273,
                Zapopan. <br />
                2. Viernes 26: de 11/13h00 en ACEITUNA, Rubens N. 5273,
                Zapopan.
                </p>
              </div>
              <p className="text-sm font-medium mt-6 mb-12">Dirección: ACEITUNA, Rubens N. 5273, Zapopan. </p>


              <span className="text-start text-xl mb-12">  DEFENSA PERSONAL:</span>
              <div className="w-full flex justify-around flex-wrap-reverse">
                <p className="text-pretty my-auto  font-medium leading-loose">
                1. Lunes 15: de 16/18h00.  <br />
                2. Lunes 22: de 16/18h00. <br />
                3. Lunes 29: de 16/18h00.
                </p>
                <img className="w-80 h-80 rounded-lg shadow-md object-cover my-auto" 
                src="https://cdn.pixabay.com/photo/2016/02/11/07/03/shorinji-1193157_640.jpg" alt="" />
              </div>
              <p className="text-sm font-medium mt-6 mb-12">Dirección: ESSENTIAL ATHLETIC CLUB, Av. Plan de San Luis 1472, col. Mezquitan. </p>

              <span className="text-start text-xl mb-12">FINANZAS PERSONALES:</span>
              <div className="w-full flex justify-around flex-wrap-reverse">
                <p className="text-pretty my-auto  font-medium leading-loose">
                1. Miércoles 10: como manejar sus targetas de credito de manera 
                inteligente de16/17h30.
                <br />
                2. Miércoles 17: como manejar sus targetas de credito de manera
                inteligente de 16/17h30.
                <br />
                3. Miércoles 24: como manejar sus targetas de credito de manera
                inteligente de16/17h30.{" "}
                <br />
                4. Miércoles 31: como manejar sus targetas de credito de manera
                inteligente de16/17h30.
                </p>
                <img className="w-80 h-80 rounded-lg shadow-md object-cover my-auto" 
                src="https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_640.jpg" alt="" />
              </div>
              <p className="text-sm font-medium mt-6 mb-12">Dirección: ACEITUNA, Rubens N. 5273, Zapopan. </p>


              <span className="text-start text-xl mb-12">HISTORIA:</span>
              <div className="w-full flex justify-around flex-wrap-reverse">
                <p className="text-pretty my-auto  font-medium leading-loose">
                1. Miércoles 10: el conflicto israeli/palestino desde una
                perspectiva histórica de 11/13h00. <br />
                2. Domingo 14: el conflicto israeli/palestino desde una
                perspectiva histórica de 10/12h00. <br />
                3. Lunes 22: el conflicto israeli/palestino desde una
                perspectiva histórica de 11/13h00. <br />
                4. Miércoles 31: el conflicto israeli/palestino desde una
                perspectiva histórica de 11/13h00.
                </p>
                <img className="w-80 h-80 rounded-lg shadow-md object-cover my-auto" 
                src="https://cdn.pixabay.com/photo/2017/08/07/19/07/books-2606859_640.jpg" alt="" />
              </div>
              <p className="text-sm font-medium mt-6 mb-12">Dirección: ACEITUNA, Rubens N. 5273, Zapopan. </p>


              <span className="text-start text-xl mb-12">HISTORIA DEL ARTE:</span>
              <div className="w-full flex justify-around flex-wrap-reverse">
                <p className="text-pretty my-auto  font-medium leading-loose">
                1. Lunes 15: ¿Cómo comprender el arte moderno? De 11/13h00. <br />
                2. Miércoles 24: ¿Cómo comprender el arte moderno? De 11/13h00.
                </p>
                <img className="w-80 h-80 rounded-lg shadow-md object-cover my-auto" 
                src="https://cdn.pixabay.com/photo/2016/03/06/09/27/france-1239927_640.jpg" alt="" />
              </div>
              <p className="text-sm font-medium mt-6 mb-12">Dirección: ACEITUNA, Rubens N. 5273, Zapopan. </p>


              <p className="text-pretty leading-loose">
  
      
               
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
