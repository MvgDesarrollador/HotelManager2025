import "./Menu.css";
import { Link } from "react-router-dom";
import icon from "../../../assets/img/booking (1).png"; // Ajusta la ruta según donde tengas tu archivo

export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg menu navbar-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            Hotel Manager
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" id="about-us-menu2">
                <Link
                  className="nav-link active"
                  id="about-us-menu"
                  aria-current="page"
                  to="/about-us"
                >
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/reservations/dashboard"
                >
                  <img
                    src={icon}
                    alt="Icono de Reservas"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "5px",
                      color: "white",
                    }} // Estilos opcionales
                  />
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
