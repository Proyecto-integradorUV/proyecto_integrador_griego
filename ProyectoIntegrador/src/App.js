import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./HomePage/homepage";
import Principal from "./PrincipalPage/principalPage";
import Temas from "./temasPage/temasPage";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
       <Route path="Home" element={<Home />} />
       <Route path="Principal" element={<Principal />} />
       <Route path="Temas" element={<Temas />} />
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
