const Quiz = () => {
    return (
        <div>
            <div className="box">
                <div className='card has-background-white mt-1'>
                    <div className="columns">
                        <div className="column">
                            <img src="" alt="Oli" />
                        </div>
                        <div className="column">
                            <div className="pregunta card">
                                Primera preguntas
                            </div>
                            <div className="opciones card">
                                <div className="columns">
                                    <div className="column">
                                        <button className="button">a</button>
                                        <button className="button">b</button>
                                    </div>
                                    <div className="column">
                                        <button className="button">c</button>
                                        <button className="button">d</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Quiz;