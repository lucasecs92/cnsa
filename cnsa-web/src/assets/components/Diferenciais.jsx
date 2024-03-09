import '../styles/diferenciais.scss';

import zoo from '../images/cnsa-zoo.png';
import bilingue from '../images/criança-bilingue.jpg';
import metodologia from '../images/sas.png';

const Diferenciais = () => {

    return (
        <>
            <section className="containerDiferenciais">
                <h2>Acontece no CNSA</h2>
                <section className="diferenciaisWrap">
                    <aside>
                        <img src={zoo} 
                             alt="Foto do passeio para o Zoo" 
                             className="diferenciaisImg"
                        />
                        <h3>Viagem pedagógica - Zoológico</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae vel quas eos voluptate iusto distinctio voluptatum obcaecati. Tenetur impedit, harum magnam, laudantium suscipit minima maiores pariatur nulla soluta veniam accusantium?</p>
                    </aside>
                    <aside>
                        <img src={bilingue} 
                             alt="" 
                             className="diferenciaisImg"
                        />
                        <h3>Educação Bilíngue</h3>
                        <p>Entendemos que a comunicação é um dos pilares para a formação dos estudantes. Assim, tem-se o foco no desenvolvimento da linguagem, incentivando o aprendizado bilíngue desde a Educação Infantil.</p>
                    </aside>
                    <aside>
                        <img src={metodologia} 
                             alt="logo da metodologia SAS" 
                             className="diferenciaisImg"
                        />
                        <h3>Metodologia SAS</h3>
                        <p>O material didático SAS possibilita aos alunos o desenvolvimento da leitura e da escrita, o reconhecimento de signos matemáticos e a compreensão dos registros artísticos, midiáticos e científicos.</p>
                    </aside>
                </section>
            </section>
        </> 
    )
}

export default Diferenciais;