import preguntas from "./preguntasGastro";
import "./quizGastro.css";
import { useState, useEffect } from "react";
import NavbarPrincipal from "../../../components/navbar2";
import lecGastronomia from "../../../style/titulos/gastronomia.png";

const QuizGastronomia = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);

  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(10);
  const [areDisabled, setAreDisabled] = useState(false);

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
        setTiempoRestante(10);
      }
    }, 1500);
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiempoRestante === 0) setAreDisabled(true);
    }, 1000);
    return () => clearInterval(intervalo);
  }, [tiempoRestante]);

  function calificacion(puntaje) {
    if (puntaje === 0) {
      return "0.0";
    }
    if (puntaje === 1) {
      return "2.5";
    }
    if (puntaje === 2) {
      return "5.0";
    }
    if (puntaje === 3) {
      return "3.0";
    }
    if (puntaje === 4) {
      return "4.0";
    }
    if (puntaje === 5) {
      return "5.0";
    }
  }

  if (isFinished)
    return (
      <div className="contenedorHistoria">
        <NavbarPrincipal />
        <div class="titulo-empezar">
          <img src={lecGastronomia} class="img-fluid" alt="Imagen" />
        </div>
        <div className="contenedor-quiz">
          <div className="juego-terminado">
            <span>Tu calificación fue {calificacion(puntuacion)}/5</span>
            <br></br>
            <button
              className="boton-quiz"
              onClick={() => (window.location.href = "/Temas/Mitologia/Quiz")}
            >
              Volver a hacer quiz
            </button>
          </div>
        </div>
      </div>
    );

  return (
    <div className="contenedorHistoria">
      <NavbarPrincipal />
      <div class="titulo-empezar">
        <img src={lecGastronomia} class="img-fluid" alt="Imagen" />
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
        </div>
        <div className="lado-derecho">
          {preguntas[preguntaActual].opciones.map((respuesta) => (
            <button
              className="boton-quiz"
              disabled={areDisabled}
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

export default QuizGastronomia;
