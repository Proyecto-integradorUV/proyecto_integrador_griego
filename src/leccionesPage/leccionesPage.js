import "./StyleLecciones.css";
import "../index.css";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listPrueba } from "../Services/users";

import { useState, useEffect } from "react";
import NavbarPrincipal from "../components/navbar2";;

const Lecciones = () => {

  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          listPrueba(1), //Deportes
          listPrueba(2), //Derechos
          listPrueba(3), //Arte
          listPrueba(4), //Gastro
          listPrueba(5), //Vesti
          listPrueba(6), //Lugares
          listPrueba(7), //Literatura
          listPrueba(8), //Filo
          listPrueba(9) //Mitología
        ]);
  
        const scores = responses.map(response => response[0]?.score || "0.0");
        setScores(scores);
        console.log(scores);
      } catch (error) {
        console.error("Error al obtener los puntajes:", error);
      }
    };
  
    fetchData();
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
          <tr>
            <td>1</td>
            <td><Link to="/Temas/Filosofia/Quiz" className="enlace-personalizado">Filosofia</Link></td>
            <td>{scores[7]}</td>
            <td><Link to="/Temas/Arte/Quiz" className="enlace-personalizado">Arte</Link></td>
            <td>{scores[2]}</td>
            <td><Link to="/Temas/Mitologia/Quiz" className="enlace-personalizado">Mitologia</Link></td>
            <td>{scores[8]}</td>
          </tr>
          <tr>
            <td>2</td>
            <td><Link to="/Temas/Derecho/Quiz" className="enlace-personalizado">Derechos</Link></td>
            <td>{scores[1]}</td>
            <td><Link to="/Temas/Literatura/Quiz" className="enlace-personalizado">Literatura</Link></td>
            <td>{scores[6]}</td>
            <td><Link to="/Temas/Deporte/Quiz" className="enlace-personalizado">Deporte</Link></td>
            <td>{scores[0]}</td>
          </tr>
          <tr>
            <td>3</td>
            <td><Link to="/Temas/SitiosCaracteristicos/Quiz" className="enlace-personalizado">Sitios Caracteristicos</Link></td>
            <td>{scores[5]}</td>
            <td><Link to="/Temas/Vestimenta/Quiz" className="enlace-personalizado">Vestimenta</Link></td>
            <td>{scores[4]}</td>
            <td><Link to="/Temas/Gastronomia/Quiz" className="enlace-personalizado">Gastronomia</Link></td>
            <td>{scores[3]}</td>
          </tr>
        </tbody>
      </Table>
    </div>
</div>
);
}

export default Lecciones;