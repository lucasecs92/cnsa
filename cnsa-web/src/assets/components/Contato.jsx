import styles from '../styles/Contato.module.css';

const Contato = () => {

    return (
        <>
            <section className={styles.containerContato} >
                <section className={styles.contatoWrap}>
                    <div className={styles.contatoTopo}>
                        <h2>Fale Conosco</h2>
                        <a href="#">contato@escola.com.br</a>
                    </div>
                    <form className={styles.contatoForm}>
                        <input type="text" id='nome' name='name' placeholder='Nome' required className={styles.inputs}/>
                        <input type="email" id='email' name='email' placeholder='E-mail' required className={styles.inputs}/>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Mensagem' required></textarea>
                        <input type="submit" value="Enviar" className={styles.submitBtn}/>
                    </form>
                </section>
            </section>
        </>
    )
}

export default Contato;