import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { SignInContext } from "./context/signInContext.jsx";
import Home from "./HomePage/homepage";
import Principal from "./PrincipalPage/principalPage";
import Temas from "./temasPage/temasPage";
// login y signup
import SignIn from "./signIn/SingIn";
import SignUp from "./signUp/SignUp";
// Secciones
import Arte from "./Arte/Arte";
import Literatura from "./Arte/Literatura";
import Vestimenta from "./Arte/Vestimenta";
import Mitologia from "./Costumbres/Mitologia";
import Gastronomia from "./Costumbres/Gastronomia";
import Deporte from "./Costumbres/Deporte";
import Derecho from "./Historia/Derecho";
import Filosofia from "./Historia/Filosofia";
import Sitios from "./Historia/Sitios";
// pagina principal de lecciones de secciones
import LeccionesVestimenta from "./Arte/LeccionesArte/Vestimenta/LecInicioVestimenta.js";
import LeccionArte from "./Arte/LeccionesArte/Arte/LeccionArte.js";
import LeccionesLiteratura from "./Arte/LeccionesArte/Literatura/LecInicioLiteratura.js"
import LeccionesDerecho from "./Historia/LeccionesHistoria/derecho/LecInicioDerecho.js";
import LeccionesDeporte from "./Costumbres/LeccionesCostumbres/deporte/LecInicioDeporte.js";
import LeccionesSitios from "./Historia/LeccionesHistoria/sitios/LecInicioSitios.js";
import LeccionesMitologia from "./Costumbres/LeccionesCostumbres/mitologia/LecInicioMitologia.js";
import LeccionesFilosofia from "./Historia/LeccionesHistoria/filosofia/LecInicioFilosofía.js";
import LeccionesGastronomia from "./Costumbres/LeccionesCostumbres/gastronomia/LecInicioGastronomia.js";
// lecciones seccion arte
// vestimenta
import LeccionVestimenta1 from "./Arte/LeccionesArte/Vestimenta/Leccion1.js";
import LeccionVestimenta2 from "./Arte/LeccionesArte/Vestimenta/Leccion2.js";
import LeccionVestimenta3 from "./Arte/LeccionesArte/Vestimenta/Leccion3.js";
import LeccionVestimenta4 from "./Arte/LeccionesArte/Vestimenta/Leccion4.js";
// arte
import LeccionesArte from "./Arte/LeccionesArte/Arte/LecInicioArte.js";
// literatura
// lecciones seccion costumbres
// Deporte
import LeccionDeporte1 from "./Costumbres/LeccionesCostumbres/deporte/leccion1.js";
import LeccionDeporte2 from "./Costumbres/LeccionesCostumbres/deporte/leccion2.js";
import LeccionDeporte3 from "./Costumbres/LeccionesCostumbres/deporte/leccion3.js";
import LeccionDeporte4 from "./Costumbres/LeccionesCostumbres/deporte/leccion4.js";
// Gastronomia
import LeccionGastronomia1 from "./Costumbres/LeccionesCostumbres/gastronomia/leccion1.js";
import LeccionGastronomia2 from "./Costumbres/LeccionesCostumbres/gastronomia/leccion2.js";
import LeccionGastronomia3 from "./Costumbres/LeccionesCostumbres/gastronomia/leccion3.js";
import LeccionGastronomia4 from "./Costumbres/LeccionesCostumbres/gastronomia/leccion4.js";
import LeccionGastronomia5 from "./Costumbres/LeccionesCostumbres/gastronomia/leccion5.js";
// Mitologia
import LeccionMitologia1 from "./Costumbres/LeccionesCostumbres/mitologia/leccion1.js";
import LeccionMitologia2 from "./Costumbres/LeccionesCostumbres/mitologia/leccion2.js";
import LeccionMitologia3 from "./Costumbres/LeccionesCostumbres/mitologia/leccion3.js";
import LeccionMitologia4 from "./Costumbres/LeccionesCostumbres/mitologia/leccion4.js";
// lecciones seccion historia
// Derecho
// Filosofia
import LeccionFilosofia1 from "./Historia/LeccionesHistoria/filosofia/leccion1.js";
import LeccionFilosofia2 from "./Historia/LeccionesHistoria/filosofia/leccion2.js";
import LeccionFilosofia3 from "./Historia/LeccionesHistoria/filosofia/leccion3.js";
import LeccionFilosofia4 from "./Historia/LeccionesHistoria/filosofia/leccion4.js";
// Sitios
import LeccionSitios1 from "./Historia/LeccionesHistoria/sitios/leccion1.js"
import LeccionSitios2 from "./Historia/LeccionesHistoria/sitios/leccion2.js"
import LeccionSitios3 from "./Historia/LeccionesHistoria/sitios/leccion3.js"
import LeccionSitios4 from "./Historia/LeccionesHistoria/sitios/leccion4.js"

function AppRouter() {
  const { isLogged } = useContext(SignInContext);
  return (
    <BrowserRouter>
      {isLogged ? (
        <Routes>
          {/* ruta a la pagina principal */}
          <Route path="Principal" element={<Principal />} />
          {/* ruta a la pagina de donde salen los temas a aprender */}
          <Route path="Temas" element={<Temas />} />
          {/* ruta a cada tema de aprendizaje */}
          <Route path="Temas/Arte" element={<Arte />} />
          <Route path="Temas/Literatura" element={<Literatura />} />
          <Route path="Temas/Vestimenta" element={<Vestimenta />} />
          <Route path="Temas/Mitologia" element={<Mitologia />} />
          <Route path="Temas/Gastronomia" element={<Gastronomia />} />
          <Route path="Temas/Deporte" element={<Deporte />} />
          <Route path="Temas/Derechos" element={<Derecho />} />
          <Route path="Temas/Filosofia" element={<Filosofia />} />
          <Route path="Temas/SitiosCaracteristicos" element={<Sitios />} />
          {/* ruta a la pagina principal de todas las lecciones a escoger por tema */}
          <Route path="Temas/Vestimenta/Lecciones"  element={<LeccionesVestimenta />}/>
          <Route path="Temas/Arte/Lecciones" element={<LeccionesArte />} />
          <Route path="Temas/Literatura/Lecciones" element={<LeccionesLiteratura />}/>
          <Route path="Temas/Derecho/Lecciones" element={<LeccionesDerecho />}/>
          <Route path="Temas/SitiosCaracteristicos/Lecciones" element={<LeccionesSitios />}/>
          <Route path="Temas/Deporte/Lecciones" element={<LeccionesDeporte />}/>
          <Route path="Temas/Mitologia/Lecciones" element={<LeccionesMitologia />}/>
          <Route path="Temas/Filosofia/Lecciones" element={<LeccionesFilosofia />}/>
          <Route path="Temas/Gastronomia/Lecciones" element={<LeccionesGastronomia />}/>
          {/* ruta a las lecciones por seccion: Arte */}
          {/* vestimenta */}
          <Route path="Temas/Vestimenta/Leccion1" element={<LeccionVestimenta1 />}/>
          <Route path="Temas/Vestimenta/Leccion2" element={<LeccionVestimenta2 />}/>
          <Route path="Temas/Vestimenta/Leccion3" element={<LeccionVestimenta3 />}/>
          <Route path="Temas/Vestimenta/Leccion4" element={<LeccionVestimenta4 />}/>
          {/* arte */}
          <Route path="Temas/Arte/Leccion1" element={<LeccionArte/>} />
          {/* literatura */}
          {/* ruta a las lecciones por seccion: Costumbres */}
          {/* deporte */}
          <Route path="Temas/Deporte/Leccion1" element={<LeccionDeporte1 />}/>
          <Route path="Temas/Deporte/Leccion2" element={<LeccionDeporte2 />}/>
          <Route path="Temas/Deporte/Leccion3" element={<LeccionDeporte3 />}/>
          <Route path="Temas/Deporte/Leccion4" element={<LeccionDeporte4 />}/>
          {/* gastronomia */}
          <Route path="Temas/Gastronomia/Leccion1" element={<LeccionGastronomia1 />}/>
          <Route path="Temas/Gastronomia/Leccion2" element={<LeccionGastronomia2 />}/>
          <Route path="Temas/Gastronomia/Leccion3" element={<LeccionGastronomia3 />}/>
          <Route path="Temas/Gastronomia/Leccion4" element={<LeccionGastronomia4 />}/>
          <Route path="Temas/Gastronomia/Leccion5" element={<LeccionGastronomia5 />}/>
          {/* mitologia */}
          <Route path="Temas/Mitologia/Leccion1" element={<LeccionMitologia1 />}/>
          <Route path="Temas/Mitologia/Leccion2" element={<LeccionMitologia2 />}/>
          <Route path="Temas/Mitologia/Leccion3" element={<LeccionMitologia3 />}/>
          <Route path="Temas/Mitologia/Leccion4" element={<LeccionMitologia4 />}/>
          {/* ruta a las lecciones por seccion: Historia */}
          {/* filosofia */}
          <Route path="Temas/Filosofia/Leccion1" element={<LeccionFilosofia1 />}/>
          <Route path="Temas/Filosofia/Leccion2" element={<LeccionFilosofia2 />}/>
          <Route path="Temas/Filosofia/Leccion3" element={<LeccionFilosofia3 />}/>
          <Route path="Temas/Filosofia/Leccion4" element={<LeccionFilosofia4 />}/>
          {/* derecho */}
          {/* sitios */}
          <Route path="Temas/SitiosCaracteristicos/Leccion1" element={<LeccionSitios1 />}/>
          <Route path="Temas/SitiosCaracteristicos/Leccion2" element={<LeccionSitios2 />}/>
          <Route path="Temas/SitiosCaracteristicos/Leccion3" element={<LeccionSitios3 />}/>
          <Route path="Temas/SitiosCaracteristicos/Leccion4" element={<LeccionSitios4 />}/>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUp />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default AppRouter;
