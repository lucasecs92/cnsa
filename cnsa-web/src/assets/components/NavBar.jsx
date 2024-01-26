import styles from '../css/NavBar.module.css';

import logo from '../images/cnsa-logo-preview.png';

const NavBar = () => {
    
    return (
        <>
            <section className={styles.containerNavBar}>
                <nav className={styles.navBarMain}>
                    <figure className={styles.navBarLeft}>
                        <img src={logo} alt="Logo CNSA" />
                    </figure>
                    <nav className={styles.navBarRight}>
                        <ul>
                            <li>Home</li>
                            <li>Sobre a Escola</li>
                            <li>Etapas de Ensino</li>
                        </ul>
                        <aside>
                           <img src="#" alt="Inglês" />
                           <img src="#" alt="Português" />
                        </aside>
                    </nav>
                </nav>
            </section>
        </>
    )
}

export default NavBar;