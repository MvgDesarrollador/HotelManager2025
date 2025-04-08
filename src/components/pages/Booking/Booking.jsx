import { datosJSON } from "./DatosJSON"; // Ajusta la ruta según corresponda
import { useNavigate } from "react-router-dom";
import "./Booking.css";

export function Booking() {
  const navigate = useNavigate();

  const handleReservar = (id) => {
    navigate(`/dashboard`, { state: { id } }); // Navegar al Dashboard con el ID de la atracción
  };

  return (
    <>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {datosJSON.map((space) => {
            return (
              <div className="col" key={space.id}>
                <div className="card shadow h-100 p-4 cards">
                  <div className="row">
                    <div className="col-6">
                      <img
                        src={space.foto[0]}
                        alt="sin foto"
                        className="img-fluid imagenes"
                      />
                    </div>
                    <div className="col-6">
                      <h2>{space.nombre}</h2>
                      <hr />
                      <h5>{space.description}</h5>
                      <hr />
                      <button
                        onClick={() => handleReservar(space.id)}
                        className="botones"
                      >
                        Reservar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
