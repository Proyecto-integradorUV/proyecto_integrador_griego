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
import LeccionesArte from "./Arte/LeccionesArte/Arte/LecInicioArte.js";
import LeccionesLiteratura from "./Arte/LeccionesArte/Literatura/LecInicioLiteratura.js";
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
import QuizVestimenta from "./Arte/LeccionesArte/Vestimenta/quizVesti.js";
// arte
import LeccionArte1 from "./Arte/LeccionesArte/Arte/LeccionArte1.js";
import LeccionArte2 from "./Arte/LeccionesArte/Arte/LeccionArte2.js";
import LeccionArte3 from "./Arte/LeccionesArte/Arte/LeccionArte3.js";
import LeccionArte4 from "./Arte/LeccionesArte/Arte/LeccionArte4.js";
import LeccionArte5 from "./Arte/LeccionesArte/Arte/LeccionArte5.js";
import LeccionArte6 from "./Arte/LeccionesArte/Arte/LeccionArte6.js";
import QuizArte from "./Arte/LeccionesArte/Arte/quizArte.js";
// literatura
import LeccionLiteratura1 from "./Arte/LeccionesArte/Literatura/LeccionLiteratura1.js";
import LeccionLiteratura2 from "./Arte/LeccionesArte/Literatura/LeccionLiteratura2.js";
import QuizLite from "./Arte/LeccionesArte/Literatura/quizLite.js";
// lecciones seccion costumbres
// Deporte
import LeccionDeporte1 from "./Costumbres/LeccionesCostumbres/deporte/leccion1.js";
import LeccionDeporte2 from "./Costumbres/LeccionesCostumbres/deporte/leccion2.js";
import LeccionDeporte3 from "./Costumbres/LeccionesCostumbres/deporte/leccion3.js";
import LeccionDeporte4 from "./Costumbres/LeccionesCostumbres/deporte/leccion4.js";
import QuizDeporte from "./Costumbres/LeccionesCostumbres/deporte/quizDepor.js";
// Gastronomia
import LeccionGastronomia1 from "./Costumbres/LeccionesCostumbres/gastronomia/leccion1.js";
import LeccionGastronomia2 from "./Costumbres/LeccionesCostumbres/gastronomia/leccion2.js";
import LeccionGastronomia3 from "./Costumbres/LeccionesCostumbres/gastronomia/leccion3.js";
import LeccionGastronomia4 from "./Costumbres/LeccionesCostumbres/gastronomia/leccion4.js";
import QuizGastronomia from "./Costumbres/LeccionesCostumbres/gastronomia/quizGastro.js";
// Mitologia
import LeccionMitologia1 from "./Costumbres/LeccionesCostumbres/mitologia/leccionMitologia1.js";
import LeccionMitologia2 from "./Costumbres/LeccionesCostumbres/mitologia/leccionMitologia2.js";
import LeccionMitologia3 from "./Costumbres/LeccionesCostumbres/mitologia/leccionMitologia3.js";
import QuizMitologia from "./Costumbres/LeccionesCostumbres/mitologia/quizMito.js";
// lecciones seccion historia
// Derecho
import LeccionDerecho1 from "./Historia/LeccionesHistoria/derecho/LeccionDerecho1.js";
import LeccionDerecho2 from "./Historia/LeccionesHistoria/derecho/LeccionDerecho2.js";
import LeccionDerecho3 from "./Historia/LeccionesHistoria/derecho/LeccionDerecho3.js";
import LeccionDerecho4 from "./Historia/LeccionesHistoria/derecho/LeccionDerecho4.js";
import QuizDerecho from "./Historia/LeccionesHistoria/derecho/quizDerecho.js";
// Filosofia
import LeccionFilosofia1 from "./Historia/LeccionesHistoria/filosofia/leccion1.js";
import LeccionFilosofia2 from "./Historia/LeccionesHistoria/filosofia/leccion2.js";
import LeccionFilosofia3 from "./Historia/LeccionesHistoria/filosofia/leccion3.js";
import LeccionFilosofia4 from "./Historia/LeccionesHistoria/filosofia/leccion4.js";
import QuizFilosofia from "./Historia/LeccionesHistoria/filosofia/quizFilo.js";
// Sitios
import LeccionSitios1 from "./Historia/LeccionesHistoria/sitios/leccion1.js";
import LeccionSitios2 from "./Historia/LeccionesHistoria/sitios/leccion2.js";
import LeccionSitios3 from "./Historia/LeccionesHistoria/sitios/leccion3.js";
import LeccionSitios4 from "./Historia/LeccionesHistoria/sitios/leccion4.js";
import QuizSitios from "./Historia/LeccionesHistoria/sitios/quizSitios.js";
// Paginas3D
import Experience from "./Arte/Paginas3D/Arte/experience.jsx";
import Experience2 from "./Arte/Paginas3D/Literatura/experience.jsx";
import Experience3 from "./Arte/Paginas3D/Vestimenta/experience.jsx";
import Experience4 from "./Costumbres/Paginas3D/Deporte/experience.jsx";
import Experience5 from "./Costumbres/Paginas3D/Gastronomia/experience.jsx";
import Experience6 from "./Costumbres/Paginas3D/Mitologia/experience.jsx";
import Experience7 from "./Historia/Paginas3D/Derecho/experience.jsx";
import Experience8 from "./Historia/Paginas3D/Filosofia/experience.jsx";
import Experience9 from "./Historia/Paginas3D/Sitios/experience.jsx";

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
          <Route
            path="Temas/Vestimenta/Lecciones"
            element={<LeccionesVestimenta />}
          />
          <Route path="Temas/Arte/Lecciones" element={<LeccionesArte />} />
          <Route
            path="Temas/Literatura/Lecciones"
            element={<LeccionesLiteratura />}
          />
          <Route
            path="Temas/Derecho/Lecciones"
            element={<LeccionesDerecho />}
          />
          <Route
            path="Temas/SitiosCaracteristicos/Lecciones"
            element={<LeccionesSitios />}
          />
          <Route
            path="Temas/Deporte/Lecciones"
            element={<LeccionesDeporte />}
          />
          <Route
            path="Temas/Mitologia/Lecciones"
            element={<LeccionesMitologia />}
          />
          <Route
            path="Temas/Filosofia/Lecciones"
            element={<LeccionesFilosofia />}
          />
          <Route
            path="Temas/Gastronomia/Lecciones"
            element={<LeccionesGastronomia />}
          />
          {/* ruta a las lecciones por seccion: Arte */}
          {/* vestimenta */}
          <Route
            path="Temas/Vestimenta/Leccion1"
            element={<LeccionVestimenta1 />}
          />
          <Route
            path="Temas/Vestimenta/Leccion2"
            element={<LeccionVestimenta2 />}
          />
          <Route
            path="Temas/Vestimenta/Leccion3"
            element={<LeccionVestimenta3 />}
          />
          <Route
            path="Temas/Vestimenta/Leccion4"
            element={<LeccionVestimenta4 />}
          />
          <Route path="Temas/Vestimenta/Quiz" element={<QuizVestimenta />} />
          {/* arte */}
          <Route path="Temas/Arte/Leccion1" element={<LeccionArte1 />} />
          <Route path="Temas/Arte/Leccion2" element={<LeccionArte2 />} />
          <Route path="Temas/Arte/Leccion3" element={<LeccionArte3 />} />
          <Route path="Temas/Arte/Leccion4" element={<LeccionArte4 />} />
          <Route path="Temas/Arte/Leccion5" element={<LeccionArte5 />} />
          <Route path="Temas/Arte/Leccion6" element={<LeccionArte6 />} />
          <Route path="Temas/Arte/Quiz" element={<QuizArte />} />

          {/* literatura */}
          <Route
            path="Temas/Literatura/Leccion1"
            element={<LeccionLiteratura1 />}
          />
          <Route
            path="Temas/Literatura/Leccion2"
            element={<LeccionLiteratura2 />}
          />
          <Route path="Temas/Literatura/Quiz" element={<QuizLite />} />
          {/* ruta a las lecciones por seccion: Costumbres */}
          {/* deporte */}
          <Route path="Temas/Deporte/Leccion1" element={<LeccionDeporte1 />} />
          <Route path="Temas/Deporte/Leccion2" element={<LeccionDeporte2 />} />
          <Route path="Temas/Deporte/Leccion3" element={<LeccionDeporte3 />} />
          <Route path="Temas/Deporte/Leccion4" element={<LeccionDeporte4 />} />
          <Route path="Temas/Deporte/Quiz" element={<QuizDeporte />} />
          {/* gastronomia */}
          <Route
            path="Temas/Gastronomia/Leccion1"
            element={<LeccionGastronomia1 />}
          />
          <Route
            path="Temas/Gastronomia/Leccion2"
            element={<LeccionGastronomia2 />}
          />
          <Route
            path="Temas/Gastronomia/Leccion3"
            element={<LeccionGastronomia3 />}
          />
          <Route
            path="Temas/Gastronomia/Leccion4"
            element={<LeccionGastronomia4 />}
          />
          <Route path="Temas/Gastronomia/Quiz" element={<QuizGastronomia />} />
          {/* mitologia */}
          <Route
            path="Temas/Mitologia/Leccion1"
            element={<LeccionMitologia1 />}
          />
          <Route
            path="Temas/Mitologia/Leccion2"
            element={<LeccionMitologia2 />}
          />
          <Route
            path="Temas/Mitologia/Leccion3"
            element={<LeccionMitologia3 />}
          />
          <Route path="Temas/Mitologia/Quiz" element={<QuizMitologia />} />
          {/* ruta a las lecciones por seccion: Historia */}
          {/* filosofia */}
          <Route
            path="Temas/Filosofia/Leccion1"
            element={<LeccionFilosofia1 />}
          />
          <Route
            path="Temas/Filosofia/Leccion2"
            element={<LeccionFilosofia2 />}
          />
          <Route
            path="Temas/Filosofia/Leccion3"
            element={<LeccionFilosofia3 />}
          />
          <Route
            path="Temas/Filosofia/Leccion4"
            element={<LeccionFilosofia4 />}
          />
          <Route path="Temas/Filosofia/Quiz" element={<QuizFilosofia />} />
          {/* derecho */}
          <Route path="Temas/Derecho/Leccion1" element={<LeccionDerecho1 />} />
          <Route path="Temas/Derecho/Leccion2" element={<LeccionDerecho2 />} />
          <Route path="Temas/Derecho/Leccion3" element={<LeccionDerecho3 />} />
          <Route path="Temas/Derecho/Leccion4" element={<LeccionDerecho4 />} />
          <Route path="Temas/Derecho/Quiz" element={<QuizDerecho />} />
          {/* sitios */}
          <Route
            path="Temas/SitiosCaracteristicos/Leccion1"
            element={<LeccionSitios1 />}
          />
          <Route
            path="Temas/SitiosCaracteristicos/Leccion2"
            element={<LeccionSitios2 />}
          />
          <Route
            path="Temas/SitiosCaracteristicos/Leccion3"
            element={<LeccionSitios3 />}
          />
          <Route
            path="Temas/SitiosCaracteristicos/Leccion4"
            element={<LeccionSitios4 />}
          />
          <Route
            path="Temas/SitiosCaracteristicos/Quiz"
            element={<QuizSitios />}
          />
          {/* paginas3D */}
          <Route path="Temas/Arte/Model" element={<Experience />} />
          <Route path="Temas/Literatura/Model" element={<Experience2 />} />
          <Route path="Temas/Vestimenta/Model" element={<Experience3 />} />
          <Route path="Temas/Deporte/Model" element={<Experience4 />} />
          <Route path="Temas/Gastronomia/Model" element={<Experience5 />} />
          <Route path="Temas/Mitologia/Model" element={<Experience6 />} />
          <Route path="Temas/Derecho/Model" element={<Experience7 />} />
          <Route path="Temas/Filosofia/Model" element={<Experience8 />} />
          <Route
            path="Temas/SitiosCaracteristicos/Model"
            element={<Experience9 />}
          />
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
