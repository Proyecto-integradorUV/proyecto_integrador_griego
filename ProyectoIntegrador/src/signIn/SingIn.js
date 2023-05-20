import "./StyleSignIn.css";
import backgroundImage from "./Images/acropolis.jpg";

const SignIn = () => {
  return (
    <div
      className="contenedorPrincipal"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="formContainer">
        <div className="form-group">
          <label>Correo: </label>
          <input
            type="email"
            className="form-control"
            name="username"
            placeholder="lorena@gmail.com"
            // onChange={this.handleChange}
          />
          <br />
          <label>Contraseña: </label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="********"
            // onChange={this.handleChange}
          />
          <br />
          <button type="submit">Iniciar sesión</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
