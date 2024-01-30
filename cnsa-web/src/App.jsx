import styles from './assets/css/App.module.css';
import './assets/css/global.module.css';

import NavBar from './assets/components/NavBar';
import Footer from './assets/components/Footer';
import Banner from './assets/components/Banner';
import Steps from './assets/components/Steps';
import WhatsAppButton from './assets/components/WhatsAppButton';

function App() {

  return (
    <>
      <section className={styles.containerMain}>
          <header>
            <NavBar/>
          </header>
          <main>
            <Banner/>
            <Steps/>
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
