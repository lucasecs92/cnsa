// assets/components/Cookies.jsx
import '../Cookies/style.scss'; 
import { LuCookie } from "react-icons/lu";
import Tooltip from '@mui/material/Tooltip'; 
import Button from '@mui/material/Button';

const Cookies = () => {
 return (
      <section className="containerCookies">
        <Tooltip 
          title="Definições de Cookies" 
          placement='right' 
          arrow
        >
          <Button>
            <LuCookie/>
          </Button>
        </Tooltip>
      </section>
 );
};

export default Cookies;

