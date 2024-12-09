import imgLogo from '../Imagenes/ImagenDemon.png'
import { Link } from 'react-router-dom';


const Inicio = () => {
    return (
        <>
            <div className="box mt-1">
                <div className='card has-background-white mt-1'>
                    <div className='columns'>
                        <div className='column'>
                            <img src={imgLogo} width="400px" />
                        </div>
                        <div className='column'>
                            <h1 className='has-text-danger-dark is-size-1 mt-1 m-2'>Quiz Demon</h1>
                            <p className='has-text-primary-dark is-size-5 mt-5 has-text-left'>
                                Este proyecto es una aplicación de quiz interactivo sobre la serie Kimetsu no Yaiba,
                                creada con React y Vue, y estilizada usando Bulma CSS Framework.
                                El objetivo de la aplicación es evaluar los conocimientos de los usuarios sobre
                                la serie mediante un cuestionario de 10 preguntas. Al finalizar,
                                se muestran las respuestas correctas e incorrectas, brindando una retroalimentación completa.

                                
                            </p>
                            <Link to="/quiz">
                                <button className='button mt-5'> Comenzar Quiz</button>
                            </Link>
                        </div>
                    </div>


                </div>

            </div>
        </>
    );
}

export default Inicio;