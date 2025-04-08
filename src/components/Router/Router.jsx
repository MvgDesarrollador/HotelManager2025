import { NotFound } from "../pages/Not/FourFound"; // Asegúrate de la ruta correcta
import { Routes, Route } from "react-router-dom";

import { Menu } from "../common/Menu/Menu";
import { Home } from "../pages/Home/Home";
import { Reservations } from "../pages/Reservations/Reservations";
import { Booking } from "../pages/Booking/Booking";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { FormReservation } from "../common/FormReservation/formReservation";

export function Router() {
  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/formulario" element={<FormReservation />} />
        <Route path="*" element={<NotFound />} /> {/* Ruta 404 */}
      </Routes>
    </>
  );
}
