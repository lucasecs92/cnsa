import styles from '../css/WhatsAppButton.module.css';

import whatsapp from '../images/whatsapp-btn.png';

const WhatsAppButton = () => {

 const handleClick = () => {
    window.open('https://wa.me/5561993478759', '_blank');
 };

 return (
    <>
        <section className={styles.containerWhatsApp} onClick={handleClick}>
            <img src={whatsapp} alt="botão do WhatsApp" />
        </section>
    </>
 );
};

export default WhatsAppButton;