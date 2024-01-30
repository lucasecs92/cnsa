import { useState } from 'react';
import styles from '../css/Steps.module.css';

import infantil from '../images/cnsa-educação-infantil.jpg';
import fundI from '../images/cnsa-ensino-fundamental1.jpg'; 
import fundII from '../images/cnsa-ensino-fundamental2.jpg';
import medio from '../images/cnsa-ensino-medio.jpg'; 

const Steps = () => {

    const [selectedStep, setSelectedStep] = useState(0);

    const steps = [
        { name: 'Educação Infantil', image: infantil, text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus beatae atque adipisci animi provident quas voluptas, dolor quidem dolorem, architecto aut! Accusamus repellendus laboriosam, placeat hic ab dolor. Dolore eaque atque quos nihil delectus sunt voluptatem iusto repudiandae expedita. Consequatur mollitia sit id alias enim atque porro iure soluta architecto harum, corporis qui officiis excepturi. ' },
        { name: 'Ensino Fundamental I', image: fundI, text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus beatae atque adipisci animi provident quas voluptas, dolor quidem dolorem, architecto aut! Accusamus repellendus laboriosam, placeat hic ab dolor. Dolore eaque atque quos nihil delectus sunt voluptatem iusto repudiandae expedita. Consequatur mollitia sit id alias enim atque porro iure soluta architecto harum, corporis qui officiis excepturi. ' },
        { name: 'Ensino Fundamental II', image: fundII, text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus beatae atque adipisci animi provident quas voluptas, dolor quidem dolorem, architecto aut! Accusamus repellendus laboriosam, placeat hic ab dolor. Dolore eaque atque quos nihil delectus sunt voluptatem iusto repudiandae expedita. Consequatur mollitia sit id alias enim atque porro iure soluta architecto harum, corporis qui officiis excepturi. ' },
        { name: 'Ensino Médio', image: medio, text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus beatae atque adipisci animi provident quas voluptas, dolor quidem dolorem, architecto aut! Accusamus repellendus laboriosam, placeat hic ab dolor. Dolore eaque atque quos nihil delectus sunt voluptatem iusto repudiandae expedita. Consequatur mollitia sit id alias enim atque porro iure soluta architecto harum, corporis qui officiis excepturi. ' },
    ];

    return (
        <>
            <section className={styles.containerSteps}>
                <section className={styles.stepsWrap}>
                    <h2>Etapas de Ensino</h2>
                    <ul className={styles.stepsUl}>
                        {steps.map((step, index) => (
                            <li key={index} 
                                className={index === selectedStep ? styles['active'] : ''}
                                onClick={(event) => {
                                event.preventDefault();
                                setSelectedStep(index);
                            }}>
                                <a href="">{step.name}</a>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.line}></div>

                    <section className={styles.stepsInfo}>
                        {selectedStep !== null && (
                            <>
                                <img src={steps[selectedStep].image} alt={steps[selectedStep].name} />
                                <aside>
                                    <p>{steps[selectedStep].text}</p>
                                    <a href="#">
                                        <span>Saiba Mais</span>
                                    </a>
                                </aside>
                            </>
                        )}
                    </section>
                    
                    {/* <ul className={styles.stepsUl}>
                        <li>
                            <a href="">Educação Infantil</a>
                        </li>
                        <li>
                            <a href="">Ensino Fundamental I</a>
                        </li>
                        <li>
                            <a href="">Ensino Fundamental II</a>
                        </li>
                        <li>
                            <a href="">Ensino Médio</a>
                        </li>
                    </ul> */}
                    {/* <section className={styles.stepsInfo}>
                        <img src={infantil} alt="imagem educação infantil" />
                        <aside>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat sed voluptate eos mollitia, saepe fugiat iure corrupti tenetur delectus ipsa eaque optio, non numquam dolor officia ad illum ipsum odit!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio libero, sed perferendis voluptas ipsum quibusdam, temporibus eius, incidunt esse reiciendis architecto ut dolorum? Nobis enim tempora perferendis deleniti aut animi!
                            </p>
                            <a href="#">
                                <span>Saiba Mais</span>
                            </a>
                        </aside>
                    </section> */}
                </section>
            </section>
        </>
    )
}

export default Steps; 