import styles from '../css/Proposta.module.css';

import propostaImg from '../images/cnsa-formandos.jpg';

const Proposta = () => {

    return (
        <>
            <section className={styles.containerProposta}>
                <section className={styles.propostaWrap}>
                    <aside>
                        <h2>Proposta Pedagógica</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis atque rem nesciunt recusandae neque, quod tempore aliquid saepe odio non esse minus incidunt dicta cupiditate obcaecati dolore id. Laborum, assumenda?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ullam fugit deleniti recusandae deserunt odio tenetur facilis, voluptas, illo eius adipisci voluptatem molestias totam aut delectus eos mollitia quam quae!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas repellendus repudiandae mollitia vero a nulla sequi blanditiis illum. 
                        </p>
                        <a href="" className={styles.propostaBtn}>Saiba mais</a>
                    </aside>
                    <figure>
                        <img 
                            className={styles.propostaImage}
                            src={propostaImg} 
                            alt="foto dos alunos" 
                        />
                    </figure>
                </section>
            </section>
        </>
    )
}

export default Proposta;