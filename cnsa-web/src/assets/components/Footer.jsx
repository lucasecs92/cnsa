import styles from '../css/Footer.module.css';

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";


import logo from '../images/cnsa-logo-preview.png';

const Footer = () => {

    return (
        <>
            <section className={styles.containerFooter}>

                <section className={styles.mainFooter}>
                    <figure className={styles.logo}>
                        <img src={logo} alt="Logo CNSA" />
                    </figure>
                    <section className={styles.locationMap}>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2492.143098410863!2d-49.140680730521574!3d-14.524501340468404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x934309ec32aa8027%3A0x50a20f3a994268d2!2sCol%C3%A9gio%20Nossa%20Senhora%20Aparecida!5e0!3m2!1spt-BR!2sbr!4v1706813511891!5m2!1spt-BR!2sbr" 
                            width="400" 
                            height="300" 
                            style={{border:0}} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>   
                    </section>
                    <section className={styles.address}>
                        <h2>Nossa Unidade</h2>
                        <ul>
                            <li>
                                <span><BsTelephone/></span>
                                <p>Telefone: (62)3357-1341</p>
                            </li>
                            <li>
                                <span><GrLocation/></span>                                  
                                <p>Endereço: Rua Cel Aristides Ribeiro de Freitas, 2323 - Centro, Uruaçu - GO</p>
                            </li>
                        </ul>                        
                    </section>
                    
                </section>

                <section className={styles.secondaryFooter}>
                    <p>CNSA © | 2024 - Todos os Direitos Reservados</p>
                    <section className={styles.socialLogo}>
                        <a className={styles.socialItem} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/cnsa.uruacu/?locale=pt_BR"><FaFacebookF/></a>
                        <a className={styles.socialItem} target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCG8dqmSGw-oJOVuphi7zvWQ"><FaYoutube/></a>
                        <a className={styles.socialItem} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/cnsa.uruacu/?hl=pt"><FaInstagram/></a>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Footer;