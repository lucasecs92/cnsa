import { useState, useEffect } from 'react';
import styles from '../styles/NavBar.module.css';

import logo from '../images/cnsa-logo-preview.png';

import { SlMenu } from "react-icons/sl";
import { IoIosCloseCircleOutline } from "react-icons/io";


const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // Novo estado para controle do menu

    // Função para abrir/fechar o menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    useEffect(() => {
        // Função para verificar se a largura da janela é menor ou igual a 790px
        const checkWindowSize = () => {
            setIsMobile(window.innerWidth <= 975);
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

                <nav className={styles.navBarPrimary}>
                    <aside>
                        <a href="#">🇧🇷</a>
                        <a href="#">🇺🇸</a>
                    </aside>
                </nav>
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
                        {isMobile && <SlMenu onClick={toggleMenu} />}
                    </nav>

                    {menuOpen && (
                        <div className={styles.overlay}>
                            <span className={styles.closeButtonContainer}>
                            <IoIosCloseCircleOutline onClick={toggleMenu}/>
                            </span>
                            <ul className={styles.mobileMenu}>
                                <li>Home</li>
                                <li>Sobre a Escola</li>
                                <li>Etapas de Ensino</li>
                                <li>Acontece no CNSA</li>
                            </ul>
                        </div>
                    )}
                </nav>
            </section>
        </>
    );
};

export default NavBar;