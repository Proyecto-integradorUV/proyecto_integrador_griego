import preguntas from "./preguntas";
import "../../../style/css/quiz.css";
import "../../../style/css/contenedores.css";
import { useState, useEffect, useCallback } from "react";
import lecGastronomia from "../../../style/titulos/arte.png";
import {
  createPrueba,
  listPrueba,
  upDatePrueba,
} from "../../../Services/users";
import Swal from "sweetalert2";
import NavbarArte from "../../../components/navArte";

const QuizArte = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);

  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(60);
  const [areDisabled, setAreDisabled] = useState(false);
  const [start, setStart] = useState(false);
  const [botonIniciar, setBotonIniciar] = useState(false);

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
    }, 1000);
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
      return "0.6";
    }
    if (puntaje === 2) {
      return "1.2";
    }
    if (puntaje === 3) {
      return "1.8";
    }
    if (puntaje === 4) {
      return "2.5";
    }
    if (puntaje === 5) {
      return "3.1";
    }
    if (puntaje === 6) {
      return "3.7";
    }
    if (puntaje === 7) {
      return "4.4";
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

  function enviarCalificacion() {
    listPrueba(3)
      .then((data) => {
        console.log("Datos recibidos:", data);

        const username = getUsername();
        const score = parseFloat(calificacion(puntuacion));
        const approved = getApproved();
        const module = "Arte";

        if (data && data.length > 0) {
          // Actualizar calificación existente
          const updatedData = {
            ...data[0], // Se asume que solo hay un dato de prueba por usuario
            username,
            score,
            approved,
            module,
          };

          console.log("el puntaje es", score);
          console.log("en la data está", data.score);

          upDatePrueba(updatedData)
            .then((response) => {
              Swal.fire({
                icon: "success",
                title: "Calificación enviada",
                text: "La calificación se ha enviado correctamente.",
              });
              // Manejar la respuesta del servidor si es necesario
              console.log(response);
            })
            .catch((error) => {
              Swal.fire({
                icon: "error",
                title: "Error al enviar la calificación",
                text: "Ha ocurrido un error al enviar la calificación. Por favor, intenta nuevamente.",
              });
              // Manejar el error si ocurre
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
          console.log("el puntaje es2", score);
          console.log("en la data está2", data.score);

          createPrueba(newData)
            .then((response) => {
              Swal.fire({
                icon: "success",
                title: "Calificación enviada",
                text: "La calificación se ha enviado correctamente.",
              });
              // Manejar la respuesta del servidor si es necesario
              console.log(response);
            })
            .catch((error) => {
              Swal.fire({
                icon: "error",
                title: "Error al enviar la calificación",
                text: "Ha ocurrido un error al enviar la calificación. Por favor, intenta nuevamente.",
              });
              // Manejar el error si ocurre
              console.error(error);
            });
        }
      })
      .catch((error) => {
        // Manejar el error si ocurre
        console.error(error);
      });
  }

  if (isFinished)
    return (
      <div className="contenedor-inicial-arte">
        <NavbarArte />
        <div className="titulo-empezar">
          <img src={lecGastronomia} className="img-fluid" alt="Imagen" />
        </div>
        <div className="contenedor-quiz">
          <div className="juego-terminado">
            <span>Tu calificación fue {calificacion(puntuacion)}/8.0</span>
            <br></br>
            <button
              className="boton-quiz"
              onClick={() => {
                window.location.href = "/Temas/Arte/Quiz";
                setStart(false);
              }}
            >
              Volver a hacer quiz
            </button>
            <button onClick={enviarCalificacion}>Enviar calificación</button>
          </div>
        </div>
      </div>
    );

  return (
    <div className="contenedor-inicial-arte">
      <NavbarArte />
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

export default QuizArte;
