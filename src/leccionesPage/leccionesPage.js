import "./StyleLecciones.css";
import "../index.css";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import React from "react";
import NavbarPrincipal from "../components/navbar2";

const Lecciones = () => {
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
          <tr>
            <td>1</td>
            <td><Link to="/Temas/Filosofia/Quiz" className="enlace-personalizado">Filosofia</Link></td>
            <td>Dato 2</td>
            <td><Link to="/Temas/Arte/Quiz" className="enlace-personalizado">Arte</Link></td>
            <td>Dato 4</td>
            <td><Link to="/Temas/Mitologia/Quiz" className="enlace-personalizado">Mitologia</Link></td>
            <td>Dato 6</td>
          </tr>
          <tr>
            <td>2</td>
            <td><Link to="/Temas/Derecho/Quiz" className="enlace-personalizado">Derechos</Link></td>
            <td>Dato 8</td>
            <td><Link to="/Temas/Literatura/Quiz" className="enlace-personalizado">Literatura</Link></td>
            <td>Dato 10</td>
            <td><Link to="/Temas/Deporte/Quiz" className="enlace-personalizado">Deporte</Link></td>
            <td>Dato 12</td>
          </tr>
          <tr>
            <td>3</td>
            <td><Link to="/Temas/SitiosCaracteristicos/Quiz" className="enlace-personalizado">Sitios Caracteristicos</Link></td>
            <td>Dato 8</td>
            <td><Link to="/Temas/Vestimenta/Quiz" className="enlace-personalizado">Vestimenta</Link></td>
            <td>Dato 10</td>
            <td><Link to="/Temas/Gastronomia/Quiz" className="enlace-personalizado">Gastronomia</Link></td>
            <td>Dato 12</td>
          </tr>
        </tbody>
      </Table>
    </div> 
</div>
);
}

export default Lecciones;