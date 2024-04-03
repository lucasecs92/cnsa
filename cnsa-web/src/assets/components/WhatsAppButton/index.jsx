import '../WhatsAppButton/style.scss';
import { useEffect, useState } from 'react';

import whatsapp from '../../images/whatsapp-btn.png';
import whatsappLogo from '../../images/whatsapp-btn-logo.png';

const WhatsAppButton = () => {

    const [image, setImage] = useState(whatsapp);

    const handleClick = () => {
        window.open('https://wa.me/5561999999999', '_blank');
    };

    useEffect(() => {
        const checkScreenSize = () => {
          if (window.innerWidth <= 720) {
            setImage(whatsappLogo);
          } else {
            setImage(whatsapp);
          }
        };
    
        window.addEventListener("resize", checkScreenSize);
        checkScreenSize();
    
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <>
            <section className="containerWhatsApp" onClick={handleClick}>
                <img src={image} alt="botão do WhatsApp" />
            </section>
        </>
    );
};

export default WhatsAppButton;