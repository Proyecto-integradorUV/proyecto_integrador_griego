import "./App.css";
import { LoginWrapper } from "./context/signInContext.jsx";
import AppRouter from "./AppRouter";

function App() {
  return (
    <LoginWrapper>
      <AppRouter />
    </LoginWrapper>
  );
}

export default App;
