import { useState, useEffect } from "react";
import "./Reservations.css"; // You can add your styles here

export const Reservations = () => {
  const [spots, setSpots] = useState(Array(10).fill(null)); // 10 spots
  const [reservations, setReservations] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    // Cargar reservas del almacenamiento local
    const storedReservations =
      JSON.parse(localStorage.getItem("reservations")) || [];
    setReservations(storedReservations);
    setSpots((prevSpots) => {
      const updatedSpots = [...prevSpots];
      storedReservations.forEach((reservation) => {
        updatedSpots[reservation.spot] = reservation;
      });
      return updatedSpots;
    });
  }, []);

  const handleSpotClick = (index) => {
    if (spots[index]) return; // Spot ya está reservado
    setSelectedSpot(index);
    setShowPopup(true);
  };

  const handleReservation = () => {
    const newReservation = {
      name: guestName,
      spot: selectedSpot,
      date: new Date().toLocaleDateString(),
      hour: new Date().toLocaleTimeString(),
    };
    const updatedSpots = [...spots];
    updatedSpots[selectedSpot] = newReservation;

    setSpots(updatedSpots);
    setReservations([...reservations, newReservation]);
    localStorage.setItem(
      "reservations",
      JSON.stringify([...reservations, newReservation])
    );
    setShowPopup(false);
    setGuestName("");
  };

  const clearReservations = () => {
    localStorage.removeItem("reservations");
    setReservations([]);
    setSpots(Array(10).fill(null));
  };

  return (
    <section className="container my-5" id="reservations">
      <div className="row">
        {/* Columna de Reservaciones */}
        <div className="col-12 col-md-6">
          <h2>Reservation Rooms</h2>
          <div className="row">
            {spots.map((spot, index) => (
              <div
                key={index}
                className={`spot ${spot ? "reserved" : "available"}`}
                onClick={() => handleSpotClick(index)}
              >
                {index + 1}
              </div>
            ))}
          </div>

          {showPopup && (
            <div className="popup">
              <h3>Enter Guest Name</h3>
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Guest Name"
              />
              <button onClick={handleReservation}>Done</button>
              <button onClick={() => setShowPopup(false)}>Cancel</button>
            </div>
          )}

          <h2>Reservations</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Room</th>
                <th>Date</th>
                <th>Hour</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation, index) => (
                <tr key={index}>
                  <td>{reservation.name}</td>
                  <td>{reservation.spot + 1}</td>
                  <td>{reservation.date}</td>
                  <td>{reservation.hour}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={clearReservations}>Clear Reservations</button>
        </div>

        {/* Columna de Mascota */}
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <img
            src="../../../../src/assets/img/murray.webp"
            alt="imagen"
            className="mascot-img-especial"
          />
        </div>
      </div>
    </section>
  );
};
