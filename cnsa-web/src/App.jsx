import styles from './assets/css/App.module.css';
import './assets/css/global.module.css';

import NavBar from './assets/components/NavBar';
import Footer from './assets/components/Footer';

function App() {

  return (
    <>
     <section className={styles.containerMain}>
        <header>
          <NavBar/>
        </header>
        <main></main>
        <footer>
          <Footer/>
        </footer>
     </section>
    </>
  )
}

export default App;
