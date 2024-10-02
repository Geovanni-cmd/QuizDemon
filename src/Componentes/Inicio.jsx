import imgLogo from '../Imagenes/ImagenDemon.png'


const Inicio = () => {
    return (
        <>
            <div className="box mt-1">
                <div className='card has-background-white mt-1'>
                    <img src={imgLogo} width="200px" />
                    <h1 className='has-text-danger-dark is-size-1 mt-1 m-2'>Quiz Demon</h1>
                    <p className='has-text-primary-dark is-size-5 mt-5'>
                        Este proyecto es una aplicación de quiz interactivo sobre la serie Kimetsu no Yaiba,
                        creada con React y Vue, y estilizada usando Bulma CSS Framework.
                        El objetivo de la aplicación es evaluar los conocimientos de los usuarios sobre
                        la serie mediante un cuestionario de 10 preguntas. Al finalizar,
                        se muestran las respuestas correctas e incorrectas, brindando una retroalimentación completa.
                    </p>


                </div>

            </div>
        </>
    );
}

export default Inicio;