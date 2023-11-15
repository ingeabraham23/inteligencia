// eslint-disable-next-line no-unused-vars
import React from "react";
import { useRef } from "react";

import "./Cronograma.css";

import html2canvas from "html2canvas";

import coahuixco from "./Coahuixco.js";

const Coahuixco = () => {
  const tablaRef = useRef(null);

  function capturarTabla(tabla) {
    const fecha = new Date();
    html2canvas(tabla).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = fecha;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  return (
    <div>
      <div className="contenedor-tezo">
        <table className="tabla-tezo" ref={tablaRef}>
          <thead>
            <tr>
              <th colSpan={4}>En la noche Desde Teziutlan</th>
            </tr>
            <tr>
              <th>Hora</th>
              <th>Lugar</th>
            </tr>
          </thead>
          <tbody>
            {coahuixco.map((evento, index) => (
              <tr key={index}>
                <td>{evento.hora}</td>
                <td>
                  {evento.lugar}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button onClick={() => capturarTabla(tablaRef.current)}>
            Capturar
          </button>
        </div>
      </div>
      
      
    </div>
  );
};

export default Coahuixco;
