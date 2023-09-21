import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/Home";
import RootLayout from "./components/RootLayout";
import FlightSchedule from "./modules/FlightSchedule";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />}></Route>
        </Route>
        <Route path="/flightschedule" element={<RootLayout />}>
          <Route index element={<FlightSchedule />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
