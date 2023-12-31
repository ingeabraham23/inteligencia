// eslint-disable-next-line no-unused-vars
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cronograma from "./components/Cronograma";
import Sosa from "./components/Sosa";
import Coahuixco from "./components/Coahuixco.jsx";
import Huapaltepec from "./components/Huapaltepec.jsx";

function App() {
  return (
    <HashRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Cronograma />} />
            <Route path="/sosa" element={<Sosa />} />
            <Route path="/coahuixco" element={<Coahuixco />} />
            <Route path="/huapaltepec" element={<Huapaltepec />} />
          </Routes>
        </div>
    </HashRouter>
  );
}

export default App;
