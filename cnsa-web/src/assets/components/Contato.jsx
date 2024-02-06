import styles from '../css/Contato.module.css';

const Contato = () => {

    return (
        <>
            <section className={styles.containerContato} >
                <section className={styles.contatoWrap}>
                    <div className={styles.contatoTopo}>
                        <h2>Fale Conosco</h2>
                        <a href="">contato@escola.com.br</a>
                    </div>
                    <form className={styles.contatoForm}>
                        <input type="text" id='nome' name='name' placeholder='Nome' required />
                        <input type="email" id='email' name='email' placeholder='E-mail' required />
                        <textarea name="message" id="message" cols="30" rows="10" required></textarea>
                        <input className={styles.submitBtn} type="submit" value="ENVIAR"/>
                    </form>
                </section>
            </section>
        </>
    )
}

export default Contato;