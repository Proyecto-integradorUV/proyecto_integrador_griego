import "./StyleLecciones.css";
import "../index.css";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { progressUser } from "../Services/users";
import React, { useState, useEffect } from "react";
import NavbarPrincipal from "../components/navbar2";

const Lecciones = () => {
  const [id, setId] = useState();
  const [progreso, setProgreso] = useState([]);

  const userData = localStorage.getItem("userData");
  const parsedUserData = JSON.parse(userData);
  setId(parsedUserData.id);

  const peticionBack = async () => {
    progressUser(id)
      .then((response) => {
        setProgreso(response);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  useEffect(() => {
    peticionBack();
  }, []);

  return (
    <div className="contenedor-inicial-principal">
      <NavbarPrincipal />
      <div className="tabla-contenedor">
        <Table striped bordered hover className="mi-tabla">
          <thead>
            <tr>
              <th>#</th>
              <th>Quiz/Historia</th>
              <th>Resultados</th>
              <th>Quiz/Arte</th>
              <th>Resultados</th>
              <th>Quiz/Costumbres</th>
              <th>Resultados</th>
            </tr>
          </thead>
          <tbody>
            {/* Primera columna*/}

            {progreso &&
              progreso.map((progresoUser) => (
                <tr key={progresoUser.id}>
                  <td>1</td>
                  <td>
                    <Link
                      to="/Temas/Filosofia/Quiz"
                      className="enlace-personalizado"
                    >
                      Filosofia
                    </Link>
                  </td>
                  <td>
                    {progresoUser.module === 8
                      ? progresoUser.score
                      : "notaFilo"}
                  </td>
                  <td>
                    <Link
                      to="/Temas/Arte/Quiz"
                      className="enlace-personalizado"
                    >
                      Arte
                    </Link>
                  </td>
                  <td>
                    {progresoUser.module === 3
                      ? progresoUser.score
                      : "notaArte"}
                  </td>
                  <td>
                    <Link
                      to="/Temas/Mitologia/Quiz"
                      className="enlace-personalizado"
                    >
                      Mitologia
                    </Link>
                  </td>
                  <td>
                    {progresoUser.module === 9
                      ? progresoUser.score
                      : "notaMito"}
                  </td>
                </tr>
              ))}

            {/* segunda columna */}

            {progreso &&
              progreso.map((progresoUser) => (
                <tr key={progresoUser.id}>
                  <td>2</td>
                  <td>
                    <Link
                      to="/Temas/Derecho/Quiz"
                      className="enlace-personalizado"
                    >
                      Derechos
                    </Link>
                  </td>
                  <td>
                    {progresoUser.module === 2
                      ? progresoUser.score
                      : "notaDerecho"}
                  </td>
                  <td>
                    <Link
                      to="/Temas/Literatura/Quiz"
                      className="enlace-personalizado"
                    >
                      Literatura
                    </Link>
                  </td>
                  <td>
                    {progresoUser.module === 7
                      ? progresoUser.score
                      : "notaLite"}
                  </td>
                  <td>
                    <Link
                      to="/Temas/Deporte/Quiz"
                      className="enlace-personalizado"
                    >
                      Deporte
                    </Link>
                  </td>
                  <td>
                    {progresoUser.module === 1
                      ? progresoUser.score
                      : "notaDepor"}
                  </td>
                </tr>
              ))}

            {/* tercera columna  */}

            {progreso &&
              progreso.map((progresoUser) => (
                <tr key={progresoUser.id}>
                  <td>3</td>
                  <td>
                    <Link
                      to="/Temas/SitiosCaracteristicos/Quiz"
                      className="enlace-personalizado"
                    >
                      Sitios Caracteristicos
                    </Link>
                  </td>
                  <td></td>
                  <td>
                    <Link
                      to="/Temas/Vestimenta/Quiz"
                      className="enlace-personalizado"
                    >
                      Vestimenta
                    </Link>
                  </td>
                  <td>
                    {progresoUser.module === 5
                      ? progresoUser.score
                      : "notaVesti"}
                  </td>
                  <td>
                    <Link
                      to="/Temas/Gastronomia/Quiz"
                      className="enlace-personalizado"
                    >
                      Gastronomia
                    </Link>
                  </td>
                  <td>
                    {progresoUser.module === 4
                      ? progresoUser.score
                      : "notaGastro"}
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Lecciones;
