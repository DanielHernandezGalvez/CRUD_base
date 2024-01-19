import React, { useState } from "react";
import Navbar from "./Navbar";

const Inscripciones = ({ isOpenInscription, onCloseInscription }) => {
    if (!isOpenInscription) return null;

    return (
        <>
            <div className="fixed inset-0 flex justify-center ">
                <div className="bg-[--gray] opacity-80 absolute inset-0"></div>
                <div className="bg-[--beige-clear]  monserrat 
          text-[--brown]  z-10 overflow-y-auto w-full h-full">


                    <Navbar />
                    <div className="font-bold  text-base px-6 py-6">
                        <button
                            className="mb-8 p-2 bg-[--brown] cursor-pointer
                            monserrat text-white rounded"
                            onClick={onCloseInscription}>
                            Volver
                        </button>
                        <div className="flex justify-center items-center  flex-col">
                            <p className="text-center text-2xl mb-4 ">¿CÓMO FUNCIONA ACEITUNA?</p>

                            <p className="  text-overflow-ellipsis"
                            >
                                <span className="text-start text-xl ">1. TU INSCRIPCIÓN ES GRATIS  </span> <br /> <br />
                                <span>¿Cómo hacerlo?</span>
                                <br />
                                Entras en contacto con nosotros:<br />
                                1. Vía Whatsapp y nos mandas un mensaje al 33 1302 2587, y te apoyamos.<br />
                                2. Vía Instagram: <a className="text-[--gray] underline" href="https://instagram.com/aceitunaexperience/" target="_blank">Click aqui</a>
                                , nos mandas un mensaje y te apoyamos.<br />
                                3. Vía Facebook:<a className="text-[--gray] underline" href="https://www.facebook.com/profile.php?id=61554323523242&locale=es_LA" target="_blank">Click aqui</a>,
                                nos mandas un mensaje y te apoyamos.<br />
                                4. Vía nuestra página web: www.aceitunaexperience.com
                                en el menú, teclas “Contacto”, nos mandas un mensaje y te apoyamos.<br />
                                5. Mail: nos escribes a contacto@aceitunaexperience.com y te apoyamos.<br />
                                6. Nos puedes visitar, previa una cita concertada, a nuestra oficina en: Casa
                                Rubens, Rubens 5273, colonia Real Vallarta, 45020 Zapopan (Jalisco), muy
                                cerca del COSTCO de Rafael Sanzio.<br /> <br />
                                <span className="text-xl">2. PUEDES CONSULTAR EL CALENDARIO DE ACTIVIDADES ASÍ:</span><br /> <br />
                                1. En la página web.<br />
                                2. En nuestra cuenta Instagram & Facebook.<br />
                                3. Vía Whatsapp (33 1302 2587) y te mandamos el calendario de actividades.<br /> <br />
                                <span className="text-start text-xl">3. PARA RESERVAR O APUNTARTE A UNA ACTIVIDAD ES MUY FÁCIL:</span><br /> <br />
                                1. Mándanos un mensaje Whatsapp o nos marcas al 33 1302 2587 y te apoyamos.<br /><br />
                                <span className="text-start text-xl">4. CADA ACTIVIDAD TIENE UN COSTO:</span><br /><br />
                                1. Puedes consular los precios por actividad en nuestro calendario de actividades en:
                                página web: www.aceitunaexperience.com<br />
                                2. Instagram: <a className="text-[--gray] underline" href="https://instagram.com/aceitunaexperience/" target="_blank">Click aquí</a>.<br />
                                3. Facebook: <a className="text-[--gray] underline" href="https://facebook.com/profile.php?id=61554323523242&locale=es_LA" target="_blank">Click aquí</a>. <br />
                                2. Mándanos un mensaje Whatsapp o nos marcas al 33 1302 2587 y te apoyamos para el pago.<br />
                                3. Puedes pagar de varias maneras:<br />
                                · En efectivo directamente a la oficina de Aceituna, previa una cita concertada, en
                                Casa Rubens, Rubens 5273, colonia Real Vallarta, 45020 Zapopan (Jalisco), muy
                                cerca del COSTCO de Rafael Sanzio.<br />
                                · Con una transferencia bancaria o pago a tarjeta: nos mandas un mensaje via
                                Whatsapp (33 1302 2587) y te pasamos nuestros datos bancarios.<br /> <br />
                                <span className="text-start text-xl">5. HAY MEMBRESÍAS CON BENEFICIOS:</span><br /> <br />
                                1. Consulta nuestra página web www.aceitunaexperience.com o nuestras cuentas
                                Instagram & Facebook.<br />
                                2. ¡Aprovéchalo! Se te regresa hasta el 20% de tus compras de actividades.<br />
                                3. Mándanos un mensaje Whatsapp o nos marcas al 33 1302 2587 y te apoyamos para
                                hacer el pago.<br /> <br />
                                <span className="text-start text-xl">6. ¿DÓNDE SE HACEN LAS ACTIVIDADES?</span><br /> <br />
                                1. En las oficinas de Aceituna.<br />
                                2. En el jardín de las oficinas de Aceituna.<br />
                                3. En los locales de los Partners aliados de Aceituna.<br /> <br />
                                <span className="text-start text-xl">7. ¿MÁS PREGUNTAS?</span><br /> <br />
                                1. Mándanos un mensaje Whatsapp o nos marcas al 33 1302 2587 y te apoyamos con mucho gusto.
                            </p>
                    <div className="flex  ">
                        <a href="https://api.whatsapp.com/send?phone=523313022587&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20talleres." className="text-center bg-[--brown] text-white p-4 mt-6 mb-16" target="_blank">Quiero inscribirme</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Inscripciones;