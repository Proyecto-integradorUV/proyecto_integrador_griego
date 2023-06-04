import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { SignInContext } from "./context/signInContext.jsx";
import Home from "./HomePage/homepage";
import Principal from "./PrincipalPage/principalPage";
import Temas from "./temasPage/temasPage";
import SignIn from "./signIn/SingIn";
import SignUp from "./signUp/SignUp";
import Arte from "./Arte/Arte";
import Literatura from "./Arte/Literatura";
import Vestimenta from "./Arte/Vestimenta";
import Mitologia from "./Costumbres/Mitologia";
import Gastronomia from "./Costumbres/Gastronomia";
import Deporte from "./Costumbres/Deporte";
import Derecho from "./Historia/Derecho";
import Filosofia from "./Historia/Filosofia";
import Sitios from "./Historia/Sitios";
import LeccionesVestimenta from "./Arte/LeccionesArte/LecInicioVestimenta";
import LeccionesArte from "./Arte/LeccionesArte/LecInicioArte";
import LeccionesLiteratura from "./Arte/LeccionesArte/LecInicioLiteratura";
import LeccionesDerecho from "./Historia/LeccionesHistoria/LecInicioDerecho";
import LeccionesDeporte from "./Costumbres/LeccionesCostumbres/LecInicioDeporte.js";
import LeccionesSitios from "./Historia/LeccionesHistoria/LecInicioSitios.js";

function AppRouter() {
  const { isLogged } = useContext(SignInContext);
  return (
    <BrowserRouter>
      {isLogged ? (
        <Routes>
          <Route path="Principal" element={<Principal />} />
          <Route path="Temas" element={<Temas />} />
          <Route path="Temas/Arte" element={<Arte />} />
          <Route path="Temas/Literatura" element={<Literatura />} />
          <Route path="Temas/Vestimenta" element={<Vestimenta />} />
          <Route path="Temas/Mitologia" element={<Mitologia />} />
          <Route path="Temas/Gastronomia" element={<Gastronomia />} />
          <Route path="Temas/Deporte" element={<Deporte />} />
          <Route path="Temas/Derechos" element={<Derecho />} />
          <Route path="Temas/Filosofia" element={<Filosofia />} />
          <Route path="Temas/SitiosCaracteristicos" element={<Sitios />} />
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
