import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./HomePage/homepage";
import Principal from "./PrincipalPage/principalPage";
import Temas from "./temasPage/temasPage";
import SignIn from "./signIn/SingIn";
import SignUp from "./signUp/SignUp";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
