import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="Principal" element={<Principal />} />
          <Route path="Temas" element={<Temas />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="Temas/Arte" element={<Arte/>} />
          <Route path="Temas/Literatura" element={<Literatura/>} />
          <Route path="Temas/Vestimenta" element={<Vestimenta/>} />
          <Route path="Temas/Mitologia" element={<Mitologia/>} />
          <Route path="Temas/Gastronomia" element={<Gastronomia/>} />
          <Route path="Temas/Deporte" element={<Deporte/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
