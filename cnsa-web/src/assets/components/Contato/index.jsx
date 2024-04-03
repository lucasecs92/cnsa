import '../Contato/style.scss';

const Contato = () => {

    return (
        <>
            <section className="containerContato">
                <section className="contatoWrap">
                    <div className="contatoTopo">
                        <h2>Fale Conosco</h2>
                        <a href="#">contato@escola.com.br</a>
                    </div>
                    <form className="contatoForm">
                        <input type="text" id='nome' name='name' placeholder='Nome' required className="inputs"/>
                        <input type="email" id='email' name='email' placeholder='E-mail' required className="inputs"/>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Mensagem' required></textarea>
                        <input type="submit" value="Enviar" className="submitBtn"/>
                    </form>
                </section>
            </section>
        </>
    )
}

export default Contato;