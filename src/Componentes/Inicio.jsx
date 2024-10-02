import imgLogo from '../Imagenes/ImagenDemon.png'

const Inicio = () => {
    return (
        <>
            <div className="box ">
                <div className='card has-background-white'>
                    <img src={imgLogo} width="200px" />
                    <h1 className='has-text-danger-dark is-size-1 mt-1 m-2'>Quiz Demon</h1>
                    <p className='has-text-primary-dark is-size-5'> texto raro solo para describir por el momentos todo el proyecto que estoy realizando</p>

                </div>

            </div>
        </>
    );
}

export default Inicio;