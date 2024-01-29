import  { useState } from 'react'
import mailRound from "../assets/icons/mail-round.png"
import whatsRound from "../assets/icons/whats-round.png";
import ubicacion from "../assets/icons/map-round.png";
import insta from "../assets/icons/instagram.png";
import facebook from "../assets/icons/facebook.png";

import React from 'react'

export default function Footer() {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    return (
        <>
            <section className="bg-[--beige] pb-16" id="contacto">
                <h4 className="text-4xl text-[--brown] text-center pt-16 pb-16">
                    CONTACTO
                </h4>
                <form
                    className="flex justify-center items-center gap-5 flex-wrap"
                    // action="/server/formulario.php"
                    // method="POST"
                >
                    <input
                        className="border-none w-[300px] text-gray-900 py-4 ps-5 monserrat text-sm"
                        type="text"
                        placeholder="NOMBRE COMPLETO"
                        name="nombre"
                        value={nombre} // Aquí se asigna el valor del estado "nombre"
                        onChange={(e) => setNombre(e.target.value)} // Manejador para actualizar el estado
                    />
                    <input
                        className="border-none w-[300px] text-gray-900 py-4 ps-5 monserrat text-sm"
                        type="email"
                        placeholder="CORREO"
                        name="correo"
                        value={correo} // Aquí se asigna el valor del estado "correo"
                        onChange={(e) => setCorreo(e.target.value)} // Manejador para actualizar el estado

                    />
                    <a
                        className="px-6 bg-[--brown] py-3 monserrat"
                        type="submit"
                        target="_blank"
                        href={`https://api.whatsapp.com/send?phone=523313022587&text=Hola%21%20Soy%20${nombre}%20mi%20correo%20es%20${correo}%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20por%20favor.`}
                    >CONTÁCTANOS</a>
                </form>

                <div className="flex justify-center gap-x-10 mt-16">
                    <a
                        className="transition hover:scale-110"
                        href="https://www.instagram.com/aceitunaexperience?fbclid=IwAR3c9t6cBUB4XIWyC-kTT8xa3Vo81tv8nbt2JJdmpz1qmFz34UizYX6eIeE"
                        target="_blank"
                    >
                        <img src={insta} alt="instagram" />
                    </a>
                    <a
                        className="transition hover:scale-110"
                        href="https://www.facebook.com/profile.php?id=61554323523242"
                        target="_blank"
                    >
                        <img src={facebook} alt="facebook" />
                    </a>
                </div>

                <div className="mt-10 flex justify-center mx-auto gap-y-5 items-center flex-col max-w-[500px]">
                    <div className="flex justify-center text-[--brown] monserrat font-bold">
                        <div className="flex flex-col text-[--brown] monserrat font-bold">
                            <img
                                src={mailRound}
                                width={35}
                                className="me-4 mb-4"
                                alt="correo"
                            />
                            <a
                                href="https://api.whatsapp.com/send?phone=523313022587&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20por%20favor."
                                target="_blank"
                            >
                                <img src={whatsRound} width={35} className="me-4" alt="whatsapp" />
                            </a>
                            <img
                                className="me-4 mt-4"
                                src={ubicacion}
                                alt="ubicacion"
                                width={35}
                            />
                        </div>

                        <div className="flex text-start justify-start text-base text-[--brown] pt-1.5 monserrat font-bold">
                            contacto@aceitunaexperience.com <br />
                            <br />
                            +52 33 1302 2587 <br />
                            <br />
                            Rubens 5273, colonia Real Vallarta, <br />
                            45020 Zapopan
                        </div>
                        <div className="flex justify-center items-center text-[--brown] monserrat font-bold"></div>
                    </div>
                </div>
            </section>
        </>
    )
}


