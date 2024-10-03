import img_1 from '../Imagenes/Tanjiro.png'

const Quiz = () => {
    return (
        <div>
            <div className="box">
                <div className='card has-background-white mt-1'>
                    
                    <div className="columns">
                    <div className="column">
                            <div className="pregunta card">
                                ¿Cuál es el nombre del protagonista de Kimetsu no Yaiba?
                                <div className="columns mt-3">
                                    <div className="column">
                                        <button className="button">A) Zenitsu Agatsuma</button>
                                    </div>
                                    <div className="column">
                                        <button className="button">B) Tanjiro Kamado</button>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        <button className="button">C) Inosuke Hashibira</button>
                                    </div>
                                    <div className="column">
                                        <button className="button">D) Giyu Tomioka</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' '>
                            <div className="column">
                                <img src={img_1} width='65%' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Quiz;