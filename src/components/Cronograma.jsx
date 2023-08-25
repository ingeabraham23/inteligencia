// eslint-disable-next-line no-unused-vars
import React from "react";
import { useRef } from "react";

import "./Cronograma.css";

import html2canvas from "html2canvas";
import Tezotepec from "./Tezotepec";
import TezoTeziu from "./TeziuTezo";
import TezoNoche from "./TezoNoche";

const Cronograma = () => {
  const tablaRef = useRef(null);
  const tablaRefTezoTeziu = useRef(null);
  const tablaRefTezoNoche = useRef(null);

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
              <th colSpan={4}>En la mañana desde Tezotépec Tenextépec</th>
            </tr>
            <tr>
              <th>Hora</th>
              <th>Lugar</th>
              <th>Hora Tezotépec</th>
              <th>Minutos</th>
            </tr>
          </thead>
          <tbody>
            {Tezotepec.map((evento, index) => (
              <tr key={index}>
                <td>{evento.hora}</td>
                <td
                  style={{
                    backgroundColor:
                      evento.lugar === "Tenextépec" ? "red" : "#00db12",
                  }}
                >
                  {evento.lugar}
                </td>
                <td className="celda-tenextepec">{evento.horaTezotepec}</td>
                <td>{evento.minutos}</td>
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
      <div className="contenedor-tezo-teziu">
        <table className="tabla-tezo" ref={tablaRefTezoTeziu}>
          <thead>
            <tr>
              <th colSpan={4}>En la mañana desde Teziutlan</th>
            </tr>
            <tr>
              <th>Hora</th>
              <th>Hacia</th>
              <th>Hospital</th>
              <th>Minutos</th>
            </tr>
          </thead>
          <tbody>
            {TezoTeziu.map((evento, index) => (
              <tr key={index}>
                <td>{evento.hora}</td>
                <td>{evento.hacia}</td>
                <td>{evento.hospital}</td>
                <td>{evento.minutos}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button onClick={() => capturarTabla(tablaRefTezoTeziu.current)}>
            Capturar
          </button>
        </div>
      </div>
      <div className="contenedor-tezo-noche">
        <table className="tabla-tezo-noche" ref={tablaRefTezoNoche}>
          <thead>
            <tr>
              <th colSpan={6}>
                En la Noche la que sale de Tezotépec es la misma que sale de
                Teziutlan 30 minutos despues hacia Tezotépec-Tenextépec
              </th>
            </tr>
            <tr>
              <th>Unidad</th>
              <th>Hora</th>
              <th>Desde</th>
              <th>Hora</th>
              <th>Desde</th>
              <th>Minutos</th>
            </tr>
          </thead>
          <tbody>
            {TezoNoche.map((evento, index) => (
              <tr key={index}>
                <td>{evento.unidad}</td>
                <td>{evento.hora}</td>
                <td>{evento.desde}</td>
                <td>{evento.hora2}</td>
                <td>{evento.desde2}</td>
                <td>{evento.minutos}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button onClick={() => capturarTabla(tablaRefTezoNoche.current)}>
            Capturar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cronograma;
