import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { datosJSON } from "../../pages/Booking/DatosJSON"; // Ajusta la ruta según corresponda

export function FormReservation() {
  const [getResponsableReserva, setResponsableReserva] = useState("");
  const [getContactoReserva, setContactoReserva] = useState("");
  const [getCorreoReserva, setCorreoReserva] = useState("");
  const [getApartamentoReserva, setApartamentoReserva] = useState("");
  const [getDiaReserva, setDiaReserva] = useState("");
  const [getHoraReserva, setHoraReserva] = useState("");
  const [getConsideracionesReserva, setConsideracionReserva] = useState("");

  const receptor = useLocation();
  const { dia, hora, id } = receptor.state || {};

  useEffect(() => {
    // Cargar datos por defecto si se proporciona dia y hora
    if (dia && hora) {
      setDiaReserva(dia);
      setHoraReserva(hora);
    }
  }, [dia, hora]);

  const capturarDatosFormulario = (e) => {
    e.preventDefault();
    const nuevaReserva = {
      responsable: getResponsableReserva,
      contacto: getContactoReserva,
      correo: getCorreoReserva,
      apartamento: getApartamentoReserva,
      dia: getDiaReserva,
      hora: getHoraReserva,
      consideraciones: getConsideracionesReserva,
    };

    // Buscar la atracción seleccionada en datosJSON
    const espacioSeleccionado = datosJSON.find((space) => space.id === id);
    if (espacioSeleccionado) {
      // Sobrescribir la lista de reservas con la nueva reserva
      espacioSeleccionado.reservas = [
        ...espacioSeleccionado.reservas,
        {
          dia: getDiaReserva,
          horario: getHoraReserva,
          ...nuevaReserva,
        },
      ];

      // Aquí puedes agregar la lógica para guardar el datosJSON actualizado en tu backend o en tu estado de la aplicación.

      alert("Reserva realizada exitosamente!");
    }

    // Resetear los campos
    setResponsableReserva("");
    setContactoReserva("");
    setCorreoReserva("");
    setApartamentoReserva("");
    setConsideracionReserva("");
  };

  return (
    <>
      <br />
      <br />
      <section className="container">
        <section className="row">
          <section className="col-12 col-md-8">
            <h3>Registra tu reserva</h3>
            <hr />
            <form
              className="border rounded p-4 shadow"
              onSubmit={capturarDatosFormulario}
            >
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-person-circle"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Responsable Reserva"
                  value={getResponsableReserva}
                  onChange={(evento) =>
                    setResponsableReserva(evento.target.value)
                  }
                  required
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-phone-fill"></i>
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Contacto Reserva"
                  value={getContactoReserva}
                  onChange={(evento) => setContactoReserva(evento.target.value)}
                  required
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo Contacto"
                  value={getCorreoReserva}
                  onChange={(evento) => setCorreoReserva(evento.target.value)}
                  required
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-building-fill"></i>
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Apartamento Reserva"
                  value={getApartamentoReserva}
                  onChange={(evento) =>
                    setApartamentoReserva(evento.target.value)
                  }
                  required
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-calendar-event-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Día Reserva"
                  value={getDiaReserva}
                  readOnly
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-clock-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Hora Reserva"
                  value={getHoraReserva}
                  readOnly
                />
              </div>

              <div className="mb-3">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    value={getConsideracionesReserva}
                    onChange={(evento) =>
                      setConsideracionReserva(evento.target.value)
                    }
                  ></textarea>
                  <label>Consideraciones</label>
                </div>
              </div>

              <button className="btn btn-outline-primary w-100" type="submit">
                Reservar
              </button>
            </form>
          </section>
          <section className="col-12 col-md-4 align-self-center">
            <img
              src="../../../../src/assets/img/mounstricos.png"
              alt="foto"
              className="img-fluid"
            />
          </section>
        </section>
      </section>
    </>
  );
}
