// eslint-disable-next-line no-unused-vars
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cronograma from "./components/Cronograma";
import Sosa from "./components/Sosa";

function App() {
  return (
    <HashRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Cronograma />} />
            <Route path="/sosa" element={<Sosa />} />
          </Routes>
        </div>
    </HashRouter>
  );
}

export default App;
