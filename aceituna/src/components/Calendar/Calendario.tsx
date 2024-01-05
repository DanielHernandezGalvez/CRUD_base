// calendario.tsx
import React, { useState } from 'react';

interface Evento {
  evento?: string;
  fecha?: string;
  horario?: string;
  lugar?: string;
  pelicula?: string;
  tema?: string;
}

interface CalendarioProps {
  eventos: { [categoria: string]: Evento[] };
}

const Calendario: React.FC<CalendarioProps> = ({ eventos }) => {
  const [diaSeleccionado, setDiaSeleccionado] = useState<string | null>(null);
  const [tallerSeleccionado, setTallerSeleccionado] = useState<string | null>(null);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState<string | null>(null);

  const diasConEventos = Object.keys(eventos);

  const handleDiaClick = (dia: string) => {
    setDiaSeleccionado(dia);
    setTallerSeleccionado(null);
    setHorarioSeleccionado(null);
  };

  const handleTallerChange = (taller: string) => {
    setTallerSeleccionado(taller);
    setHorarioSeleccionado(null);
  };

  const handleHorarioChange = (horario: string) => {
    setHorarioSeleccionado(horario);
  };

  const handleEnviarWhatsApp = () => {
    const mensaje = `Hola, me interesa ${tallerSeleccionado} en el horario ${horarioSeleccionado}`;
    window.open(`https://wa.me/3312345678?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  return (
    <div>
      <h2>Calendario</h2>
      <table className="table-auto border">
      <thead>
        <tr className="bg-gray-200">
          <th className="border">Domingo</th>
          <th className="border">Lunes</th>
          <th className="border">Martes</th>
          <th className="border">Miércoles</th>
          <th className="border">Jueves</th>
          <th className="border">Viernes</th>
          <th className="border">Sábado</th>
        </tr>
      </thead>
        <tbody>
          {diasConEventos.map((dia) => (
            <td
              key={dia}
              onClick={() => handleDiaClick(dia)}
              style={{ cursor: 'pointer', backgroundColor: dia === diaSeleccionado ? 'lightgray' : 'inherit' }}
            >
              {dia}
              {eventos[dia]?.map((evento, index) => (
                <div key={index}>{evento.evento}</div>
              ))}
            </td>
          ))}
        </tbody>
      </table>

      {diaSeleccionado && (
        <div>
          <label>
            Taller:
            <select onChange={(e) => handleTallerChange(e.target.value)}>
              <option value="">Selecciona un taller</option>
              {eventos[diaSeleccionado]?.map((evento, index) => (
                <option key={index} value={evento.evento}>
                  {evento.evento}
                </option>
              ))}
            </select>
          </label>

          {tallerSeleccionado && (
            <div>
              <label>
                Horario:
                <select onChange={(e) => handleHorarioChange(e.target.value)}>
                  <option value="">Selecciona un horario</option>
                  {eventos[diaSeleccionado]
                    ?.filter((evento) => evento.evento === tallerSeleccionado)
                    .map((evento, index) => (
                      <option key={index} value={evento.horario}>
                        {evento.horario}
                      </option>
                    ))}
                </select>
              </label>
            </div>
          )}

          {tallerSeleccionado && horarioSeleccionado && (
            <div>
              <button onClick={handleEnviarWhatsApp}>Enviar a WhatsApp</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Calendario;
