import '../Footer/style.scss';

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";


import logo from '../../images/cnsa-logo-preview.webp';

const Footer = () => {

    return (
        <>
            <section className="containerFooter">

                <section className="mainFooter">
                    <figure className="logo">
                        <img src={logo} alt="Logo CNSA" />
                    </figure>
                    <section className="locationMap">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2492.143098410863!2d-49.140680730521574!3d-14.524501340468404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x934309ec32aa8027%3A0x50a20f3a994268d2!2sCol%C3%A9gio%20Nossa%20Senhora%20Aparecida!5e0!3m2!1spt-BR!2sbr!4v1706813511891!5m2!1spt-BR!2sbr&loading=async" 
                            width="400" 
                            height="300" 
                            style={{border:0}} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="CNSA localização"                        
                        >
                        </iframe>   
                    </section>
                    <section className="address">
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

                <section className="secondaryFooter">
                    <p>© CNSA | 2024 - Todos os Direitos Reservados | Feito por 
                        <a className="creator" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lucas-eduardo-cavalcante/"> Lucasecs</a>
                    </p>
                    <section className="socialLogo">
                        <a className="socialItem" target="_blank" rel="noopener noreferrer" aria-label="Acesse o nosso Facebook" href="https://www.facebook.com/cnsa.uruacu/?locale=pt_BR"><FaFacebookF/></a>
                        <a className="socialItem" target="_blank" rel="noopener noreferrer" aria-label="Nosso canal no YouTube" href="https://www.youtube.com/channel/UCG8dqmSGw-oJOVuphi7zvWQ"><FaYoutube/></a>
                        <a className="socialItem" target="_blank" rel="noopener noreferrer" aria-label="Acesse o nosso Instagram" href="https://www.instagram.com/cnsa.uruacu/?hl=pt"><FaInstagram/></a>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Footer;