import '../Cookies/style.scss'; 
import { LuCookie } from "react-icons/lu";
import Tooltip from '@mui/material/Tooltip'; 
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

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
      <Tooltip 
        title="Definições de Cookies" 
        placement='right' 
        arrow
        onClick={handleOpenDialog}
      >
        <Button>
          <LuCookie/>
        </Button>
      </Tooltip>

      {openDialog && <section className="overlay">
        <dialog open={openDialog}>
          <header>
            <h2>Title</h2>
          </header>
          <main>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis consequatur magni voluptates nam eligendi alias repellendus quasi minus, atque veniam totam sunt, est officia dignissimos? Dolor facere reprehenderit, vel molestias consectetur, deserunt dignissimos debitis ad doloremque eius assumenda non mollitia rem! Quae eius distinctio natus sapiente voluptas fugiat. Quidem tempora quibusdam provident, molestiae, magnam soluta pariatur necessitatibus quisquam et eligendi at fugit accusantium? Sit officia enim minus sapiente illo distinctio doloremque recusandae, voluptate quia culpa modi consequatur quas eos blanditiis corporis neque aut asperiores ex temporibus soluta in tenetur dolorem et repudiandae! Expedita corporis dicta ad magni corrupti magnam!
            </p>
          </main>
          <footer>
            <button onClick={handleCloseDialog}>OK</button>
          </footer>
        </dialog>
      </section>}

    </section>
  );
};

export default Cookies;

