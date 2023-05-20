import "./StyleSignUp.css";
import backgroundImage from "./Images/temploPoseidon.jpg";

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
      <div className="formContainerSignUp">
        <div className="form-group">
          <h2>Registrate</h2>
          <label>Nombre: </label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder=" "
            // onChange={this.handleChange}
          />
          <br />
          <label>Apellido: </label>
          <input
            type="text"
            className="form-control"
            name="apellido"
            placeholder=" "
            // onChange={this.handleChange}
          />
          <br />
          <label>Correo: </label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder=" "
            // onChange={this.handleChange}
          />
          <br />
          <label>Username: </label>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder=" "
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
          <button type="submit">Registarme</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
