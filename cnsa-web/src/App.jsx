import './assets/styles/app.css';
import './assets/styles/_config.scss';

import NavBar from './assets/components/NavBar';
import Banner from './assets/components/Banner';
import Parallax from './assets/components/Parallax';
import Steps from './assets/components/Steps';
import Diferenciais from './assets/components/Diferenciais';
import WhatsAppButton from './assets/components/WhatsAppButton';
import Footer from './assets/components/Footer';
import Proposta from './assets/components/Proposta';
import Contato from './assets/components/Contato';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (isOpen) => {
     setIsMenuOpen(isOpen);
  };

  return (
    <>
      <section className="containerMain">
          <header>
            <NavBar onMenuToggle={handleMenuToggle}/>
          </header>
          <main>
            <Banner/>
            <Proposta/>
            <Parallax/>
            <Steps/>
            <Diferenciais/>
            <Contato/>

            {!isMenuOpen && <WhatsAppButton/>}
          </main>
          <footer>
            <Footer/>
          </footer>
      </section>
    </>
  )
}

export default App;
