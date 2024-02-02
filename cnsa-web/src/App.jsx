import styles from './assets/css/App.module.css';
import './assets/css/global.module.css';

import NavBar from './assets/components/NavBar';
import Banner from './assets/components/Banner';
import Parallax from './assets/components/Parallax';
import Steps from './assets/components/Steps';
import Diferenciais from './assets/components/Diferenciais';
import WhatsAppButton from './assets/components/WhatsAppButton';
import Footer from './assets/components/Footer';

function App() {

  return (
    <>
      <section className={styles.containerMain}>
          <header>
            <NavBar/>
          </header>
          <main>
            <Banner/>
            <Parallax/>
            <Steps/>
            <Diferenciais/>

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
