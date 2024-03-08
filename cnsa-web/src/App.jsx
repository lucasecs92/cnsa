import styles from './assets/styles/App.module.css';
import './assets/styles/global.module.css';

import NavBar from './assets/components/NavBar';
import Banner from './assets/components/Banner';
import Parallax from './assets/components/Parallax';
import Steps from './assets/components/Steps';
import Diferenciais from './assets/components/Diferenciais';
import WhatsAppButton from './assets/components/WhatsAppButton';
import Footer from './assets/components/Footer';
import Proposta from './assets/components/Proposta';
import Contato from './assets/components/Contato';

function App() {

  return (
    <>
      <section className={styles.containerMain}>
          <header>
            <NavBar/>
          </header>
          <main>
            <Banner/>
            <Proposta/>
            <Parallax/>
            <Steps/>
            <Diferenciais/>
            <Contato/>

            <WhatsAppButton/>
          </main>
          <footer>
            <Footer/>
          </footer>
      </section>
    </>
  )
}

export default App;
