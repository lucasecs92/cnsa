import '../Cookies/style.scss'; 
import { LuCookie } from "react-icons/lu";
import Tooltip from '@mui/material/Tooltip'; 
import { useEffect, useState } from 'react';

import logo from '../../images/cnsa-logo-preview.webp';

const Cookies = () => {

  const [openDialog, setOpenDialog] = useState(false); // Adiciona o estado para controlar a visibilidade do dialog
  
  useEffect(() => {
    if (openDialog) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [openDialog]);

  const handleOpenDialog = () => {
    setOpenDialog(true); // Abre o dialog ao clicar no Tooltip
  };
 
  const handleCloseDialog = () => {
    setOpenDialog(false); // Fecha o dialog ao clicar no botão Ok
  };

  return (
    <section className="containerCookies">
      <section className='containerCookiesWrap'> 
        <Tooltip 
          title="Definições de Cookies" 
          placement='right' 
          arrow
          onClick={handleOpenDialog}
        >
          <button aria-label='Abrir diálogo'>
            <LuCookie/>
          </button>
        </Tooltip>
      </section>

      {openDialog && <section className="overlay">
        <dialog open={openDialog}>
          <header>
            <img src={logo} alt="logo cnsa" />
          </header>
          <main>
            <h2>Title</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis consequatur magni voluptates nam eligendi alias repellendus quasi minus, atque veniam totam sunt, est officia dignissimos? Dolor facere reprehenderit, vel molestias consectetur, deserunt dignissimos debitis ad doloremque eius assumenda non mollitia rem! Quae eius distinctio natus sapiente voluptas fugiat. Quidem tempora quibusdam provident, molestiae, magnam soluta pariatur necessitatibus quisquam et eligendi at fugit accusantium? Sit officia enim minus sapiente illo distinctio doloremque recusandae, voluptate quia culpa modi consequatur quas eos blanditiis corporis neque aut asperiores ex temporibus soluta in tenetur dolorem et repudiandae! Expedita corporis dicta ad magni corrupti magnam!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At dicta dolores asperiores, eaque nihil atque voluptatibus accusamus! Velit illum sint blanditiis quae harum modi, obcaecati voluptate rerum nihil! Id est, sapiente, quam accusantium atque placeat odio obcaecati commodi, aliquid unde dicta? Ad iusto adipisci repellat accusamus assumenda ipsam odit iste placeat aliquid hic quibusdam mollitia praesentium nihil dicta doloremque sunt blanditiis tempora cum nobis ducimus dolorem, ipsa, distinctio sequi a! Excepturi nihil quia dolorum quos, corrupti est! Quod unde blanditiis numquam maiores ducimus voluptatem maxime fuga sint cumque voluptatibus officia dolore, inventore error ab! Eum velit perspiciatis reiciendis, incidunt aliquam magni dicta, laudantium aut commodi aliquid, totam quas voluptate dignissimos! Asperiores distinctio assumenda autem! Cum consequatur autem dolorum obcaecati asperiores consectetur porro veritatis ab perferendis possimus? Quis dicta veniam quos corporis! Sapiente nesciunt ullam animi dolor voluptates nulla illum aspernatur perferendis obcaecati illo? Culpa atque deserunt officiis. Dolore ipsum culpa tempore. 
            </p>
          </main>
          <footer>
            <button aria-label="Fechar diálogo" onClick={handleCloseDialog}>OK</button>
          </footer>
        </dialog>
      </section>}

    </section>
  );
};

export default Cookies;

