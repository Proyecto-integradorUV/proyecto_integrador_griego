import preguntas from "./preguntas";
import "../../../style/css/quiz.css";
import { useState, useEffect, useCallback } from "react";
import NavbarPrincipal from "../../../components/navbar2";
import lecGastronomia from "../../../style/titulos/sitios.png";
import {
  createPrueba,
  listPrueba,
  upDatePrueba,
} from "../../../Services/users";
import Swal from "sweetalert2";

const QuizSitios = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);

  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(10);
  const [areDisabled, setAreDisabled] = useState(false);
  const [start, setStart] = useState(false);
  const [botonIniciar, setBotonIniciar] = useState(false);

  const setCalificacionEnviada = useState(false);

  function handleAnswerSubmit(isCorrect, e) {
    // añadir puntuación
    if (isCorrect) setPuntuacion(puntuacion + 1);
    // añadir estilos de pregunta
    e.target.classList.add(isCorrect ? "correct" : "incorrect");
    // cambiar a la siguiente pregunta

    setTimeout(() => {
      if (preguntaActual === preguntas.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
        setTiempoRestante(60);
      }
    }, 1500);
  }

  useEffect(() => {
    if (start) {
      const intervalo = setInterval(() => {
        if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
        if (tiempoRestante === 0) setAreDisabled(true);
      }, 1000);
      return () => clearInterval(intervalo);
    }
  }, [start, tiempoRestante]);

  function calificacion(puntaje) {
    if (puntaje === 0) {
      return "0.0";
    }
    if (puntaje === 1) {
      return "0.62";
    }
    if (puntaje === 2) {
      return "1.25";
    }
    if (puntaje === 3) {
      return "1.87";
    }
    if (puntaje === 4) {
      return "2.5";
    }
    if (puntaje === 5) {
      return "3.12";
    }
    if (puntaje === 6) {
      return "3.75";
    }
    if (puntaje === 7) {
      return "4.37";
    }
    if (puntaje === 8) {
      return "5.0";
    }
  }

  const getUsername = () => {
    const userData = localStorage.getItem("userData");
    const parsedUserData = JSON.parse(userData);
    const username = parsedUserData.username;
    return username;
  };

  const getApproved = useCallback(() => {
    const score = parseFloat(calificacion(puntuacion));
    return score >= 3.0;
  }, [puntuacion]);

  const [formData, setFormData] = useState({
    username: "",
    score: 0,
    approved: false,
    module: "Lugares",
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      username: getUsername(),
      score: parseFloat(calificacion(puntuacion)),
      approved: getApproved(),
    }));
  }, [puntuacion, getApproved]);

  function enviarCalificacion() {
    listPrueba(6)
      .then((data) => {
        console.log("Datos recibidos:", data);

        const username = getUsername();
        const score = parseFloat(calificacion(puntuacion));
        const approved = getApproved();
        const module = "Lugares";

        if (data && data.length > 0) {
          // Actualizar calificación existente
          const updatedData = {
            ...data[0], // Se asume que solo hay un dato de prueba por usuario
            username,
            score,
            approved,
            module,
          };

          upDatePrueba(updatedData)
            .then((response) => {
              // Manejar la respuesta del servidor si es necesario
              console.log(response);
            })
            .catch((error) => {
              onError(error);
              Swal.fire({
                icon: "error",
                title: "Algo salió mal1",
                text: "Ocurrió un error al iniciar sesión, intenta de nuevo y verifica que tu usuario sea correcto",
                confirmButtonText: "Continuar",
                allowOutsideClick: false,
                showCancelButton: false,
              });
              console.error(error);
            });
        } else {
          // Crear nueva calificación
          const newData = {
            username,
            score,
            approved,
            module,
          };

          createPrueba(newData)
            .then((response) => {
              Swal.fire({
                icon: "success",
                title: "Que bien!",
                text: "Tu prueba ha sido enviada con éxito",
                confirmButtonText: "Continuar",
                allowOutsideClick: false,
                showCancelButton: false,
              });
              // Manejar la respuesta del servidor si es necesario
              console.log(response);
              setCalificacionEnviada(true); // Marcar la calificación como enviada
            })
            .catch((error) => {
              onError(error);
              // Manejar el error si ocurre
              console.error(error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const onError = (error) => {
    Swal.fire({
      icon: "error",
      title: "No superaste la nota que ya tenias :(",
      text: "Para poder enviar tu calificación tienes que sacar una mejor nota a la que tenias",
      confirmButtonText: "Continuar",
      allowOutsideClick: false,
      showCancelButton: false,
    });
  };

  if (isFinished)
    return (
      <div className="container-leccionSitios">
        <NavbarPrincipal />
        <div className="titulo-empezar">
          <img src={lecGastronomia} className="img-fluid" alt="Imagen" />
        </div>
        <div className="contenedor-quiz">
          <div className="juego-terminado">
            <span>Tu calificación fue {calificacion(puntuacion)}/5.0</span>
            <br></br>
            <button
              className="boton-quiz"
              onClick={() => {
                window.location.href = "/Temas/SitiosCaracteristicos/Quiz";
                setStart(false);
              }}
            >
              Volver a hacer quiz
            </button>
            <button
              onClick={enviarCalificacion}
              disabled={puntuacion < formData.score}
            >
              Enviar calificacion
            </button>
          </div>
        </div>
      </div>
    );

  return (
    <div className="container-leccionSitios">
      <NavbarPrincipal />
      <div className="titulo-empezar">
        <img src={lecGastronomia} className="img-fluid" alt="Imagen" />
      </div>
      <div className="contenedor-quiz">
        <div className="lado-izquierdo">
          <div className="numero-pregunta">
            <span> Pregunta {preguntaActual + 1} de</span> {preguntas.length}
          </div>
          <div className="titulo-pregunta">
            {preguntas[preguntaActual].titulo}
          </div>
          <div>
            {!areDisabled ? (
              <span className="tiempo-restante">
                Tiempo restante: {tiempoRestante}{" "}
              </span>
            ) : (
              <button
                className="boton-quizContinuar"
                onClick={() => {
                  setTiempoRestante(10);
                  setAreDisabled(false);
                  if (preguntaActual === preguntas.length - 1) {
                    setIsFinished(true);
                  } else {
                    setPreguntaActual(preguntaActual + 1);
                  }
                }}
              >
                Continuar
              </button>
            )}
          </div>
          <br></br>
          {!botonIniciar && ( // Ocultar si botonIniciar es true
            <button
              className="boton-quiz"
              onClick={() => {
                setStart(true);
                setBotonIniciar(true);
                console.log(start);
              }}
            >
              Iniciar quiz
            </button>
          )}
        </div>
        <div className="lado-derecho">
          {preguntas[preguntaActual].opciones.map((respuesta) => (
            <button
              className="boton-quizContinuar"
              disabled={areDisabled || !botonIniciar}
              key={respuesta.textoRespuesta}
              onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
            >
              {respuesta.textoRespuesta}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default QuizSitios;
