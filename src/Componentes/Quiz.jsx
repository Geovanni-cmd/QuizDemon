import { useState } from 'react';
import img_1 from '../Imagenes/Tanjiro.png'
import img_2 from '../Imagenes/Respiraciones.png'
import img_3 from '../Imagenes/Nezuko.png'
import img_4 from '../Imagenes/Muzan.png'
import img_5 from '../Imagenes/Nezuko_1.png'
import img_6 from '../Imagenes/Jigoro.png'
import img_7 from '../Imagenes/Kyogai.png'
import img_8 from '../Imagenes/Inosuke.png'
import img_9 from '../Imagenes/Urokodaki.png'
import '../Componentes/estilos.css'
import { useNavigate } from 'react-router-dom';


const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Índice de la pregunta actual
    const [userAnswers, setUserAnswers] = useState([]);  //Array de respuestas del usuario
    const [selectedAnswer, setSelectedAnswer] = useState(null); // Guardar la opción seleccionada
    const navigate = useNavigate();



    const preguntas = [
        {
            id: 1,
            pregunta: "¿Cuál es el nombre del protagonista de Kimetsu no Yaiba?",
            opciones: ["A) Zenitsu Agatsuma", "B) Tanjiro Kamado", "C) Inosuke Hashibira", "D) Giyu Tomioka"],
            respuestaCorrecta: "B) Tanjiro Kamado",
            imagen: img_1,
        },
        {
            id: 2,
            pregunta: "¿Cuál es la respiración que utiliza Tanjiro?",
            opciones: ["A) Respiración de la Roca", "B) Respiración del Agua", "C) Respiración de la Bestia", "D) Respiración del Trueno"],
            respuestaCorrecta: "B) Respiración del Agua",
            imagen: img_2,
        },
        {
            id: 3,
            pregunta: "¿Qué convierte a Nezuko en un demonio?",
            opciones: ["A) Un demonio la ataca", "B) Se expone a la luz de la luna", "C) Toma una poción maldita", "D) Es mordida por otro demonio"],
            respuestaCorrecta: "A) Un demonio la ataca",
            imagen: img_3,
        },
        {
            id: 4,
            pregunta: "¿Cómo se llama el villano principal de Kimetsu no Yaiba?",
            opciones: ["A) Kibutsuji Muzan", "B) Akaza", "C) Enmu", "D) Gyutaro"],
            respuestaCorrecta: "A) Kibutsuji Muzan",
            imagen: img_4,
        },
        {
            id: 5,
            pregunta: "¿Cuál es la habilidad especial de Nezuko como demonio?",
            opciones: ["A) Puede volar", "B) Puede controlar el fuego", "C) Puede reducir su tamaño", "D) Puede regenerarse rápidamente"],
            respuestaCorrecta: "C) Puede reducir su tamaño",
            imagen: img_5,
        },
        {
            id: 6,
            pregunta: "¿Cuál es el nombre del Pilar del Trueno?",
            opciones: ["A) Kyojuro Rengoku", "B) Jigoro Kuwajima", "C) Sanemi Shinazugawa", "D) Kaigaku"],
            respuestaCorrecta: "D) Jigoro Kuwajima",
            imagen: img_6,
        },
        {
            id: 7,
            pregunta: "¿Qué demonio derrotó Tanjiro en su primer combate real?",
            opciones: ["A) Rui", "B) Sabito", "C) Kyogai", "D) Tamayo"],
            respuestaCorrecta: "C) Kyogai",
            imagen: img_7,
        },
        {
            id: 8,
            pregunta: "¿Qué caracteriza a Inosuke Hashibira?",
            opciones: ["A) Es tímido y callado", "B) Siempre usa una máscara de jabalí", "C) Usa la Respiración del Trueno", "D) Es el hermano de Zenitsu"],
            respuestaCorrecta: "B) Siempre usa una máscara de jabalí",
            imagen: img_8,
        },
        {
            id: 9,
            pregunta: "¿Quién es el mentor de Tanjiro?",
            opciones: ["A) Kyojuro Rengoku", "B) Urokodaki Sakonji", "C) Giyu Tomioka", "D) Sabito"],
            respuestaCorrecta: "B) Urokodaki Sakonji",
            imagen: img_9,
        },
        {
            id: 10,
            pregunta: "¿Cuál es el objetivo principal de Tanjiro en la serie?",
            opciones: ["A) Convertirse en el Pilar del Fuego", "B) Derrotar a Kibutsuji Muzan", "C) Encontrar a su padre", "D) Curar a su hermana Nezuko"],
            respuestaCorrecta: "D) Curar a su hermana Nezuko",
            imagen: img_1,
        },
    ];


    const handleNextQuestion = () => {
        //Se verifica si se a seleccionado una respuesta
        if (selectedAnswer !== null) {
            setUserAnswers([...userAnswers, selectedAnswer]);

            if (currentQuestionIndex < preguntas.length - 1) {
                setSelectedAnswer(null); // Resetear opción seleccionada
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                // Si ya se contestaron todas las preguntas, navegar a la página de resultados
                navigate('/resultados', { state: { preguntas, userAnswers: [...userAnswers, selectedAnswer] } });
            }
        } else {
            alert("Selecciona una respuesta antes de continuar");
        }
    };
    /*const handleAnswer = (answer) => {
        setUserAnswers([...userAnswers, answer]);
        //Ir a la soiguiente pregunta si no es la ultima
        if (currentQuestionIndex < preguntas.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        } else {
            //Mostrar resultados del quiz al finalizar
            console.log("Quiz terminado");

        }
    }*/


    return (
        <div>
            <div className="bo">
                <div className='card has-background-white mt-1'>
                    <div className="pregunta card ">
                        <p className='is-size-4 has-text-primary'>{preguntas[currentQuestionIndex].id} .- {preguntas[currentQuestionIndex].pregunta}                                    </p>
                    </div>
                    <div className="columns">

                        <div className='card card-custom '>
                            <div className="column card-content">
                                <div className='content'>
                                    {preguntas[currentQuestionIndex].opciones.map((opc, index) => (
                                        <div className='columns'>
                                            <div className='column'>
                                                <button
                                                    key={index}
                                                    className={selectedAnswer === opc ? "button is-primary" : "button" /*Se define de que color sera el button*/}
                                                    onClick={() => setSelectedAnswer(opc)}
                                                >
                                                    {opc}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button className={currentQuestionIndex != preguntas.length - 1 ? "button is-info mt-4" : "button is-danger mt-4"} onClick={handleNextQuestion}>
                                {currentQuestionIndex != preguntas.length - 1 ? "Siguiente" : "Finalizar"}
                            </button>
                        </div>



                        <div className="column">
                            <img src={preguntas[currentQuestionIndex].imagen} class="has-border"
                                style={{ width: '300px', height: '400px', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Quiz;