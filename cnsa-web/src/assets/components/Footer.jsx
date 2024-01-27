import styles from '../css/Footer.module.css';

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {

    return (
        <>
            <section className={styles.containerFooter}>
                <section className={styles.mainFooter}>

                </section>
                <section className={styles.secondaryFooter}>
                    <p>Copyright © | 2024 - Todos os Direitos Reservados por CNSA</p>
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