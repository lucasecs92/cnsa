import { useState, useEffect } from 'react';
import styles from '../css/NavBar.module.css';
import logo from '../images/cnsa-logo-preview.png';
import { SlMenu } from "react-icons/sl";

const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Função para verificar se a largura da janela é menor ou igual a 790px
        const checkWindowSize = () => {
            setIsMobile(window.innerWidth <= 790);
        };

        // Adiciona o event listener para verificar o tamanho da janela
        window.addEventListener('resize', checkWindowSize);

        // Chama a função para verificar o tamanho inicial da janela
        checkWindowSize();

        // Limpa o event listener quando o componente for desmontado
        return () => window.removeEventListener('resize', checkWindowSize);
    }, []);

    return (
        <>
            <section className={styles.containerNavBar}>
                <nav className={styles.navBarMain}>
                    <figure className={styles.navBarLeft}>
                        <img src={logo} alt="Logo CNSA" />
                    </figure>
                    <nav className={styles.navBarRight}>
                        {!isMobile && (
                            <ul>
                                <li>Home</li>
                                <li>Sobre a Escola</li>
                                <li>Etapas de Ensino</li>
                                <li>Acontece no CNSA</li>
                            </ul>
                        )}
                        {isMobile && <SlMenu />}
                        <aside>
                            <a href="#">🇧🇷</a>
                            <a href="#">🇺🇸</a>
                        </aside>
                    </nav>
                </nav>
            </section>
        </>
    );
};

export default NavBar;