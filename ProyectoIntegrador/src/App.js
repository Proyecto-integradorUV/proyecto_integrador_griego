import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./HomePage/homepage";
import Principal from "./PrincipalPage/principalPage";
import Temas from "./temasPage/temasPage";
import SignIn from "./signIn/SingIn";
import SignUp from "./signUp/SignUp";
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
          <Route path="Mitologia" element={<Mitologia/>} />
          <Route path="Gastronomia" element={<Gastronomia/>} />
          <Route path="Deporte" element={<Deporte/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
