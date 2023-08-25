// eslint-disable-next-line no-unused-vars
import React from "react";
import { useRef } from "react";

import "./Sosa.css";

import html2canvas from "html2canvas";
import saniMañana from "./Sani";
import yopi from "./Yopi";
import tacopan from "./Tacopan";
import sosaDomingo from "./SosaDomingo";

const Sosa = () => {
  const tablaRefSani = useRef(null);
  const tablaRefYopi = useRef(null);
  const tablaRefTacopan = useRef(null);
  const tablaRefDomingo = useRef(null);

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
      <div className="contenedor-sosa">
        <table className="tabla-sosa" ref={tablaRefSani}>
          <thead>
            <tr>
              <th colSpan={9}>
                San Isidro En la Mañana. 30 Minutos para llegar al centro y
                viceversa.
              </th>
            </tr>
            <tr>
              <th></th>
              <th>Sani</th>
              <th>Teziu</th>
              <th>Sani</th>
              <th>Teziu</th>
              <th>Sani</th>
              <th>Teziu</th>
              <th>Sani</th>
              <th>Teziu</th>
            </tr>
          </thead>
          <tbody>
            {saniMañana.map((evento, index) => (
              <tr key={index}>
                <td>{evento.unidad}</td>
                <td>{evento.hora}</td>
                <td>{evento.horaCentro}</td>
                <td>{evento.hora2}</td>
                <td>{evento.horaCentro2}</td>
                <td>{evento.hora3}</td>
                <td>{evento.horaCentro3}</td>
                <td>{evento.hora4}</td>
                <td>{evento.horaCentro4}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button onClick={() => capturarTabla(tablaRefSani.current)}>
            Capturar
          </button>
        </div>
      </div>
      <div className="contenedor-tacopan">
        <table className="tabla-tacopan" ref={tablaRefTacopan}>
          <thead>
            <tr>
              <th colSpan={7}>Tacopan En la Mañana.</th>
            </tr>
            <tr>
              <th></th>
              <th>Tacopan</th>
              <th>Teziu</th>
              <th>Taco</th>
              <th>Teziu</th>
              <th>Taco</th>
              <th>Teziu</th>
            </tr>
          </thead>
          <tbody>
            {tacopan.map((evento, index) => (
              <tr key={index}>
                <td>{evento.unidad}</td>
                <td>{evento.hora}</td>
                <td>{evento.horaCentro}</td>
                <td>{evento.hora2}</td>
                <td>{evento.horaCentro2}</td>
                <td>{evento.hora3}</td>
                <td>{evento.horaCentro3}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button onClick={() => capturarTabla(tablaRefTacopan.current)}>
            Capturar
          </button>
        </div>
      </div>
      <div className="contenedor-yopi">
        <table className="tabla-yopi" ref={tablaRefYopi}>
          <thead>
            <tr>
              <th colSpan={9}>Yopi En la Mañana.</th>
            </tr>
            <tr>
              <th></th>
              <th>Yopi</th>
              <th>Teziu</th>
              <th>Yopi</th>
              <th>Teziu</th>
              <th>Yopi</th>
              <th>Teziu</th>
              <th>Yopi</th>
              <th>Teziu</th>
            </tr>
          </thead>
          <tbody>
            {yopi.map((evento, index) => (
              <tr key={index}>
                <td>{evento.unidad}</td>
                <td>{evento.hora}</td>
                <td>{evento.horaCentro}</td>
                <td>{evento.hora2}</td>
                <td>{evento.horaCentro2}</td>
                <td>{evento.hora3}</td>
                <td>{evento.horaCentro3}</td>
                <td>{evento.hora4}</td>
                <td>{evento.horaCentro4}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button onClick={() => capturarTabla(tablaRefYopi.current)}>
            Capturar
          </button>
        </div>
      </div>
      <div className="contenedor-domingo">
        <table className="tabla-domingo" ref={tablaRefDomingo}>
          <thead>
            <tr>
              <th colSpan={8}>Rol Domingos hacen el recorrido completo.</th>
            </tr>
            <tr>
              <th></th>
              <th>Sosa</th>
              <th>Teziu</th>
              <th>Yopi</th>
              <th>Teziu Hacia Sani</th>
              <th>Sani</th>
              <th>Teziu Hacia Sosa</th>
              <th>Llega a Sosa</th>
            </tr>
          </thead>
          <tbody>
            {sosaDomingo.map((evento, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{evento.hora}</td>
                <td>{evento.horaCentro}</td>
                <td>{evento.hora2}</td>
                <td>{evento.horaCentro2}</td>
                <td>{evento.hora3}</td>
                <td>{evento.horaCentro3}</td>
                <td>{evento.hora4}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button onClick={() => capturarTabla(tablaRefDomingo.current)}>
            Capturar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sosa;
