import { useState, useEffect } from 'react';
import '../styles/navbar.scss';

import logo from '../images/cnsa-logo-preview.png';
import ptbrIcon from '../images/icon-pt-br.png'; 
import usIcon from '../images/icon-us.png';

import { SlMenu } from "react-icons/sl";
import { IoIosCloseCircleOutline } from "react-icons/io";

import PropTypes from 'prop-types';

const NavBar = ({ onMenuToggle }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // Novo estado para controle do menu

    // Função para abrir/fechar o menu
    const toggleMenu = () => {
        const newMenuOpen = !menuOpen;
        setMenuOpen(newMenuOpen);
        onMenuToggle(newMenuOpen); // Atualiza o estado no componente App
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
            <section className="containerNavBar">

                <nav className="navBarPrimary">
                    <aside>
                        <a href="#">
                            <img src={ptbrIcon} alt="Traduzir a página para o idioma Português Brasileiro"/>
                        </a>
                        <a href="#">
                            <img src={usIcon} alt="Traduzir a página para o idioma Inglês Americano" />
                        </a>
                    </aside>
                </nav>
                <nav className="navBarMain">
                    <figure className="navBarLeft">
                        <img src={logo} alt="Logo CNSA" />
                    </figure>
                    <nav className="navBarRight">
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
                        <div className="overlay">
                            <span className="closeButtonContainer">
                            <IoIosCloseCircleOutline onClick={toggleMenu}/>
                            </span>
                            <ul className="mobileMenu">
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

NavBar.propTypes = {
    onMenuToggle: PropTypes.func.isRequired,
};

export default NavBar;