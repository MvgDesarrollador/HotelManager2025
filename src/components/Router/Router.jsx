import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { Reservations } from "../pages/Reservations/Reservations";

import { Menu } from "../common/Menu/Menu";

export function Router() {
  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about-us" element={<Home />}></Route>
        <Route
          path="/reservations/dashboard"
          element={<Reservations />}
        ></Route>
      </Routes>
    </>
  );
}
