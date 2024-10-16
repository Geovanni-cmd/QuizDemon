import React from 'react';
import { useLocation } from 'react-router-dom';

const Resultados = () => {
    const location = useLocation();
    const { preguntas, userAnswers } = location.state; // Obtener las preguntas y respuestas

    return (
        <div>
            <div className='card has-background-white   '>
                <h1 className='is-size-2 has-text-black'>Resultados del Quiz</h1>
                

            </div>

            {preguntas.map((pregunta, index) => (
                <div key={index}>
                    <h3>{pregunta.pregunta}</h3>
                    <p>Tu respuesta: {userAnswers[index]}</p>
                    <p>Respuesta correcta: {pregunta.respuestaCorrecta}</p>
                </div>
            ))}
        </div>
    );
}

export default Resultados;