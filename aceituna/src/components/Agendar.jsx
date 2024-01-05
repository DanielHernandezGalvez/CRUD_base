import React, { useState, useEffect } from "react";
import calendarioActividades from "./enero.js";

const Agendar = () => {
    const [fechaSeleccionada, setFechaSeleccionada] = useState("");
    const [tallerSeleccionado, setTallerSeleccionado] = useState("");
    const [horarioSeleccionado, setHorarioSeleccionado] = useState("");
    const [opcionesHorario, setOpcionesHorario] = useState([]);

    useEffect(() => {
        // Actualizar las opciones del select de taller
        if (fechaSeleccionada) {
            const talleres = calendarioActividades.enero2024[fechaSeleccionada];
            if (talleres) {
                const opcionesTaller = Object.keys(talleres).map((tipo) => ({
                    value: tipo,
                    label: tipo,
                }));
                setTallerSeleccionado("");
                setHorarioSeleccionado("");
                // Utilizar setOpcionesHorario para almacenar las opciones de taller
                setOpcionesHorario(opcionesTaller);
            } else {
                // Si no hay talleres para la fecha seleccionada, reiniciar las opciones de taller
                setTallerSeleccionado("");
                setHorarioSeleccionado("");
                setOpcionesHorario([]);
            }
        }
    }, [fechaSeleccionada]);

    useEffect(() => {
        // Actualizar las opciones del select de horario
        if (fechaSeleccionada && tallerSeleccionado) {
            const horarios =
                calendarioActividades.enero2024[fechaSeleccionada][tallerSeleccionado];
            if (horarios) {
                const opcionesHorario = horarios.map((horario) => ({
                    value: horario.horario,
                    label: horario.horario,
                }));
                setHorarioSeleccionado("");
                setOpcionesHorario(opcionesHorario);
            }
        }
    }, [tallerSeleccionado]);

    const formatHorario = (horario) => {
        const [inicio, fin] = horario.split("-");
        return `${formatHora(inicio)} - ${formatHora(fin)}`;
    };

    const formatHora = (hora) => {
        const [hh, mm] = hora.split(":");
        const hora12 = hh > 12 ? hh - 12 : hh;
        const ampm = hh >= 12 ? "PM" : "AM";
        return `${hora12}:${mm} ${ampm}`;
    };

    const handleFechaSeleccionada = (fecha) => {
        setFechaSeleccionada(fecha);
    };

    const handleTallerSeleccionado = (taller) => {
        setTallerSeleccionado(taller);
    };

    const handleHorarioSeleccionado = (horario) => {
        setHorarioSeleccionado(horario);
    };

    const handleEnviarWhatsApp = () => {
        const mensaje = `Hola, me interesa el taller ${tallerSeleccionado} del ${horarioSeleccionado} el día ${fechaSeleccionada}`;
        console.log(mensaje);
    };

    return (
        <>
    <div className="w-[50vw]">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="text-center bg-gray-400">Lun</th>
                        <th className="text-center">Mar</th>
                        <th className="text-center">Mie</th>
                        <th className="text-center">Jue</th>
                        <th className="text-center">Vie</th>
                        <th className="text-center">Sab</th>
                        <th className="text-center bg-gray-400">Dom</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-2 border-black text-center">1</td>
                        <td className="border-2 border-black text-center">2</td>
                        <td className="border-2 border-black text-center">3</td>
                        <td className="border-2 border-black text-center">4</td>
                        <td className="border-2 border-black text-center">5</td>
                        <td className="border-2 border-black text-center">6</td>
                        <td className="border-2 border-black text-center">7</td>
                    </tr>
                    <tr>
                        <td className="border-2 border-black text-center">8</td>
                        <td className="border-2 border-black text-center">9</td>
                        <td className="border-2 border-black text-center">10</td>
                        <td className="border-2 border-black text-center">11</td>
                        <td className="border-2 border-black text-center">12</td>
                        <td className="border-2 border-black text-center">13</td>
                        <td className="border-2 border-black text-center">14</td>
                    </tr>
                    <tr>
                        <td className="border-2 border-black text-center">15</td>
                        <td className="border-2 border-black text-center">16</td>
                        <td className="border-2 border-black text-center">17</td>
                        <td className="border-2 border-black text-center">18</td>
                        <td className="border-2 border-black text-center">19</td>
                        <td className="border-2 border-black text-center">20</td>
                        <td className="border-2 border-black text-center">21</td>
                    </tr>
                    <tr>
                        <td className="border-2 border-black text-center">22</td>
                        <td className="border-2 border-black text-center">23</td>
                        <td className="border-2 border-black text-center">24</td>
                        <td className="border-2 border-black text-center">25</td>
                        <td className="border-2 border-black text-center">26</td>
                        <td className="border-2 border-black text-center">27</td>
                        <td className="border-2 border-black text-center">28</td>
                    </tr>
                    <tr>
                        <td className="border-2 border-black text-center">29</td>
                        <td className="border-2 border-black text-center">30</td>
                        <td className="border-2 border-black text-center">31</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div>




                <label htmlFor="fecha">Fecha</label>
                <input
                    type="date"
                    id="fecha"
                    value={fechaSeleccionada}
                    onChange={(e) => handleFechaSeleccionada(e.target.value)}
                    NameName="text-gray-500"
                />

                <label htmlFor="taller">Taller</label>
                <select
                    NameName="text-gray-500"
                    id="taller"
                    onChange={(e) => handleTallerSeleccionado(e.target.value)}
                >
                    <option value="">Selecciona un taller</option>
                    {opcionesHorario.map((opcion) => (
                        <option key={opcion.value} value={opcion.value}>
                            {opcion.label}
                        </option>
                    ))}
                </select>

                <label htmlFor="horario">Horario</label>
                <select
                    NameName="text-gray-500"
                    id="horario"
                    onChange={(e) => handleHorarioSeleccionado(e.target.value)}
                >
                    <option value="">Selecciona un horario</option>
                    {opcionesHorario.map((opcion) => (
                        <option key={opcion.value} value={opcion.value}>
                            {formatHorario(opcion.label)}
                        </option>
                    ))}
                </select>

                <button onClick={handleEnviarWhatsApp}>Enviar</button>
            </div>
        </>
    );
};

export default Agendar;
