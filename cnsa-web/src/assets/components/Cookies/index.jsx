import '../Cookies/style.scss'; 
import { LuCookie } from "react-icons/lu";
import Tooltip from '@mui/material/Tooltip'; 
import Button from '@mui/material/Button';
import { useState } from 'react';

const Cookies = () => {

  const [openDialog, setOpenDialog] = useState(false); // Adiciona o estado para controlar a visibilidade do dialog

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
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
          <button onClick={handleCloseDialog}>Fechar</button>
        </dialog>
      </section>}

    </section>
  );
};

export default Cookies;

