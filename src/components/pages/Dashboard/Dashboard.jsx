import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { datosJSON } from "../../pages/Booking/DatosJSON"; // Ajusta la ruta según corresponda

export const Dashboard = () => {
  const horas = [
    "10am - 11am",
    "11am - 12pm",
    "12pm - 01pm",
    "01pm - 02pm",
    "02pm - 03pm",
    "03pm - 04pm",
    "04pm - 05pm",
  ];

  const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
  const [reservas, setReservas] = useState(
    Array(8)
      .fill(null)
      .map(() => Array(5).fill(null))
  );

  const location = useLocation();
  const navigate = useNavigate();
  const { id } = location.state || {};

  useEffect(() => {
    if (id) {
      const espacioSeleccionado = datosJSON.find((space) => space.id === id);
      const reservasDelEspacio = espacioSeleccionado?.reservas || [];
      const nuevasReservas = Array(8)
        .fill(null)
        .map(() => Array(5).fill(null));

      reservasDelEspacio.forEach((reserva) => {
        const diaIndex = dias.indexOf(reserva.dia);
        const horaIndex = horas.indexOf(reserva.horario);
        if (diaIndex > -1 && horaIndex > -1) {
          nuevasReservas[horaIndex][diaIndex] = "reservado";
        }
      });

      setReservas(nuevasReservas);
    }
  }, [id]);

  const handleReservar = (horaIndex, diaIndex) => {
    const dia = dias[diaIndex];
    const hora = horas[horaIndex];
    navigate("/formulario", { state: { dia, hora, id } }); // Navegar al formulario
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <strong>Hora</strong>
        </div>
        {dias.map((dia, index) => (
          <div className="col" key={index}>
            <strong>{dia}</strong>
          </div>
        ))}
      </div>
      {horas.map((hora, horaIndex) => (
        <div className="row" key={horaIndex}>
          <div className="col-2">{hora}</div>
          {dias.map((dia, diaIndex) => (
            <div className="col" key={diaIndex}>
              <div
                className={`border ${
                  reservas[horaIndex][diaIndex] === "reservado"
                    ? "reservado"
                    : "disponible"
                }`}
                onClick={() =>
                  reservas[horaIndex][diaIndex] !== "reservado" &&
                  handleReservar(horaIndex, diaIndex)
                }
                style={{
                  backgroundColor:
                    reservas[horaIndex][diaIndex] === "reservado"
                      ? "red"
                      : "green",
                  color: "white",
                  padding: "10px",
                  textAlign: "center",
                  cursor:
                    reservas[horaIndex][diaIndex] === "reservado"
                      ? "not-allowed"
                      : "pointer",
                  borderRadius: "10%",
                }}
              >
                {reservas[horaIndex][diaIndex] === "reservado"
                  ? "Reservado"
                  : "Reservar"}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
