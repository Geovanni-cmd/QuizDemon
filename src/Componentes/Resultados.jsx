import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Resultados = () => {
    const location = useLocation();
    const { preguntas, userAnswers } = location.state; // Obtener las preguntas y respuestas

    // Contadores de respuestas correctas e incorrectas
    let correctas = 0;
    let incorrectas = 0;

    // Recorrer las preguntas para contar las respuestas correctas e incorrectas
    preguntas.forEach((pregunta, index) => {
        if (userAnswers[index] === pregunta.respuestaCorrecta) {
            correctas++;
        } else {
            incorrectas++;
        }
    });

    return (
        <div>
            <div className='card content has-background-white   '>
                <h1 className='is-size-2 has-text-black'>Resultados del Quiz:  {correctas} / {correctas+incorrectas}</h1>
                <div className='content mt-4'>

                    {preguntas.map((pregunta, index) => (
                        <div key={index}>
                            <div className={userAnswers[index] == pregunta.respuestaCorrecta ? "card has-background-success mt-4" : "card has-background-danger mt-4"}>
                                <div className='column'>
                                    <h3 className='is-size-4 has-text-black'>{pregunta.pregunta}</h3>
                                    <p className='is-size-5 has-text-black'>Tu respuesta:{userAnswers[index]}</p>
                                    <p className='is-size-5 has-text-dark has-text-weight-bold'> {userAnswers[index] == pregunta.respuestaCorrecta ? "CORRECTO" : "INCORRECTO"}</p>
                                </div>
                            </div>


                        </div>
                    ))}
                </div>


            </div>


        </div>
    );
}

export default Resultados;