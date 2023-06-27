import "./styles/Arte.css";
import arteTitle from "../style/titulos/arte.png";
import { Link } from "react-router-dom";
import botonModel3D from "./Images/btnArte3D.png";
import NavbarArte from "../components/navArte";

const Arte = () => {

  return (
    <div class="contenedor-inicial-arte">
      <NavbarArte/>
      <div class="temaArte">
        <img src={arteTitle} alt="Imagen" />
      </div>
      <div class="introduccionArte">
        El arte griego abarca una amplia gama de disciplinas, desde la escultura
        y la arquitectura hasta la pintura y la cerámica. A lo largo de los
        siglos, los artistas griegos experimentaron y perfeccionaron diversas
        técnicas y estilos artísticos, dejando un legado duradero
      </div>
      <div class="button-container-arte">
        <Link to="/Temas/Arte/Model" class="btn-arte">
          <img src={botonModel3D} alt="Imagen" class="button-image" />
        </Link>
      </div>
    </div>
  );
};

export default Arte;