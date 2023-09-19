import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/Home";
import RootLayout from "./components/RootLayout";
import Schedule from "./modules/Schedule/Schedule";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />}></Route>
        </Route>
        <Route path="/schedule" element={<RootLayout />}>
          <Route index element={<Schedule />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
