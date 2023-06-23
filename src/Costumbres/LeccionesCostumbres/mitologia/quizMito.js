import preguntas from "./preguntasMito";
import "../../../style/css/quiz.css";
import { useState, useEffect } from "react";
import NavbarPrincipal from "../../../components/navbar2";
import lecMitologia from "../../../style/titulos/mitologia.png";

const QuizMitologia = () => {
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

  if (isFinished)
    return (
      <div className="contenedorLeccionesMito">
        <NavbarPrincipal />
        <div class="titulo-empezar">
          <img src={lecMitologia} class="img-fluid" alt="Imagen" />
        </div>
        <div className="contenedor-quiz">
          <div className="juego-terminado">
            <span>Tu calificación fue {calificacion(puntuacion)}/5.0</span>
            <br></br>
            <button
              className="boton-quiz"
              onClick={() => {
                window.location.href = "/Temas/Mitologia/Quiz";
                setStart(false);
              }}
            >
              Volver a hacer quiz
            </button>
          </div>
        </div>
      </div>
    );

  return (
    <div className="contenedorLeccionesMito">
      <NavbarPrincipal />
      <div class="titulo-empezar">
        <img src={lecMitologia} class="img-fluid" alt="Imagen" />
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

export default QuizMitologia;